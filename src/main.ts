import { Equipotential } from '@components/Equipotential';
import { ElectricFieldSensor } from '@components/Sensor';
import { singlyLinkedList } from '@utils/LinkedList';
import { FieldLines } from '@components/FieldLines';
import { Particle } from '@components/particle';
import { DocsService } from '@docs/docs.service';
import { Grid } from '@components/Grid';
import p5 from 'p5';
import { QuizService } from './quiz/quiz.service';

const MAX_ENTITIES_NUMBER = 10;

const quizService = QuizService.instance;

const DocsServiceInstance = DocsService.instance;
DocsServiceInstance.writeDoc("welcome");

const $canvasContainer = document.querySelector('#canvas-container') as HTMLDivElement;
const $buttons = document.querySelector('#buttons');
const $homeDocsButton = document.querySelector<HTMLButtonElement>('#homeDocs');
const $quizButton = document.querySelector<HTMLButtonElement>('#quiz');

const particles: singlyLinkedList<Particle> = new singlyLinkedList();
const sensors: singlyLinkedList<ElectricFieldSensor> = new singlyLinkedList();
const potentialSensors: singlyLinkedList<Equipotential> = new singlyLinkedList();

function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas($canvasContainer.clientWidth, $canvasContainer.clientHeight).parent("canvas-container");
    p.windowResized();
    const [midX, midY] = [p.width / 2, p.height / 2];


    $homeDocsButton?.addEventListener('click', () => {
      DocsServiceInstance.writeDoc("welcome");
    });

    $buttons?.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (!button) {
        return;
      }
      const id = button.id;

      const totalEntities = (particles.length + sensors.length + potentialSensors.length);
      console.log("totalEntities = ", totalEntities)
      const isReachingEntitiesLimit = totalEntities === MAX_ENTITIES_NUMBER - 1;

      switch (id) {
        case "electron":
          if (isReachingEntitiesLimit) {
            alert("No puedes agregar mas entidades, elimina algunas");
            break;
          }
          particles.append(new Particle({
            y: midY,
            x: midX,
            sign: false,
            particles,
            p
          }));
          DocsServiceInstance.writeDoc("electron");
          break;
          
        case "proton":
          if (isReachingEntitiesLimit) {
            alert("No puedes agregar mas entidades, elimina algunas");
            break;
          }
          particles.append(new Particle({
            y: midY,
            x: midX,
            sign: true,
            particles,
            p
          }));
          DocsServiceInstance.writeDoc("proton");
          break;

          case "electric":
          if (isReachingEntitiesLimit) {
            alert("No puedes agregar mas entidades, elimina algunas");
            break;
          }
          sensors.append(new ElectricFieldSensor(midX, midY, p, particles, sensors));
          DocsServiceInstance.writeDoc("electric");
          break;
          
          case "potential":
          if (isReachingEntitiesLimit) {
            alert("No puedes agregar mas entidades, elimina algunas");
            break;
          }
          potentialSensors.append(new Equipotential({
            p,
            y: midY,
            x: midX,
            particles,
            potentialSensors
          }));
          DocsServiceInstance.writeDoc("potential");
          break;
        case "reset":
          particles.clear();
          sensors.clear();
          potentialSensors.clear();
          break;
        default:
          break;
      }
    });

    $quizButton?.addEventListener('click', _ => {
      quizService.spawnNameForm();
    });
  }

  p.draw = () => {
    p.background(0);
    p.cursor(p.ARROW);


    new Grid(p).draw();

    new FieldLines(p, particles).draw();

    const arr: (Particle | ElectricFieldSensor | Equipotential)[] = [...particles.toArray(), ...sensors.toArray(), ...potentialSensors.toArray()];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].isCollidingWith(arr[j])) {
          arr[i].resolveCollision(arr[j]);
        }
      }
    }


    particles.forEach(n => n.draw());
    sensors.forEach(n => n.draw());
    potentialSensors.forEach(n => n.draw());

  }

  p.mousePressed = () => {
    const particlesArr = particles.toArray();
    for (let i = particlesArr.length - 1; i >= 0; i--) {
      particlesArr[i].mousePressed();
      if (particlesArr[i].dragging) {
        break;
      }
    }

    const sensorsArr = sensors.toArray();
    for (let i = sensorsArr.length - 1; i >= 0; i--) {
      sensorsArr[i].mousePressed();
      if (sensorsArr[i].dragging) {
        break;
      }
    }

    const potentialSensorsArr = potentialSensors.toArray();
    for (let i = potentialSensorsArr.length - 1; i >= 0; i--) {
      potentialSensorsArr[i].mousePressed();
      if (potentialSensorsArr[i].dragging) {
        break;
      }
    }
  };

  p.mouseMoved = () => {
    particles.forEach(n => n.mouseOver());
    sensors.forEach(n => n.mouseOver());
    potentialSensors.forEach(n => n.mouseOver());
  }

  p.mouseReleased = () => {
    particles.forEach(n => n.mousePressed());
    sensors.forEach(n => n.mousePressed());
    potentialSensors.forEach(n => n.mousePressed());
  }

  p.windowResized = () => p.resizeCanvas($canvasContainer.clientWidth, $canvasContainer.clientHeight);
}

new p5(sketch);
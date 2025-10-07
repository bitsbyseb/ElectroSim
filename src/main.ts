import renderMathInElement from 'katex/dist/contrib/auto-render';
import { Equipotential } from '@components/Equipotential';
import { ElectricFieldSensor } from '@components/Sensor';
import { singlyLinkedList } from '@utils/LinkedList';
import { FieldLines } from '@components/FieldLines';
import { Particle } from '@components/particle';
import { Grid } from '@components/Grid';
import 'katex/dist/katex.min.css';
import p5 from 'p5';
import { electronDoc } from '@docs/electron';
import { protonDoc } from '@docs/proton';
import { welcomeDocs } from '@docs/welcome';
import { electricFieldSensorDoc } from '@docs/electricFieldSensor';
import { potentialSensorDoc } from '@docs/Potential';

const $canvasContainer = document.querySelector('#canvas-container') as HTMLDivElement;
const $buttons = document.querySelector('#buttons');
const $formulaElement = document.querySelector<HTMLDivElement>(".theory");
const $homeDocsButton = document.querySelector<HTMLButtonElement>('#homeDocs');
// lists
const particles: singlyLinkedList<Particle> = new singlyLinkedList();
const sensors: singlyLinkedList<ElectricFieldSensor> = new singlyLinkedList();
const potentialSensors: singlyLinkedList<Equipotential> = new singlyLinkedList();

function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas($canvasContainer.clientWidth, $canvasContainer.clientHeight).parent("canvas-container");
    p.windowResized();
    const [midX, midY] = [p.width / 2, p.height / 2];


    $homeDocsButton?.addEventListener('click', () => {
      if (!$formulaElement) {
        return;
      }
      $formulaElement.innerHTML = "";
      $formulaElement.innerHTML = welcomeDocs;
      renderMathInElement($formulaElement, {
        delimiters: [
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
      });
    });

    $buttons?.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (button && $formulaElement) {
        const id = button.id;

        switch (id) {
          case "electron":
            particles.append(new Particle({
              y: midY,
              x: midX,
              sign: false,
              particles,
              p
            }));

            $formulaElement.innerHTML = "";
            $formulaElement.innerHTML = electronDoc;
            renderMathInElement($formulaElement, {
              delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
              ],
              throwOnError: false,
              ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
            });
            break;

          case "proton":
            particles.append(new Particle({
              y: midY,
              x: midX,
              sign: true,
              particles,
              p
            }));
            $formulaElement.innerHTML = "";
            $formulaElement.innerHTML = protonDoc;
            renderMathInElement($formulaElement, {
              delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
              ],
              throwOnError: false,
              ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
            });
            break;

          case "sensor":
            sensors.append(new ElectricFieldSensor(midX, midY, p, particles, sensors));
            $formulaElement.innerHTML = "";
            $formulaElement.innerHTML = electricFieldSensorDoc;
            renderMathInElement($formulaElement, {
              delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
              ],
              throwOnError: false,
              ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
            });
            break;

          case "potential":
            potentialSensors.append(new Equipotential({
              p,
              y: midY,
              x: midX,
              particles,
              potentialSensors
            }));
            $formulaElement.innerHTML = "";
            $formulaElement.innerHTML = potentialSensorDoc;
            renderMathInElement($formulaElement, {
              delimiters: [
                { left: '\\[', right: '\\]', display: true },
                { left: '\\(', right: '\\)', display: false }
              ],
              throwOnError: false,
              ignoredTags: ['script', 'noscript', 'style', 'textarea', 'pre', 'code']
            });
            break;
          case "reset":
            particles.setLength(0);
            sensors.setLength(0);
            potentialSensors.setLength(0);
            break;
          default:
            break;
        }
      }
    });
  }

  p.draw = () => {
    p.background(0);
    p.cursor(p.ARROW);

    // Dibujar grid
    new Grid(p).draw();

    new FieldLines(p, particles).draw();
    // Detectar y resolver colisiones
    const arr: (Particle | ElectricFieldSensor | Equipotential)[] = [...particles.toArray(), ...sensors.toArray(), ...potentialSensors.toArray()];
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i].isCollidingWith(arr[j])) {
          arr[i].resolveCollision(arr[j]);
        }
      }
    }


    // Dibujar partículas
    particles.forEach(n => n.draw());
    // dibujar sensores
    sensors.forEach(n => n.draw());
    // dibujar sensores de potencial
    potentialSensors.forEach(n => n.draw());

  }

  p.mousePressed = () => {
    // Iterar en orden inverso para que las partículas "encima" se detecten primero
    const particlesArr = particles.toArray();
    for (let i = particlesArr.length - 1; i >= 0; i--) {
      particlesArr[i].mousePressed();
      // Si esta partícula activó el dragging, detenemos para evitar múltiples selecciones
      if (particlesArr[i].dragging) {
        break;
      }
    }

    const sensorsArr = sensors.toArray();
    for (let i = sensorsArr.length - 1; i >= 0; i--) {
      sensorsArr[i].mousePressed();
      // Si esta partícula activó el dragging, detenemos para evitar múltiples selecciones
      if (sensorsArr[i].dragging) {
        break;
      }
    }

    const potentialSensorsArr = potentialSensors.toArray();
    for (let i = potentialSensorsArr.length - 1; i >= 0; i--) {
      potentialSensorsArr[i].mousePressed();
      // Si esta partícula activó el dragging, detenemos para evitar múltiples selecciones
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
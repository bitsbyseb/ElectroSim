import p5 from 'p5';
import { Particle } from './components/particle';
import { singlyLinkedList } from './utils/LinkedList';
import { Grid } from './components/Grid';
import { FieldLines } from './components/FieldLines';
import { ElectricFieldSensor } from './components/Sensor';

const $canvasContainer = document.querySelector('#canvas-container') as HTMLDivElement;
const $buttons = document.querySelector('#buttons');

// lists
const particles: singlyLinkedList<Particle> = new singlyLinkedList();
const sensors: singlyLinkedList<ElectricFieldSensor> = new singlyLinkedList();

function sketch(p: p5) {
  p.setup = () => {
    p.createCanvas($canvasContainer.clientWidth, $canvasContainer.clientHeight).parent("canvas-container");
    p.windowResized();
    const [midX, midY] = [p.width / 2, p.height / 2];

    $buttons?.addEventListener('click', e => {
      const target = e.target as HTMLElement;
      const button = target.closest('button');
      if (button) {
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
            break;

          case "proton":
            particles.append(new Particle({
              y: midY,
              x: midX,
              sign: true,
              particles,
              p
            }));
            break;

          case "sensor":
            sensors.append(new ElectricFieldSensor(midX, midY, p, particles));
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
    const arr: (Particle | ElectricFieldSensor)[] = [...particles.toArray(), ...sensors.toArray()];
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
  };

  p.mouseReleased = () => {
    particles.forEach(n => n.mouseReleased());
    sensors.forEach(n => n.mouseReleased());
  }

  p.windowResized = () => p.resizeCanvas($canvasContainer.clientWidth, $canvasContainer.clientHeight);
}

new p5(sketch);
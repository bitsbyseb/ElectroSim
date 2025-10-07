import type { singlyLinkedList } from "@utils/LinkedList";
import type { Particle } from "@components/particle";
import { Grid } from "@components/Grid";
import type p5 from "p5";

export class FieldLines {
    protected size = Grid.size;
    static ArrowSize = 50;
    protected arrowColor = "white";
    private METERS_PER_PIXEL = 1e-10;
    constructor(protected p: p5, private particles: singlyLinkedList<Particle>) {
    }

    public draw() {
        for (let x = 0; x <= this.p.width; x += this.size) {
            for (let y = 0; y <= this.p.height; y += this.size) {
                const [Ex, Ey] = this.calculateElectricField(x + (this.size/2), y+(this.size/2));
                const magnitude = Math.sqrt((Ex ** 2) + (Ey ** 2));

                if (magnitude === 0) {
                    continue;
                }

                // normalizar vector
                const nx = Ex / magnitude;
                const ny = Ey / magnitude;

                const vector_x = nx * FieldLines.ArrowSize;
                const vector_y = ny * FieldLines.ArrowSize;

                const finalPointX = x + vector_x;
                const finalPointY = y + vector_y;

                this.drawArrow(x + (this.size/2), y + (this.size/2), finalPointX, finalPointY);
            }
        }
    }

    public calculateElectricField(x: number, y: number): [number, number] {
        const particlesArr = this.particles.toArray();
        let ExTotal = 0;
        let EyTotal = 0;

        for (let particle of particlesArr) {
            let dx = (x - particle.x) * this.METERS_PER_PIXEL;
            let dy = (y - particle.y) * this.METERS_PER_PIXEL;

            const k = 8.99 * (10 ** 9);
            const r = Math.sqrt((dx ** 2) + (dy ** 2));
            // console.table({
            //     r,
            //     q: particle.chargeInCoulombs,
            //     k
            // });

            if (r < particle.radius * this.METERS_PER_PIXEL) {
                continue;
            }

            if (particle.chargeInCoulombs === 0) {
                continue;
            }

            const r3 = r ** 3;

            const Ex_particle = k * particle.chargeInCoulombs * dx / r3;
            const Ey_particle = k * particle.chargeInCoulombs * dy / r3;

            ExTotal += Ex_particle;
            EyTotal += Ey_particle;
        }

        return [ExTotal, EyTotal];
    }

    public drawArrow(x1: number, y1: number, x2: number, y2: number) {
        // Línea principal
        this.p.push();
        this.p.stroke(this.arrowColor)
        this.p.fill(this.arrowColor); // Mismo color que la línea
        this.p.line(x1, y1, x2, y2);

        // Calcular ángulo
        const angle = this.p.atan2(y2 - y1, x2 - x1);
        const arrowSize = 10;

        this.p.translate(x2, y2);
        this.p.rotate(angle);

        // Dibujar triángulo sólido
        this.p.noStroke();
        this.p.triangle(
            0, 0,                           // Punta
            -arrowSize, arrowSize / 2,      // Esquina superior
            -arrowSize, -arrowSize / 2      // Esquina inferior
        );

        this.p.pop();
    }
}
import type p5 from "p5";

export class Grid {
    static size = 50;
    public fillColor = "black";
    public strokeColor = 255;
    constructor(private p: p5) { }

    public draw(): void {
        for (let x = 0; x < this.p.width; x += Grid.size) {
            this.p.push();
            for (let y = 0; y < this.p.height; y += Grid.size) {
                this.p.fill(this.fillColor);
                this.p.stroke(this.strokeColor);
                this.p.strokeWeight(1);
                this.p.rect(x, y, Grid.size, Grid.size);
            }
            this.p.pop();
        }
    }
}
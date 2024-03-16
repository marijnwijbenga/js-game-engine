import {DrawLineInterface} from "../interfaces";

export class DrawLine {

    private readonly ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public draw(line: DrawLineInterface
    ): void {
        if(this.ctx) {
            this.ctx.beginPath();
            this.ctx.moveTo(line.startX, line.startY);
            this.ctx.lineTo(line.endX, line.endY);
            if (line.lineColor) {
                this.ctx.strokeStyle = line.lineColor;
            }
            if(line.lineWidth) {
                this.ctx.lineWidth = line.lineWidth;
                this.ctx.stroke();
            }
        }
    }
}
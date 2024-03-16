
import {DrawCircleInterface} from "../interfaces";

export class DrawCircle {

    private readonly ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public draw(
        circle: DrawCircleInterface
    ): void {

        if (this.ctx) {
            this.ctx.beginPath();
            this.ctx.arc(circle.x,
                circle.y, (circle.diameter / 2), 0, 2 * Math.PI);

            if (circle.strokeColor) {
                this.ctx.strokeStyle = circle.strokeColor
                this.ctx.stroke();
            }


            if (circle.fillColor) {
                this.ctx.fillStyle = circle.fillColor;
                this.ctx.fill();
            }
        }
    }


}
import {DrawRectangleInterface} from "../interfaces";

export class DrawRectangle {

    private readonly ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public draw(
        rectangle: DrawRectangleInterface
    ): void {

        if (this.ctx) {
            if (rectangle.lineColor && rectangle.lineWidth) {
                this.ctx.strokeStyle = rectangle.lineColor;
                this.ctx.lineWidth = rectangle.lineWidth;
                this.ctx.stroke();
            }

            if (rectangle.bgColor) {
                this.ctx.fillStyle = rectangle.bgColor;
                this.ctx.fillRect(
                    rectangle.x,
                    rectangle.y,
                    rectangle.width,
                    rectangle.height
                )
            }

        }
    }
}
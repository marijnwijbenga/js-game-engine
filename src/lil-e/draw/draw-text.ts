import {DrawTextInterface} from "../interfaces";

export class DrawText {
    private readonly ctx: CanvasRenderingContext2D;

    constructor(ctx: CanvasRenderingContext2D) {
        this.ctx = ctx;
    }

    public draw(
        text: DrawTextInterface
    ): void {

        if (this.ctx) {
            this.ctx.font = `${text.fontWeight} ${text.fontSize} ${text.fontFamily}`;
            this.ctx.fillStyle = text.textColor;
            this.ctx.fillText(text.text, text.x, text.y);
        }

    }
}
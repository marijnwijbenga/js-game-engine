import {CanvasOptionsInterface} from "../interfaces";

export class CanvasSetup {

    public canvasId: string;
    public canvas: HTMLCanvasElement;
    private static ctx: CanvasRenderingContext2D | null;

    constructor(canvasId: string) {
        this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
        CanvasSetup.ctx = this.canvas ? this.canvas.getContext('2d') : null;
        this.canvasId = canvasId
    };

    public createCanvas(options: CanvasOptionsInterface = {
        width: 640,
        height: 480,
        backgroundColor: '#000'
    }): HTMLCanvasElement | null {
        if(!this.canvas) {
            console.log('no canvas to work with');
            return null;
        }

        this.canvas.height = options.height;
        this.canvas.width = options.width;
        this.canvas.style.backgroundColor = options.backgroundColor;

        return this.canvas;
    };

    public getContext(): CanvasRenderingContext2D | null {
        if(!CanvasSetup.ctx) {
            console.error('you forgot to create a canvas');
            return null;
        }
        return CanvasSetup.ctx as CanvasRenderingContext2D;
    };

}
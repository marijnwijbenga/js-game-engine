export class GameLoop {

    public update: (deltaTime: number) => void;
    public draw: () => void;

    public targetFPS: number;
    public targetDeltaTime: number;
    public lastFrameTime: number;
    public isRunning: boolean;

    constructor(updateFunction: (deltaTime: number) => void, drawFunction: () => void, targetFPS = 60) {
        this.update = updateFunction;
        this.draw = drawFunction;
        this.targetFPS = targetFPS;
        this.targetDeltaTime = 1000 / targetFPS;
        this.lastFrameTime = 0;
        this.isRunning = false;
    }

    public start() {
        this.lastFrameTime = performance.now();
        this.isRunning = true;
        requestAnimationFrame(this.loop.bind(this));
    }

    public stop(): void {
        this.isRunning = false;
    }

    private loop(timestamp: number): void {
        if (!this.isRunning) return;
        const deltaTime: number = timestamp - this.lastFrameTime;

        if(deltaTime >= this.targetDeltaTime) {
            this.update(deltaTime);
            this.draw();

            this.lastFrameTime = timestamp - (deltaTime % this.targetDeltaTime)
        }

        requestAnimationFrame(this.loop.bind(this));
    }


}
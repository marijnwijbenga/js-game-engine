export class KeyboardInputHandler {
    public keys: { [key: string]: boolean };

    constructor() {
        this.keys = {}

        window.addEventListener('keydown', (event) => this.keyDown(event));
        window.addEventListener('keyup', (event) => this.keyUp(event));
    }

    private keyDown(event: KeyboardEvent): void {
        this.keys[event.key] = true;
    }

    private keyUp(event: KeyboardEvent): void {
        this.keys[event.key] = false;
        console.log(this.keys);
    }

    public isKeyDown(key: string): boolean{
        return this.keys[key];
    }
}
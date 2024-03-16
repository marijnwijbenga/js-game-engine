// load engine here

// todo this would be the place for
//  init
//      setup your initial asset loading
//  gameloop

import {CanvasSetup, DrawCircle, DrawLine, DrawRectangle, DrawText} from "lil-e";
import {GameLoop} from "../../lil-e/game-loop/game-loop.ts";
import {KeyboardInputHandler} from "../../lil-e/input/keyboard.input.handler.ts";

const canvas: CanvasSetup = new CanvasSetup('game');
const ctx: CanvasRenderingContext2D = canvas.getContext() as CanvasRenderingContext2D;

const playerPaddle: DrawRectangle = new DrawRectangle(ctx);
const enemyPaddle: DrawRectangle = new DrawRectangle(ctx);
const ball: DrawCircle = new DrawCircle(ctx);

const playerScore: DrawText = new DrawText(ctx);
const computerScore: DrawText = new DrawText(ctx);

const init = (): void => {
    canvas.createCanvas({
        width: 1200,
        height: 800,
        backgroundColor: '#111113'
    });
}



const input: KeyboardInputHandler = new KeyboardInputHandler();

let paddlePlayerY: number =  canvas.canvas.height / 2 - 60;
let paddleEnemyY: number = canvas.canvas.width - 80 - 20;
let ballX: number = canvas.canvas.width / 2;
let ballY: number = canvas.canvas.height / 2;
let ballVelocityX: number = 8;
let ballVelocityY: number = 8;
const ballRadius: number = 20;


const update = (deltaTime: number): void => {

    if(input.isKeyDown('s')) {
        // move paddle up
        paddlePlayerY += 0.5 * deltaTime;
    }

    if(input.isKeyDown('w')) {
        // move paddle down
        paddlePlayerY -= 0.5 * deltaTime;
    }

    ballX += ballVelocityX;
    ballY += ballVelocityY;

    // todo check for paddle collission


    // todo refactor into collision helper/detector whatever
    // Check for collisions with the left and right canvas boundaries
    if (ballX + ballRadius > canvas.canvas.width || ballX - ballRadius < 0) {
        ballVelocityX = -ballVelocityX; // Reverse X velocity
        // todo set score here and reset ball,
    }

    // Check for collisions with the top and bottom canvas boundaries
    if (ballY + ballRadius > canvas.canvas.height || ballY - ballRadius < 0) {
        ballVelocityY = -ballVelocityY; // Reverse Y velocity
    }
}

const draw = (): void => {

    ctx.clearRect(0,0, canvas.canvas.width, canvas.canvas.height);

    const middleLine: DrawLine = new DrawLine(ctx);
    const playerTag: DrawText = new DrawText(ctx);
    const computerTag: DrawText = new DrawText(ctx);

    for (let i = 0; i < canvas.canvas.height; i += 24) {
        middleLine.draw(
            {
                startX: canvas.canvas.width / 2,
                startY: i,
                endX: canvas.canvas.width / 2,
                endY: i + 10,
                lineColor: '#2a2c31',
                lineWidth: 8
            }
        )
    }

    playerTag.draw({
            text: 'player 1: ',
            fontFamily: 'Arial',
            fontSize: '32px',
            fontWeight: '600',
            textColor: '#696969',
            x: 80,
            y: 60
        }
    );

    computerTag.draw({
            text: 'computer: ',
            fontFamily: 'Arial',
            fontSize: '32px',
            fontWeight: '600',
            textColor: '#696969',
            x: canvas.canvas.width - 320,
            y: 60
        }
    );

    playerPaddle.draw(
        {
            x: 80,
            y: paddlePlayerY,
            width: 20,
            height: 120,
            bgColor: 'whitesmoke'
        });

    enemyPaddle.draw(
        {
            x: canvas.canvas.width - 80 - 20,
            y: canvas.canvas.height / 2 - 60,
            width: 20,
            height: 120,
            bgColor: 'whitesmoke'
        });


    ball.draw({
        diameter: ballRadius * 2, fillColor: '#fff', x: ballX, y: ballY
    });

    playerScore.draw({
            text: '0',
            fontFamily: 'Arial',
            fontSize: '32px',
            fontWeight: '600',
            textColor: '#d59539',
            x: 220,
            y: 60
        }
    );

    computerScore.draw({
            text: '0',
            fontFamily: 'Arial',
            fontSize: '32px',
            fontWeight: '600',
            textColor: '#d59539',
            x: canvas.canvas.width - 150,
            y: 60
        }
    );
}

init();

const gameLoop: GameLoop = new GameLoop(update, draw, 60);

gameLoop.start();


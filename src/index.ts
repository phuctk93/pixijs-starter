import * as PIXI from "pixi.js"
import './css//main.css'

const app = new PIXI.Application({ backgroundColor: 0x1099bb, resolution: window.devicePixelRatio || 1 });
document.body.appendChild(app.view);

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontStyle: 'italic',
    fontWeight: 'bold',
    fill: ['#ffffff', '#00ff99'], // gradient
    stroke: '#4a1850',
    strokeThickness: 5,
    dropShadow: true,
    dropShadowColor: '#000000',
    dropShadowBlur: 4,
    dropShadowAngle: Math.PI / 6,
    dropShadowDistance: 6,
    wordWrap: true,
    wordWrapWidth: 440,
});

const basicText = new PIXI.Text('Hello World!', style);
basicText.anchor.set(0.5);
basicText.x = app.screen.width / 2;
basicText.y = app.screen.height / 2;

app.stage.addChild(basicText);
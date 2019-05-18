import * as PIXI from "pixi.js";
import './css//main.css';

import {Button} from "button";

const app = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundColor: 0x0099ff,
    resolution: window.devicePixelRatio || 1 });
document.body.appendChild(app.view);

/*const chicken = PIXI.Sprite.from("static/chick.png");
chicken.anchor.set(0.5);
chicken.x = app.screen.width / 2;
chicken.y = 128;
chicken.interactive = true;

chicken.on("pointerdown", () => {
    chicken.tint = 0xff0000;
});
chicken.on("pointerup", () => {
    chicken.tint = 0xffffff;
});*/
const chicken = PIXI.Sprite.from("static/chick.png");
chicken.x = app.screen.width / 2;
chicken.y = 128;

const button = new Button("Chicken", app.screen.width / 2, 200);
button.click = () => {
    button.rotation += 0.1;
}

const style = new PIXI.TextStyle({
    fontFamily: 'Arial',
    fontSize: 36,
    fontWeight: 'bold',
    fill: ['#ffffff'],
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

app.stage.addChild(chicken);
app.stage.addChild(button);
app.stage.addChild(basicText);
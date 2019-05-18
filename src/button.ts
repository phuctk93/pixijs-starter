export class Button extends PIXI.Container {
    constructor(label: string, x = 0, y = 0, width = 160, height = 30) {
        super();
        const style = new PIXI.TextStyle({
            fontFamily: "Arial",
            fontSize: 18,
            fontWeight: "bold"
        })
        const text = new PIXI.Text(label, style);
        text.anchor.set(0.5);
        text.x = width / 2;
        text.y = height / 2;

        const bg = new PIXI.Graphics();

        // draw a rounded rectangle
        bg.lineStyle(2, 0x333333, 1);
        bg.beginFill(0xffffff, 1);
        bg.drawRoundedRect(0, 0, width, height, 8);
        bg.endFill();

        this.addChild(bg);
        this.addChild(text);
        //this.addChild(icon);

        this.interactive = true;
        this.pivot.set(width / 2, height / 2);
        this.x = x;
        this.y = y;

        this.on("pointerdown", () => {
            bg.tint = 0x333333;
            style.fill = 0xffffff;
            text.style = style;
            this.click();
        });
        this.on("pointerup", () => {
            bg.tint = 0xffffff;
            style.fill = 0x333333;
            text.style = style;
        });
    }
    click: () => void
}
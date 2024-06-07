const center = getWidth()/2
const paletteWidth = getWidth()+80
const buttonOne = getWidth()/3
const buttonThree = buttonOne*2
const BUTTON_SIZE = 20;
const BRUSH_SIZE = 10;
let color = "black";

function main() {
    loadScreen();
    mouseDragMethod(paint);
    mouseClickMethod(pickColor);
}

function loadScreen() {
    let palette = new Oval(paletteWidth, 150);
    palette.setPosition(center, 20);
    palette.setColor("#bdb6ae");
    add(palette);
    
    addColorSelect("#ac8dd6", "#f15a00", "#376e55");

    let text = new Text("Paint With Colors:");
    text.setPosition(buttonOne-50, text.getHeight());
    text.setColor("#4d3c35");
    add(text);
}

function addColorSelect(color1, color2, color3){
    let button1 = new Circle(BUTTON_SIZE);
    button1.setPosition(buttonOne, 50);
    button1.setColor(color1);
    add(button1);
    
    let button2 = new Circle(BUTTON_SIZE);
    button2.setPosition(center, 60);
    button2.setColor(color2);
    add(button2);
    
    let button3 = new Circle(BUTTON_SIZE);
    button3.setPosition(buttonThree, 50);
    button3.setColor(color3);
    add(button3);
}

function pickColor(e) {
    let obj = getElementAt(e.getX(), e.getY());
    
    if (obj != null && obj.type == "Circle") {
        color = obj.getColor();
    }
}

function paint(e){
    let x = e.getX();
    let y = e.getY();
    
    // Creates paint
    if (y > 90 + BRUSH_SIZE) {
    	let circle = new Circle(BRUSH_SIZE);
    	circle.setColor(color);
    	circle.setPosition(x, y);
    	add(circle);
    }
    
}


main();

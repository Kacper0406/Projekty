function setup() {
    createCanvas(400, 400);
}

function draw() {
    let roof = color(179, 76, 62);
    let wall = color(77, 214, 118);
    let door = color(79, 51, 31);
    let window = color(38, 231, 235);
    let handle = color(255, 190, 38);

    background(166, 253, 255);

    fill(wall)
    rect(100, 175, 200, 200);

    fill(roof);
    triangle(100, 175, 300, 175, 200, 50);

    fill(door);
    rect(125, 250, 75, 125);

    fill(handle);
    circle(190, 325, 10);

    fill(window);
    rect(215, 250, 75, 75);
}
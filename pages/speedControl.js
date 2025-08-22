// GIF Speed Control
// Click to cycle through different speeds
// Make sure to upload images/default.gif to your p5 sketch

let gif;
let speedIndex = 1;
let speeds = [50, 100, 200, 500]; // milliseconds between frames
let speedNames = ['Fast', 'Normal', 'Slow', 'Very Slow'];

function preload() {
    // Load the GIF file
    gif = loadImage('images/default.gif');
}

function setup() {
    createCanvas(400, 300);
    
    // Start playing at normal speed
    gif.play();
    gif.delay(speeds[speedIndex]);
}

function draw() {
    background(240);
    
    // Display the GIF centered on canvas
    if (gif.width > 0) {
        let scale = min(width / gif.width, height / gif.height) * 0.8;
        let w = gif.width * scale;
        let h = gif.height * scale;
        image(gif, (width - w) / 2, (height - h) / 2, w, h);
    }
    
    // Show instructions
    fill(0, 150);
    textAlign(CENTER);
    textSize(16);
    text('Click to Change Speed', width / 2, height - 20);
    
    // Show current speed
    textSize(14);
    text('Speed: ' + speedNames[speedIndex], width / 2, 30);
}

function mousePressed() {
    // Check if mouse is within canvas bounds
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        // Cycle to next speed
        speedIndex = (speedIndex + 1) % speeds.length;
        gif.delay(speeds[speedIndex]);
    }
}

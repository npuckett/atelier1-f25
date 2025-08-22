// GIF Play/Pause Control
// Click the canvas to toggle between play and pause
// Make sure to upload images/default.gif to your p5 sketch

let gif;
let isPlaying = true;

function preload() {
    // Load the GIF file
    gif = loadImage('images/default.gif');
}

function setup() {
    createCanvas(400, 300);
    
    // Start the GIF playing
    gif.play();
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
    text('Click to Play/Pause', width / 2, height - 20);
    
    // Show current status
    textSize(14);
    text('Status: ' + (isPlaying ? 'Playing' : 'Paused'), width / 2, 30);
}

function mousePressed() {
    // Check if mouse is within canvas bounds
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        if (isPlaying) {
            gif.pause();
            isPlaying = false;
        } else {
            gif.play();
            isPlaying = true;
        }
    }
}

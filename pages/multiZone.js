// GIF Multi-Zone Control
// Top: play/pause, Middle: speed, Bottom: reset
// Make sure to upload images/default.gif to your p5 sketch

let gif;
let isPlaying = true;
let currentSpeed = 100;

function preload() {
    // Load the GIF file
    gif = loadImage('images/default.gif');
}

function setup() {
    createCanvas(400, 300);
    
    // Start playing the GIF
    gif.play();
}

function draw() {
    background(240);
    
    // Draw zone dividers
    stroke(150);
    strokeWeight(2);
    line(0, height / 3, width, height / 3);
    line(0, 2 * height / 3, width, 2 * height / 3);
    
    // Display the GIF centered on canvas
    if (gif.width > 0) {
        let scale = min(width / gif.width, height / gif.height) * 0.6;
        let w = gif.width * scale;
        let h = gif.height * scale;
        image(gif, (width - w) / 2, (height - h) / 2, w, h);
    }
    
    // Show zone labels
    fill(0, 150);
    textAlign(CENTER);
    textSize(12);
    text('PLAY/PAUSE', width / 2, 20);
    text('SPEED', width / 2, height / 3 + 20);
    text('RESET', width / 2, 2 * height / 3 + 20);
    
    // Show status
    textSize(10);
    text('Status: ' + (isPlaying ? 'Playing' : 'Paused'), width / 2, height - 40);
    text('Speed: ' + (currentSpeed === 50 ? 'Fast' : 'Normal'), width / 2, height - 25);
}

function mousePressed() {
    // Check if mouse is within canvas bounds
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        let zone = floor(mouseY / (height / 3));
        
        if (zone === 0) {
            // Top zone - play/pause
            if (isPlaying) {
                gif.pause();
                isPlaying = false;
            } else {
                gif.play();
                isPlaying = true;
            }
        } else if (zone === 1) {
            // Middle zone - speed
            currentSpeed = currentSpeed === 50 ? 100 : 50;
            gif.delay(currentSpeed);
        } else {
            // Bottom zone - reset
            if (typeof gif.reset === 'function') {
                gif.reset();
            }
        }
    }
}

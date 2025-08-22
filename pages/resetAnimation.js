// GIF Reset Animation
// Double-click to reset to first frame
// Make sure to upload images/default.gif to your p5 sketch

let gif;
let lastClickTime = 0;
let doubleClickDelay = 300; // milliseconds

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
    text('Double-click to Reset', width / 2, height - 20);
    
    // Show current frame
    textSize(14);
    if (typeof gif.getCurrentFrame === 'function') {
        text('Frame: ' + (gif.getCurrentFrame() + 1), width / 2, 30);
    }
}

function mousePressed() {
    // Check if mouse is within canvas bounds
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        let currentTime = millis();
        
        // Check for double-click
        if (currentTime - lastClickTime < doubleClickDelay) {
            // Double-click detected - reset animation
            if (typeof gif.reset === 'function') {
                gif.reset();
            }
        }
        
        lastClickTime = currentTime;
    }
}

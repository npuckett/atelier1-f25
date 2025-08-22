// GIF Frame Navigation
// Click to advance to the next frame
// Make sure to upload images/default.gif to your p5 sketch

let gif;
let currentFrame = 0;

function preload() {
    // Load the GIF file
    gif = loadImage('images/default.gif');
}

function setup() {
    createCanvas(400, 300);
    
    // Pause the GIF to control frames manually
    gif.pause();
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
    text('Click to Next Frame', width / 2, height - 20);
    
    // Show current frame (if available)
    textSize(14);
    if (typeof gif.getCurrentFrame === 'function') {
        currentFrame = gif.getCurrentFrame();
        text('Frame: ' + (currentFrame + 1), width / 2, 30);
    }
}

function mousePressed() {
    // Check if mouse is within canvas bounds
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        // Advance to next frame
        if (typeof gif.getCurrentFrame === 'function' && typeof gif.numFrames === 'function') {
            let current = gif.getCurrentFrame();
            let next = (current + 1) % gif.numFrames();
            gif.setFrame(next);
        }
    }
}

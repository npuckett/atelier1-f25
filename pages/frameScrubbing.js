// GIF Frame Scrubbing
// Click left/right halves to jump backward/forward
// Make sure to upload images/default.gif to your p5 sketch

let gif;
let currentFrame = 0;
let totalFrames = 1;

function preload() {
    // Load the GIF file
    gif = loadImage('images/default.gif');
}

function setup() {
    createCanvas(400, 300);
    
    // Pause the GIF for manual control
    gif.pause();
    
    // Get total frame count (if available)
    if (typeof gif.numFrames === 'function') {
        totalFrames = gif.numFrames();
    }
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
    
    // Show click zones
    stroke(100);
    strokeWeight(2);
    line(width / 2, 0, width / 2, height);
    
    // Show instructions
    fill(0, 150);
    textAlign(CENTER);
    textSize(12);
    text('Left ← Right →', width / 2, height - 20);
    
    // Show current frame
    textSize(14);
    if (typeof gif.getCurrentFrame === 'function') {
        currentFrame = gif.getCurrentFrame();
        text('Frame: ' + (currentFrame + 1) + ' / ' + totalFrames, width / 2, 30);
    }
}

function mousePressed() {
    // Check if mouse is within canvas bounds
    if (mouseX >= 0 && mouseX <= width && mouseY >= 0 && mouseY <= height) {
        if (typeof gif.setFrame === 'function' && typeof gif.getCurrentFrame === 'function') {
            let current = gif.getCurrentFrame();
            
            if (mouseX < width / 2) {
                // Left half - go backward
                let prev = current - 1;
                if (prev < 0) prev = totalFrames - 1;
                gif.setFrame(prev);
            } else {
                // Right half - go forward
                let next = (current + 1) % totalFrames;
                gif.setFrame(next);
            }
        }
    }
}

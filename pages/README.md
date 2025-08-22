# atelier1-f25
Repository for the content of the Fall 2025 edition of Atelier 1

## p5.js GIF Animation Examples

This repository contains interactive examples demonstrating how to control GIF animations using p5.js. Each `.js` file is a complete, ready-to-use sketch that can be copied directly into the p5.js web editor.

### Files Overview

#### 🎮 **playPause.js**
- **Purpose**: Basic play/pause control
- **Interaction**: Click anywhere on canvas to toggle animation
- **Methods Used**: `gif.play()`, `gif.pause()`
- **Best For**: Learning basic GIF control

#### 🎯 **frameNavigation.js**
- **Purpose**: Manual frame-by-frame navigation
- **Interaction**: Click to advance to next frame
- **Methods Used**: `gif.setFrame()`, `gif.getCurrentFrame()`, `gif.numFrames()`
- **Best For**: Precise animation control

#### ⚡ **speedControl.js**
- **Purpose**: Dynamic speed adjustment
- **Interaction**: Click to cycle through different playback speeds
- **Methods Used**: `gif.delay()`
- **Best For**: Animation timing experiments

#### 🎬 **frameScrubbing.js**
- **Purpose**: Bidirectional frame scrubbing
- **Interaction**: Click left/right halves of canvas to navigate backward/forward
- **Methods Used**: `gif.setFrame()`, `gif.getCurrentFrame()`, `gif.numFrames()`
- **Best For**: Video-like scrubbing interface

#### 🔄 **resetAnimation.js**
- **Purpose**: Animation reset functionality
- **Interaction**: Double-click to reset to first frame
- **Methods Used**: `gif.reset()`
- **Best For**: Learning reset mechanics

#### 🎛️ **multiZone.js**
- **Purpose**: Multiple controls in one interface
- **Interaction**: Canvas divided into 3 zones (top: play/pause, middle: speed, bottom: reset)
- **Methods Used**: `gif.play()`, `gif.pause()`, `gif.delay()`, `gif.reset()`
- **Best For**: Comprehensive control interface

### How to Use

#### Method 1: Direct Copy-Paste
1. Open any `.js` file in this repository
2. Select all content (Ctrl+A / Cmd+A)
3. Copy the code (Ctrl+C / Cmd+C)
4. Go to [p5.js Web Editor](https://editor.p5js.org)
5. Replace the default code with the copied code
6. Upload your GIF file as `images/default.gif` in the sketch files
7. Run the sketch!

#### Method 2: From Web Interface
1. Visit the interactive demo website (`giftest-new.html`)
2. Click any "View Code" button
3. The corresponding `.js` file will open in a new tab
4. Follow steps 2-7 from Method 1

### Requirements

- **p5.js**: Uses the standard p5.js library (automatically included in web editor)
- **GIF File**: Upload your animated GIF as `images/default.gif` in the sketch folder
- **Modern Browser**: Supports HTML5 canvas and modern JavaScript

### File Structure for p5.js Web Editor

```
Your Sketch/
├── sketch.js (paste the example code here)
└── images/
    └── default.gif (your animated GIF file)
```

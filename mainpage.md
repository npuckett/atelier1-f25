
# Course Description

**Atelier 1: Working in Public – Fundamentals of Experimental Interaction Design**

In this Atelier we will be looking at the methods, concepts, and tools used to create engaging interactive experiences for the 'public'. We will focus on creating new possibilities for 'screen-based' work that pushes beyond the current expectations for this mode of interaction.

## Course Learning Objectives

- Understanding the basics of how coding/interaction work
- Structuring interactive experiences not just reactive experiences
- Expanding expectations around standard input/output methods
- Screens exist in spaces and places with people and things
- Designing the plan as much as the thing
- The hand made and the generative

## Course Streams
This work will be broken down into multiple streams that we will develop over the semester:

### Designing Tension and Action
How do you get someone to interact? How do they know what to do? What keeps them interested? We will look at examples and techniques for designing interactions at multiple stages of the process.

### Visualization
How do you explain something that doesn't exist yet? Finding ways to visualize your intentions is a key tool for working through your ideas and discussing them with others. This can be drawings, renders, collages, or whatever works best for your process. However, we will be treating these parts of the project as importantly as the prototypes themselves.

### Tools
How do I create the interaction? How do people get to use it? From the technical side, we will be looking at the web-based coding languages of p5.js, ml5, and three.js. This will be done in the context of contemporary coding tools that leverage AI models. No, it doesn't just do the coding for you, so we will be looking at the important fundamentals and tools for writing code.

### Testing & Feedback
How do people respond to the work? Do they act the way you thought they would? The development methods will focus on testing your designs early and often with your classmates.

## Course Structure

The semester is essentially split in half. In the first 6 weeks there will be two, 3-week workshops that introduce the various themes of the course. The second 6 weeks [content to be completed].

---

# Assignments

## Workshop 1 – Real Things, Fake Project

**Format**: Groups of 3 (randomly assigned)

### Description
Workshop 1 asks you to imagine and design a new interactive experience for the entry lobby of 205 Richmond that changes the way people currently use the space. The design must incorporate a screen or many screens and some form of interactivity. The goal is to design the space using products available today, but with no limitation on the budget. You do not need to actually program the media or interaction, but you do need to produce drawings, images, videos that explain how it COULD work.

### Constraints
- The design can engage any surface or space within the entry lobby. Walls, floor, doors, windows, stairs
- The boundary is set by: the front doors, the elevator doors, the doors to xfab, and the doors to the 1st floor
- While your proposal in no way needs to be practical, you should consider how it would overlay with the existing functions of the space

### Tools
- Photoshop
- 3d modelling software (Blender/Maya)

### Deliverables

#### Interactive
- None

#### Documentation
- **Description**: 100 – 200 words that describe the concept of the project and how it works
- **Visualizations**: 2-3 images that show how the experience would look in the space
- **Diagrams**: 1-2 drawings or diagrams that explain how the system works

#### Optional
- Mock-up video showing the interaction and effects

#### Component Budget Breakdown
There is no maximum budget for what you propose, but you must produce an estimate of the total cost in Canadian Dollars. In addition to the total cost, the budget should be broken down by item and include:
- 1 sentence description of its purpose
- Price per unit
- Quantity
- Link to supplier

> **Note**: You do not have to consider product lead time or availability, but it does need to be components that currently exist.

### Submission Format
The Description, Visualizations, and Budget should be submitted as a single PDF file. Optional videos should be submitted as links to Vimeo/Youtube within the PDF.

---

## Workshop 2 – Uncommon Everyday

**Format**: Individual

### Description
Workshop 2 requires you to take a new look at an activity you have likely done many times before: Looking at animated gifs on your phone. For this project we will be looking at how to transform this from passive viewing to active participation. You must create an experience that uses one or more of the base modes of interacting with your phone: Touch/scroll, Microphone, or Gyroscope/Accelerometer to control an interaction with an animated Gif. We will use the functionality available in p5.js to enable new ways to read, interpret, and apply the inputs to the gif. You also have the option to create custom cases or props for interacting with the phone.

The goal is to design an interaction that is specific to the Gif's content and movement to create an engaging experience.

### Constraints
- The design must exist as a public url that can be shared with your classmates
- You must create the animated Gif yourself, don't simply use an existing one
- The experience must be designed for phones. No laptops
- Don't do anything that could damage yours or others phones
- If you are creating optional phone cases or props, you must fabricate enough for 5 people to use them

### Tools
- p5.js
- VSCode + Github Copilot
- Github

### Deliverables

#### Interactive
A web application hosted on a public url that allows users to interact with your gif via their phone's web browser.

#### Documentation
A PDF that contains:
- 100 – 200 word description of the concept and interaction
- URL of the website hosting your experience
- Youtube/vimeo link demonstrating the interaction
- Concept image / drawing describing the interaction

---

## Main Project – Building Character(s)

**Format**: Individual

### Description
For the main project, you will work to take an existing physical object and convert it into an interactive digital character that operates on your phone. You must design its personality, movement, and appearance in response to inputs. In addition to the methods explored in Workshop 2, we will expand to examine more complex methods of input such as hand/body tracking via the camera.

### Constraints
- The design must exist as a public url that can be shared with your classmates
- You must create the animated Gif yourself, don't simply use an existing one
- The experience must be designed for phones. No laptops

## Project Steps / Phases

> Project development is never fully linear. You may well have to backtrack during the process, but this is the general structure of how you will develop the work over 6 weeks.

### 1. Choose an Object
Your character must be based on an existing, inanimate, physical object, so first you need to choose one. It can be anything of any size. You will be creating a personality and interactions for this object, so consider how its physical traits can provide hints as to how it will behave.

### 2. Digitize It
Once you have chosen your object, the next step is to decide how you want to bring it into digital space. There are many different techniques (or combinations) you can use including photography, drawing, painting, 3d scanning, videos, or other methods. It is important to consider how this phase can change the object into a character. It should be recognizable, but you should take creative freedom in what you add, delete, or accentuate. This process will likely involve combinations of several techniques and software. Consider how the object can be broken into smaller parts to allow for more complex movement and response.

At this phase we will explore the tools within p5.js that let you dynamically display and manipulate multiple types of media on screen.

### 3. Develop Its Personality and Story
Now that your object is digital you have the freedom to create its backstory and personality.

What is this Creature? What does it like? What does it dislike? What does it want? How does it move? Create this through writings, drawings, renders whatever technique works for you.

### 4. Code the First Interactions
Now that you have a clear plan and visualizations of what you want your character to do, we'll work on converting that to code using p5.js. This conversion can be a bit abstract, but we will look at several techniques that allows you to translate the nuance of your character's personality into response and motion. Start with a few of the core interactions, don't try to implement them all at once.

### 5. Playtest the First Interactions
At this stage you will formally playtest your first interactions with your classmates. It is important to use the materials you created to design the personality of your character to quickly describe your concept. Additionally, you should consider what questions you want to ask. Be specific. There will be several people testing at once, so create a system for gathering feedback.

### 6. Develop Version 2
Building on the Playtest Feedback and overall goals, add and refine your character's interactions. This is the chance to build more detail and move from reactive to interactive systems. To do this, you'll need to consider issues such as memory and evolution of responses over time.

### 7. Playtest Version 2
Like the first round, you will playtest the second version of your character. You will still have time to implement updates, so this is an important round of inputs. For the second version you should also consider how to improve on the way you collect feedback from your testers.

### 8. Project Documentation
Following the second playtest you will have an additional 2 weeks to implement any changes and finishes to your site. In this time you will also create comprehensive documentation which will be posted to the course website.

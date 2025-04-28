[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-22041afd0340ce965d47ae6ef1cefeee28c7c493a6346c4f15d667ab976d596c.svg)](https://classroom.github.com/a/Hl2JaK93)
[![Open in Codespaces](https://classroom.github.com/assets/launch-codespace-2972f46106e565e64193e422d61a12cf1da4916b45550586e14ef0a7c637dd04.svg)](https://classroom.github.com/open-in-codespaces?assignment_repo_id=19230396)

# IDG1293 Advanced CSS: Oblig 3

## Project Overview and Purpose
This project includes an interactive website that uses scroll telling and storytelling. The goal is to raise awareness about one of the UN’s Sustainable Development Goals (SDGs) through visuals, animations, and interactive elements. We wanted to inform, inspire, and get people thinking, while also exploring tools like SVG and CSS drawings, JavaScript animations, and SASS and BEM.

This project is a scrollytelling that focuses on Sustainable Development Goal 14: Life Below Water. The idea is to tell a visual story that shows how life in the ocean is being affected by pollution and climate change.

## GitHub Pages
Link to GitHub pages: https://idg1293-2025.github.io/oblig3-2/

## Brainstorming 
In the beginning of the project, we held a brainstorming session to generate ideas. We began to review UN SDG goals. After looking at each goal, we ended up choosing between SDG 14 and SDG 3. We quickly agreed on SDG 14: Life Below Water, because we felt that it had more visual potential and an environmental message. 
We discussed different narratives on how to style and structure the page. One idea that stood out was to use scrolling as a metaphor for diving. We did a small sketch of the page layout so that we could work in that direction. We also discussed what kinds of animations and interactivity we could use. We talked about fish swimming by, trash floating, light changing as you go further down and so on.  
We also used ChatGPT during our brainstorming session to help us refine our ideas. It helped us explore creative ideas, develop the structure of our story, and helped us with a work plan to get started and how to delegate the work in the group. 

## Storyboard
<img src="assets/images/storyboard.png" alt="Storyboard" width="300"/>

The story is split into several parts. First, we start above the water, where everything looks calm and beautiful. Then, as the user scrolls down, they dive deeper into the ocean. The water gets darker and we see more and more trash and damage to marine life. In the last part, the story shifts to what we can do to fix things and protect the ocean. The goal is to make people more aware of the problem and encourage them to take action.

## Technology Stack
### Tech Stack:

- HTML5: Used for structuring the content of the website.

- SCSS/SASS: Used for styling the website with a modular and maintainable approach.

- JavaScript: Used for adding interactivity and Intersection Observer

- BEM (Block Element Modifier): Employed for structuring and naming CSS classes, maintaining clarity and consistency in the project.

### Animations, interactions and observers
- CSS Keyframe Animations: Applied for animating elements like fish, plastic, and other SVGs to bring the website to life.

- GSAP: Implemented to create smooth, scroll-triggered animations for certain elements such as floating fish, objects, and text.

- ScrollTrigger: In JS, used to trigger animations based on the user's scroll position, ensuring some elements animate when user scrolls down the page.

- Intersection Observer: Integrated to trigger animations only when specific sections are in viewport, optimizing performance by preventing animations from running when it is not in view.

## Assignment Goals and Implementation
### Scroll Telling and Storytelling
We implemented vertical scroll to guide users through the storytelling. Intersection Observer was used to trigger animations at the right moment, and we added text like "scroll to see what's under the surface" to help users 'engage' with the content.

### SVGs and CSS Drawing
SVGs were used for visual elements and implemented as <img>. This was because it made them easier to manage and kept the code cleaner. Since we didn’t need to manipulate or style individual parts of the SVGs, using <img> was a more efficient approach for this project. The SVG elements were optimized with small file sizes (2–5kb). 

We also used background gradients to create a dynamic background that reflects the ocean. It transitions from lighter to darker blue, symbolizing both the ocean’s depth when diving and the environmental challenges it faces, with the darker colors representing the ocean's trouble. 

### Sass and BEM Implementation
We structured the CSS using the BEM (Block, Element, Modifier) methodology and used SASS for better organization and maintainability of styles.

### Accessibility and Responsiveness
We added user preferences like "prefers-reduced-motion" so that animations were turned off.
For responsiveness, we used relative units like rem, %, vh, and vw to ensure the layout adapts to different screen sizes. We also added media queries so that it adapts for various device sizes making sure the layout is responsive.

### Interactive Elements with JavaScript and CSS
We used GSAP to add scroll-based animations and interactions such as dolphin swimming in to the viewport and drop falling down, and applied CSS transitions for simple animations such as pulsating sun and swaying fish. 

### Collaboration and Version Control
We used Git and GitHub for version control and collaboration, using branches, commits, pull requests, reviewing and merging. 

### Performance Optimisation
We optimized web performance by using small SVG elements and Intersection Observer for efficient scroll animations. This ensured smooth scroll telling and a good user experience.

### Design Principles and User Experience (UX)
We focused on a clear visual design, readable typography (two types: one for headline and one for text), and clear contrast between text and background (blue shades and either black or white text). 

## Content
Text content retrieved from: https://sdgs.un.org/goals/goal14#progress_and_info 

SVG elements retreived from: https://www.svgrepo.com/ 

### Part 1: Above the surface 
Did you know that oceans cover more than 70% of our planet? 
They're like the Earth's life support system, providing food and homes for billions of people and animals. 

### Part 2: The ocean
Beneath the waves is an underwater paradise — coral reefs, sparkling fish, and all kinds of creatures. 
The ocean regulates our climate, provides food, and is home to amazing ecosystems.

Click the arrow to dive in and see what’s really going on beneath the surface!

### Part 3: The threats
Things are changing and the oceans are in trouble. 

The ocean isn't the beautiful place it once was. Pollution is everywhere: plastic waste, oil spills, abandoned fishing nets. 

Every year, millions of tons of plastic end up in the ocean, harming fish, coral reefs, and even the air we breathe.


### Part 4: Call to action
It’s time to act. Together, we can make a real difference and protect the ocean for future generations.

So, what can you do? 

We can all make a difference! Use less plastic, support eco-friendly brands, and get involved in beach cleanups. Every small action counts!

The ocean needs us more than ever, and together, we can make a real impact. Let’s step up and show some love for the sea! 

Button: Join to save the ocean

Link: Read more about goal 14

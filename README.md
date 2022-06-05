# Plant Journal in JavaScript

Descripton: This is my first completely original idea for a JavaScript project. I have a real need to track information concerning my indoor and outdoor plants, so I hope that this program will actually help me with my plant care and documentation.

## Table of contents

- [Overview](#overview)
  - [My Code](#my-code)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)
- [The Directions](#frontend-mentor---qr-code-component) 

## Overview

I am starting off very small with what I have learned so far in JavaScript.  I will continue to develop this project as I learn more.  Also, I hope that this project will be the beginnings of a much larger project--a personal journal web app--to track, in addition to my plants, my health, finances, home maintenance, and hair care.

The plant tracker will store information about the plant. For the indoor plants, I would want to store info about name, age, source, care requirements, dates watered, dates fertilized, growth, repottings, cuttings, pests, diseases, damage, and death.  For the outdoor perennial plants, I would want to keep track of, in addition to all of the above, date sprouted, date bloomed, relocations rather than repottings.

I would like the user to be able to retrieve, add, and delete information as needed.


### My Code

```
const indoorPlants = [];
const outdoorPlants = [];
let welcomePrompt = prompt("Welcome to your Plant Tracker! Current Indoor Plants List(" + indoorPlants.length + "):" + indoorPlants  + "     " + "Current Outdoor Plants List(" +  outdoorPlants.length + "):" + outdoorPlants  + "     " +  "Are you ready to begin? (type: yes or no)");
welcome = welcomePrompt.toLowerCase();
function getPlantInfo() {
    let indoorPlantWords = "plants are";
    let outdoorPlantWords = "plants are";
    while (welcome === "yes") {
        addRemovePlants();   
        if (indoorPlants.length === 1) {
            indoorPlantWords = "plant is"; 
        } else {
            indoorPlantWords = "plants are";
        }
        if (outdoorPlants.length === 1) {
            outdoorPlantWords = "plant is";
        } else {
            outdoorPlantWords = "plants are";
        }
        alert(`Great! Your ${indoorPlants.length} indoor ${indoorPlantWords}: ${indoorPlants} and your ${outdoorPlants.length} outdoor ${outdoorPlantWords}: ${outdoorPlants}`);
        welcome = prompt("Ready for the next action. Do you wish to continue? (type: yes or no)");
        welcome = welcome.toLowerCase();
    }
    alert("Okay, have a nice day!");
}

function addRemovePlants() {
let typePrompt = prompt("Which plant list would you like to change? (type: indoor or outdoor)?");
type = typePrompt.toLowerCase();
let actionPrompt = prompt("Do you wish to add a new plant to the list, or to remove the last plant from the list? (type: add or remove)?");
action = actionPrompt.toLowerCase();
let name = prompt("What is the name of the plant you wish to add? (If removing a plant, leave blank.)");

    if (type === "indoor" && action === "add") {
        indoorPlants.push(name);
    }
    else if (type === "outdoor" && action === "add") {
        outdoorPlants.push(name);
    }   
    else if (type === "indoor" && action === "remove") {
        indoorPlants.pop();
    }
    else if (type === "outdoor" && action === "remove") {
        outdoorPlants.pop();
    } else {
        alert("Hmm, something went wrong.  Please try again.");
    }
}

getPlantInfo();

console.log("Indoor Plants:");
console.log(indoorPlants);
console.log("Outdoor Plants:");
console.log(outdoorPlants);
```


### Links

- Live Site URL: [My Plant Tracker on CodePen](https://codepen.io/faraja17/pen/XWZEWoz)

## My process



### Built with

- JavaScript ES6

### What I learned



### Continued development



### Useful resources

- []() - annotation
- []() - annotation
- 
## Author

Faraja Thompson

- [My Personal Website](https://faraja17.github.io/my-website/)
- [My Blog: Teacher to Techie](https://faraja17.github.io/)
- [Faraja Thompson, M.Ed. on LinkedIn](https://www.linkedin.com/in/faraja-thompson-m-ed-70885b8/)

## Acknowledgments

I'd like to acknowledge my son and mentor [DeForestt Thompson](https://github.com/DeForestt).  His steadfast support and encouragement keep me motivated!  Thanks for forcing me to use the command-line, Son <3 <3 <3.

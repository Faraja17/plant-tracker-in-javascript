const indoorPlants = [];
const outdoorPlants = [];


let typePrompt = prompt("Is your plant indoor or outdoor?");
let type = typePrompt.toLowerCase();
let actionPrompt = prompt("Do you wish to add or remove the plant?");
let action = actionPrompt.toLowerCase();
let name = prompt("What is the name of your plant?")

function addRemovePlants() {
    if (type === "indoor" && action === "add") {
        indoorPlants.push(name);
    }
    else if (type === "outdoor" && action === "add") {
        outdoorPlants.push(name);
    }   
    else if (type === "indoor" && action === "remove") {
        indoorPlants.pop(name);
    }
    else if (type === "outdoor" && action === "remove") {
        outdoorPlants.pop(name);
    } else {
        alert("Have a nice day!");
    }
    console.log("Indoor Plants:")
    console.log(indoorPlants);
    console.log("Outdoor Plants:")
    console.log(outdoorPlants);
}

addRemovePlants();
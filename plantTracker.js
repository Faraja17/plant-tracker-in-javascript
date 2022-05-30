const indoorPlants = [];
const outdoorPlants = [];
let welcome = prompt("Welcome to your Plant Tracker! Are you ready to begin (yes or no)?").toLowerCase();

function getPlantInfo() {
    while (welcome === "yes") {
        addRemovePlants();
        // alert("Great! Your indoor plants are: " + indoorPlants + ", and your outdoor plants are " + outdoorPlants ".");
        welcome = prompt("Ready for the next plant. Do you wish to continue (yes or no)?");
    }
    alert("Okay, have a nice day!");
}

function addRemovePlants() {
let typePrompt = prompt("Is your plant indoor or outdoor?");
type = typePrompt.toLowerCase();
let actionPrompt = prompt("Do you wish to add or remove the plant?");
action = actionPrompt.toLowerCase();
let name = prompt("What is the name of your plant?");

    if (type === "indoor" && action === "add") {
        indoorPlants.push(name);
        alert("Indoor plants:" + indoorPlants);
    }
    else if (type === "outdoor" && action === "add") {
        outdoorPlants.push(name);
        alert("Outdoor plants:" + outdoorPlants);
    }   
    else if (type === "indoor" && action === "remove") {
        indoorPlants.pop(name);
        alert("Indoor plants:" + indoorPlants);
    }
    else if (type === "outdoor" && action === "remove") {
        outdoorPlants.pop(name);
        alert("Outdoor plants:" + outdoorPlants);
    } else {
        alert("Have a nice day!");
    }
    console.log("Indoor Plants:");
    console.log(indoorPlants);
    console.log("Outdoor Plants:");
    console.log(outdoorPlants);
}

getPlantInfo();
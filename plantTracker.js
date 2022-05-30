const indoorPlants = [];
const outdoorPlants = [];
let welcome = prompt("Welcome to your Plant Tracker!  Do you wish to add or remove a plant (yes or no)?").toLowerCase();

function getPlantInfo() {
    while (welcome === "yes") {
        addRemovePlants();
        welcome = prompt("Do you wish to add or remove another plant (yes or no)?")
    }
    alert("Have a nice day!");
}

function addRemovePlants() {
let typePrompt = prompt("Is your plant indoor or outdoor?");
type = typePrompt.toLowerCase();
let actionPrompt = prompt("Do you wish to add or remove the plant?");
action = actionPrompt.toLowerCase();
let name = prompt("What is the name of your plant?");

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
    console.log("Indoor Plants:");
    console.log(indoorPlants);
    console.log("Outdoor Plants:");
    console.log(outdoorPlants);
}

getPlantInfo();
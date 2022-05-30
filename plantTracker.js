const indoorPlants = [];
const outdoorPlants = [];
let welcome = prompt("Welcome to your Plant Tracker! Current Indoor Plants List(" + indoorPlants.length + "):" + indoorPlants  + "     " + "Current Outdoor Plants List(" +  outdoorPlants.length + "):" + outdoorPlants  + "     " +  "Are you ready to begin? (type: yes or no)").toLowerCase();

function getPlantInfo() {
    while (welcome === "yes") {
        addRemovePlants();
        alert("Great! Your " + indoorPlants.length + " indoor plants are: " + indoorPlants + "  , and your" + outdoorPlants.length + " outdoor plants are: " + outdoorPlants + ".");
        welcome = prompt("Ready for the next action. Do you wish to continue? (type: yes or no)");
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
    console.log("Indoor Plants:");
    console.log(indoorPlants);
    console.log("Outdoor Plants:");
    console.log(outdoorPlants);
}

getPlantInfo();
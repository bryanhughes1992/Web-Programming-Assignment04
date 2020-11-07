//#### ASSIGNMENT 4 - VETERINARY CLINIC ####
//pet objects
var animalOne = {
    type: 'Cat',
    name: 'Mary Jane',
    breed: 'Calico'
};

var animalTwo = {
    type: 'Dog',
    name: 'Bruce',
    breed: 'Golden Doodle'
};

//client object

var client = {
    clientName: 'Bryan Hughes',
    phone: '647-999-9292',
    pets: [animalOne.name, animalTwo.name],
    vetClinic: 'Westbridge Veterinary Hospital'
};

//Logical programming

window.addEventListener("load", addClientName);
var spanBtn = document.getElementById('clientBtn');
window.addEventListener("click", showPets);


function addClientName() {
    var spanElement = document.getElementById('clientName');
    spanElement.innerHTML = client.clientName;
}

function showPets() {
    var petOne = document.getElementById('pet1');
    petOne.innerHTML = animalOne.name + " ( " + animalOne.type + " )";

    var petTwo = document.getElementById('pet2');
    petTwo.innerHTML = animalTwo.name + " ( " + animalTwo.type + " )";
}
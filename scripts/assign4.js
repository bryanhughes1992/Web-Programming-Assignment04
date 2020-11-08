//#### ASSIGNMENT 4 - VETERINARY CLINIC ####
//STUDENT: BRYAN HUGHES
//SECTION: B

/********************
*   Pet Object #1   *
*********************/
var animalOne = {
    type: 'Cat',
    name: 'Mary Jane',
    breed: 'Calico'
};

/********************
*   Pet Object #2   *
*********************/
var animalTwo = {
    type: 'Dog',
    name: 'Bruce',
    breed: 'Golden Doodle'
};

/********************
*   Client Object   *
*********************/
var client = {
    clientName: 'Bryan Hughes',
    phone: '647-999-9292',
    pets: [animalOne.name, animalTwo.name],
    vetClinic: 'Westbridge Veterinary Hospital'
};

/**********************
* Logical programming *
***********************/

//When the window loads, fires the 'documentReady' function
window.onload = documentReady;

/************************************************
   A function with all the page's methods inside
*************************************************/
function documentReady() {

    //Listens for the html page to load and then calls the addClientName function
    window.addEventListener("load", addClientName);

    /***************************************
        Places content into 'clientName' span
    ****************************************/
    function addClientName() {
        var spanElement = document.getElementById('clientName');
        spanElement.innerHTML = client.clientName;
    }


    //Stores the HTML element 'clientBtn' as variable
    var showPetsBtn = document.getElementById('clientBtn');

    //Listening for the click event for the  'showPetsBtn'
    showPetsBtn.addEventListener("click", showPets);

    /*****************************************
       Populates the 'pet1' and 'pet2' span
       with the first Pet object info and the
       second Pet object info
    ******************************************/
    function showPets() {
        var petOne = document.getElementById('pet1');
        petOne.innerHTML = `${client.pets[0]} ( ${animalOne.type} )`;

        var petTwo = document.getElementById('pet2');
        petTwo.innerHTML = `${client.pets[1]} ( ${animalTwo.type} )`;
    }
}

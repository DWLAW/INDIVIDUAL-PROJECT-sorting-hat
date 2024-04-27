// initial students array
const students = [
  {
    id: 1,
    name: "Harry",
    house: "Gryffindor",
    imageUrl:"img/harry.jpg",
  },
  {
    id: 1,
    name: "Droco",
    house: "Slytherin",
    imageUrl:"img/Malfoy.jpg",

  },
];

const badGuys = [
{
  id: 1,
  name: "Voldemort",
  house: "Voldemort's Army",
  imageUrl:"img/Voldemor.jpg",
},
];


//Utility function that renders to DOM
// through query selecter it will get the divId and render the string that we put later into the html
const renderToDom = (divId, textToRender) => {
  const selectedElement = document.querySelector(divId);
  selectedElement.innerHTML = textToRender;
}

// Iterate a card for the sorting hat intro to the DOM
// TODO fill out data on card, add an image, etc.
const introCardDom = () => {
  const domString = `
  <div class="card" style="width: 50rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="Welcome to Hogwarts Sorting Hat">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  `;
  renderToDom("#introCard", domString)
};
//TODO iterate a form  that pops up that then sorts the info into a houses array

// iterate filter buttons
// TODO make them filter
const filterBtns = () => {
  const domString= `
  <button type="button" class="btn btn-outline-primary">Show All</button>
  <button type="button" class="btn btn-outline-success">Slytherin</button>
  <button type="button" class="btn btn-outline-warning">Griffindor</button>
  <button type="button" class="btn btn-outline-danger">HufflePuff</button>
  <button type="button" class="btn btn-outline-secondary">RavenClaw</button>
`;
renderToDom("#filterContainer", domString)
};
// form
// TODO make form work
const formModal = () => {
const domString = `<!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#addStudent">
Apply to be a First Year Student!
</button>
<div class="modal fade" id="addStudent" tabindex="-1" aria-labelledby="addStudent" aria-hidden="true">
<div class="modal-dialog modal-fullscreen-md-down">
  <div class="modal-content">
    <div class="modal-header">
      <h5 class="modal-title">Be sorted into a house!</h5>
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body" id="modal-body">
    <form>
    <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="First Year's Name" id="name" aria-label="name" required>
      <label for="name">First Year's Name</label>
    </div>
      </div>
      
          <button 
            type="submit" 
            class="btn btn-success" >Submit </button>
        </form>
      </div>
`;
renderToDom('#formContainer', domString);
};
//TODO iterate the house cards to the DOM\
const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    //card 
      domString += `
      <div id = "studentCardContainer"> 
      <h4>Students</h4>
        <div class="card" style="width: 18rem;" id = "studentCards">
          <h5 class="card-title">${student.name}</h5>
          <img src=${student.imageUrl} class="card-img-top" alt=${student.name}>
          <div class="card-body">
            <p class="card-text" id="${student.house}">${student.house}</p>
            <button type="button" class="btn btn-danger"id="delete--${student.id}">Expel</button>
          </div>
        </div>
       </div> 
      `;
      }
    renderToDom('#cardContainer', domString);
};

const evilCardsOnDom = (badGuys) => {
  let domString = "";
  for (const badGuy of badGuys) {
    //card 
      domString += `
      <div id = "evilCardContainer"> 
      <h4>Army of Darkness</h4>
        <div class="card" style="width: 18rem;" id = "badGuyCards">
          <h5 class="card-title">${badGuy.name}</h5>
          <img src=${badGuy.imageUrl} class="card-img-top" alt=${badGuy.name}>
          <div class="card-body">
            <p class="card-text" id="${badGuy.house}">${badGuy.house}</p>
            
          </div>
        </div>
       </div> 
      `;
      }
    renderToDom('#evilCardContainer', domString);
};

// TODO event listerners 





  const startApp = () => {
    introCardDom();
    formModal();
    filterBtns();
    cardsOnDom(students);
    evilCardsOnDom(badGuys);

  };

  startApp();

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
  {
    id:3,
    name: "Dog",
    house: "HufflePuff",
    imageUrl: "https://media.istockphoto.com/id/1503385646/photo/portrait-funny-and-happy-shiba-inu-puppy-dog-peeking-out-from-behind-a-blue-banner-isolated.jpg?s=612x612&w=is&k=20&c=d3_Foq65pSBGelz6FDDrHf61HviqDmKDN-2CIUd4Bvk=",
  }
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

const introCardDom = () => {
  const domString = `
  <div class="card" id="introCardDom" style="width: 30rem;">
  <img src="img/hogwartscrest.png" id="introImg" class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="cardTitle">Welcome to Hogwarts Sorting Hat</h5>
  <p class="card-text">Here you can view all students and the houses they are in and get sorted into one yourself.</p>
  </div>
  `;
  renderToDom("#introCard", domString)
};


// iterate filter buttons

const filterBtns = () => {
  const domString= `
  <h4>Filter Houses</h4>
  
  <button type="button" id ="showALL" class="btn btn-outline-secondary">Show All</button>
  <button type="button" id="Slytherin" class="btn btn-outline-secondary">Slytherin</button>
  <button type="button" id="Gryffindor" class="btn btn-outline-secondary">Gryffindor</button>
  <button type="button" id="HufflePuff" class="btn btn-outline-secondary">HufflePuff</button>
  <button type="button" id="Ravenclaw" class="btn btn-outline-secondary">RavenClaw</button>
`;
renderToDom("#filterContainer", domString)
};
// form

const formModal = () => {
const domString = `
<!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#addStudent">
Apply to be a First Year Student!
</button>
<!-- Modal -->
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
      </dkv>
        
      <div class="form-floating mb-3">
          <input class="form-control form-control-lg" type="url"  placeholder="Student Photo" id="image" aria-label="image"required>
          <label for="imageUrl">Student Photo</label>
      </div>
      <div>
          <button  type="submit"  class="btn btn-success" >Submit </button>
      </div>
    </form>
      
    </div>
    
`;
renderToDom('#formContainer', domString);
};
// iterate the house cards to the DOM\
const cardsOnDom = (students) => {
  let domString = "";
  for (const student of students) {
    //card 
      domString += `
      <div id = "studentCardContainer"> 
        <div class="card" style="width: 18rem;" id = "${student.house}">
          <h5 class="card-title">${student.name}</h5>
          <img src=${student.imageUrl} width="400" 
          height="250" class="card-img-top" alt=${student.name}>
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
      <div id = "evilStudentCardContainer"> 
      
        <div class="card" style="width: 18rem;" id = "badGuyCards">
          <h5 class="card-title">${badGuy.name}</h5>
          <img src=${badGuy.imageUrl} width="400" 
          height="250" class="card-img-top" alt=${badGuy.name}>
          <div class="card-body">
            <p class="card-text" id="${badGuy.house}">${badGuy.house}</p>
            
          </div>
        </div>
       </div> 
      `;
      }
    renderToDom('#evilCardContainer', domString);
};


// event listerners 
const eventListeners = () =>{
const formModal = new bootstrap.Modal(document.querySelector('#addStudent'));

// filter buttons
  document.querySelector('#filterContainer').addEventListener('click', (e) => {
      if(e.target.id === "showALL"){
        cardsOnDom(students);
        evilCardsOnDom(badGuys);
      } else if (e.target.id){
        const houses = students.filter(houseType => houseType.house === e.target.id);
        cardsOnDom(houses);
        evilCardsOnDom(badGuys);
        
      }
    
  });
  // button on card
  // takes the deleted student and adds it to the expelled student list
  document.querySelector('#cardContainer').addEventListener('click', (e) => {
    const [, id] = e.target.id.split("--");
    const index = students.findIndex((student) => student.id === id);
      if (e.target.id.includes('delete')) {

        let expelledStudent = students.splice(index, 1)[0];
        expelledStudent.house ="Voldemort's Army";
        badGuys.push(expelledStudent)          
        
        cardsOnDom(students);
        evilCardsOnDom(badGuys);
      }
  });

  // FORM SUBMIT
  const form = document.querySelector('form');
  form.addEventListener('submit', (e) => {
    e.preventDefault(1,5);
    let newStudent = {
      id: students.length+1,
      name: document.querySelector("#name").value,
      house: houseRandom(1,4) ,
      imageUrl: document.querySelector("#image").value,
    };
    students.push(newStudent);

    cardsOnDom(students);


    formModal.hide()
    form.reset();

  });
 
// THE DUMBEST RNG EVER LETS GOOOO
let houseRandom = (min, max) => {
 let x = Math.floor(Math.random() * (max - min + 1) + min) ;
 console.log(x)
 if(x===1){
  return "Slytherin"
 } else if ( x===2 ){
  return "Gryffindor"
 } else if(x===3 ){
  return "HufflePuff"
 } else if(x===4 ){
  return "Ravenclaw"
 }

};

};



  const startApp = () => {
    introCardDom();
    formModal();
    filterBtns();
    cardsOnDom(students);
    evilCardsOnDom(badGuys);
    eventListeners();

  };

  startApp();

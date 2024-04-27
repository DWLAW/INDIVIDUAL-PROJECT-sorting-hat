
//TODO iterate the house cards to the DOM
//TODOadd a delete button to the cards that adds the info into another array for voldemort


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
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
  <h5 class="card-title">Card title</h5>
  <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
  <li class="list-group-item">An item</li>
  <li class="list-group-item">A second item</li>
  <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
  <a href="#" class="card-link">Card link</a>
  <a href="#" class="card-link">Another link</a>
  </div>
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








  const startApp = () => {
    introCardDom();
    formModal();
    filterBtns();

  };

  startApp();

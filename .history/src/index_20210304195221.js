const container = document.querySelector("#toy-collection")

document.addEventListener("DOMContentLoaded", () => {
  let addToy = false;
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
  });
});

function getToyData (){
  fetch ("http://localhost:3000/toys")
  .then (res => res.json())
  .then (toys => postToyData(toys))
}

getToyData()


function postToyData(toys) {
  const card = document.createElement("div")
  card.class = ("card")
}
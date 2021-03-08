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
  console.log(card)
  const name = document.createElement("h2")
  const image = document.createElement("img")
  const likes = document.createElement("likes")
  const likeButton = document.createElement("button")
  
}

// * `h2` tag with the toy's name
// * `img` tag with the `src` of the toy's image attribute and the class name "toy-avatar"
// * `p` tag with how many likes that toy has
// * `button` tag with a class "like-btn"
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
  .then (toys => toys.forEach(toy => 
    postToyData(toy)))
}

getToyData()

const container = document.querySelector("#toy-collection")

function postToyData(toys) {
  const card = document.createElement("div")
  card.className = ("card")
  const name = document.createElement("h2")
  const image = document.createElement("img")
  image.className = "toy-avatar"
  const likes = document.createElement("likes")
  const likeButton = document.createElement("button")
  likeButton.className ="like-btn"
  image.src = toys.image 
  name.textContent = toys.name
  likes.textContent = toys.likes
  likeButton.textContent = "Like <3"
  card.append(name, image, likes, likeButton)
  container.appendChild(card)

//     let card = document.createElement('div')
//   card.classList = 'card'
//   card.id = toy.id
//   card.innerHTML = `
//     <h2>${toy.name}</h2>
//     <img src=${toy.image} class="toy-avatar" />
//     <p>${toy.likes} Likes </p>
//     <button class="like-btn">Like <3</button>
}

document.addEventListener("submit", (e) => {
  e.preventDefault()
  let toyObj = {
  name: e.target.name.value,
  image: e.target.name.value,
  likes: 0
  }
  addNewToy(toyObj)
})

function addNewToy(toyObj) {
  fetch("http://localhost:3000/toys", {
    methods: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(toyObj)
})
.then (resp => resp.json())
.then (newToy => postToyData(newToy))
}


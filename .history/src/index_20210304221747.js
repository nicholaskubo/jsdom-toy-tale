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
  .then (toys => toys.forEach(toy => postToyData(toy)))
  .catch (error => console.log(error))
}

getToyData()

const container = document.querySelector("#toy-collection")

function postToyData(toys) {
  const card = document.createElement("div")
  card.className = ("card")
  card.id = toys.id
  const name = document.createElement("h2")
  const image = document.createElement("img")
  image.className = "toy-avatar"
  const p = document.createElement("p")
  const likeButton = document.createElement("button")
  const deleteButton = document.createElement("button")
  deleteButton.className ="like-btn"
  likeButton.className ="like-btn"
  image.src = toys.image 
  name.textContent = toys.name
  deleteButton.textContent = "Delete"
  p.textContent = toys.likes
  likeButton.textContent = "Like <3"
  card.append(name, image, p, likeButton, deleteButton)
  container.appendChild(card)

  likeButton.addEventListener("click", handleLike) 
  deleteButton.addEventListener("click", deleteToy)

}




//     let card = document.createElement('div')
//   card.classList = 'card'
//   card.id = toy.id
//   card.innerHTML = `
//     <h2>${toy.name}</h2>
//     <img src=${toy.image} class="toy-avatar" />
//     <p>${toy.likes} Likes </p>
//     <button class="like-btn">Like <3</button>


document.addEventListener("submit", (e) => {
  e.preventDefault()
  let toyObj = {
  name: e.target.name.value,
  image: e.target.image.value,
  likes: 0
  }
  addNewToy(toyObj)
})

function addNewToy(toyObj) {
  fetch ("http://localhost:3000/toys", {
    method: 'POST',
    headers: { 'Content-Type': 'application/json'},
    body: JSON.stringify(toyObj)
})
.then (resp => resp.json())
.then (newToy => postToyData(newToy))
.catch (error => console.log(error))
}

function handleLike (e) {
  let like= e.target.previousElementSibling.innerText
  let id = e.target.parentElement.id
  let newLike =parseInt(like) + 1
  let toyLikeObj = {
    likes: newLike
  }
  updateLikes(toyLikeObj, id)
}  

function updateLikes(toyLikeObj, id) {
  fetch(`http://localhost:3000/toys/${id}`, {
    method: "PATCH",
    headers: {"Content-Type": "application/json"},
    body: JSON.stringify(toyLikeObj),
  }) 
  .then(response => response.json())
  // .then(toy => updateDomLikes(toy.id, toy.likes))
  .then(toys => updateDomLikes(toys.id, toys.likes))
  .catch(error => console.log(error))
}

function updateDomLikes(id, likes) {
  let card = document.getElementById(id);
  card.querySelector("p").innerText = likes
}

function deleteToy(id) {
  fetch (`http://localhost:3000/toys/${id}`, {
    method: "DELETE"
  })
  let id = document.getElementById
  .then(response => response.json())
  .then(() => {document.id.remove()})
}


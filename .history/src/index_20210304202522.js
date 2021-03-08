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

// getToyData()


function postToyData(toys) {
  const card = document.createElement("div")
  card.class = ("card")
  const name = document.createElement("h2")
  const image = document.createElement("img")
  image.class = "toy-avatar"
  const likes = document.createElement("likes")
  const likeButton = document.createElement("button")
  likeButton.class ="like-btn"
  console.log(name)
  image.src = toys.image 
  name.textContent = toys.name
  likes.textContent = toys.likes
  likeButton.textContent = "Like <3"
  console.log(name)
  card.append(name, image, likes, likeButton)
  console.log(card)
  container.append(card)

  
//     let card = document.createElement('div')
//   card.classList = 'card'
//   card.id = toy.id
//   card.innerHTML = `
//     <h2>${toy.name}</h2>
//     <img src=${toy.image} class="toy-avatar" />
//     <p>${toy.likes} Likes </p>
//     <button class="like-btn">Like <3</button>

}


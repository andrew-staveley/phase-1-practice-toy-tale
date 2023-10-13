let addToy = false;

document.addEventListener("DOMContentLoaded", () => {
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
  fetch('http://localhost:3000/toys')
  .then((response) => {
    return response.json()
  })
  .then((element) => {
    for(let ele of element) {
    let newDiv = document.createElement('div')
    newDiv.className = 'card'
    document.querySelector('#toy-collection').appendChild(newDiv)

    let cardName = document.createElement('h2')
    cardName.innerText = ele.name
    newDiv.appendChild(cardName)

    let cardImage = document.createElement('img')
    cardImage.src = ele.image
    newDiv.appendChild(cardImage)
    }
  })
});

const numCont = document.querySelector('.counter')
const numDisplay = document.querySelector('.num')

let counter = 0


function increaseCounter () {
  counter++
  numDisplay.innerHTML = counter
}


numCont.addEventListener('click', increaseCounter)
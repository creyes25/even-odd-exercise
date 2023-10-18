const numCont = document.querySelector('.counter')
const numDisplay = document.querySelector('.num')
const oddDiv = document.querySelector('.odd')
const evenDiv = document.querySelector('.even')
const divisible3 = document.querySelector('.divisible3')
const divisible5 = document.querySelector('.divisible5')
const divisible15 = document.querySelector('.divisible15')


let counter = 0


function increaseCounter () {
  counter++
  numDisplay.innerHTML = counter

  if (counter % 2 != 0) {
    createDiv(oddDiv)
  }

  if (counter % 2 === 0) {
    createDiv(evenDiv)
  }
}

function createDiv(appendTo) {
  const newDiv = document.createElement('div')
  newDiv.className = 'new-div flex align-items'
  const newDivCont = document.querySelector('.new-div')
  const newH2 = document.createElement('h2')
  newH2.className = 'new-num'
  
  newDiv.appendChild(newH2)

  appendTo.appendChild(newDiv)
  newH2.innerHTML = counter

}


numCont.addEventListener('click', increaseCounter)
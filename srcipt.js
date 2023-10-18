const numCont = document.querySelector('.counter')
const numDisplay = document.querySelector('.num')
const oddDiv = document.querySelector('.odd')
const evenDiv = document.querySelector('.even')
const divisible3 = document.querySelector('.divisible3')
const divisible5 = document.querySelector('.divisible5')
const divisible15 = document.querySelector('.divisible15')
const numHolder = document.querySelector('.num-holder')



let counter = 0


function increaseCounter () {
  counter++
  numDisplay.innerHTML = counter

  if (counter % 15 === 0) {
    createDiv(divisible15)
  } else if (counter % 5 === 0) {
    createDiv(divisible5)
  } else if (counter % 3 === 0) {
    createDiv(divisible3)
  } else if (counter % 2 != 0) {
    createDiv(oddDiv)
  } else if (counter % 2 === 0) {
    createDiv(evenDiv)
  }
  
}

function createDiv(appendTo) {
  const newDiv = document.createElement('div')
  newDiv.className = 'new-div flex align-items'

  const newH2 = document.createElement('h2')

  newDiv.appendChild(newH2)

  appendTo.appendChild(newDiv)
  newH2.innerHTML = counter
}


numCont.addEventListener('click', increaseCounter)
numHolder.addEventListener('click', (evt) => {
  if (evt.target.className.includes('new-div')) {
    evt.target.remove()
  }
})

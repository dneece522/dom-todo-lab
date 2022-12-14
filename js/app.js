// CACHED ELEMENTS //
const inpEl = document.getElementById('inp')
const btnEl = document.getElementById('submit-button')
const ulEl = document.getElementById('todo-list')
const rstEl = document.getElementById('reset-button')

// CODE BELOW //
//Event listener that listens when the button is pushed, creates a list item, sets the list item to whatever text is in the input, and appends the list item to the unordered list
btnEl.addEventListener('click', function(evt) {
  if (inpEl.value === '') {
    window.alert("No item detected. Please try again.")
  } else {
    const li = document.createElement('li')
    li.textContent = inpEl.value
    inpEl.value = ''
    ulEl.appendChild(li)
  }
})

rstEl.addEventListener('click', function(evt) {
  ulEl.innerHTML = ''
  inpEl.value = ''
})

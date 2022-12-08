// CACHED ELEMENTS //
const inpEl = document.getElementById('inp')
const btnEl = document.getElementById('submit-button')
const ulEl = document.getElementById('todo-list')

// CODE BELOW //
//Event listener that listens when the button is pushed, creates a list item, sets the list item to whatever text is in the input, and appends the list item to the unordered list
btnEl.addEventListener('click', function(evt) {
  const li = document.createElement('li')
  li.textContent = inpEl.value
  ulEl.appendChild(li)
})
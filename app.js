const input = document.querySelector('input.description');
const p = document.querySelector('p.description');
const button = document.querySelector('button.description');
const hiddenButton = document.querySelector('button.hidden');
const hiddenDiv = document.querySelector('div.hidden');
const addItemInput = document.querySelector('input.addItemInput');
const addItemButton = document.querySelector('button.addItemButton');
const removeItemButton = document.querySelector('button.removeItemButton');

hiddenButton.addEventListener('click', () => {
  if (hiddenDiv.style.display === 'none') {
  hiddenDiv.style.display = 'block';
  hiddenButton.innerHTML = 'Hide List';
} else {
  hiddenDiv.style.display = 'none';
  hiddenButton.innerHTML = 'Show List';
}
});

button.addEventListener('click', () => {
  p.textContent = input.value + ':'; 
  input.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  ul.appendChild(li);
  li.innerHTML = addItemInput.value;
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.querySelector('li:last-child');
  ul.removeChild(li);
});

const button = document.querySelector('button');
button.addEventListener('click', () => {
    const input = document.querySelector('input');
    const value = input.value;
    const ul = document.querySelector('ul');
    const li = document.createElement('li');
    li.textContent = value;
    ul.appendChild(li);
    input.value = '';
})
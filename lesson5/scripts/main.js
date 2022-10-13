const inputElement = document.querySelector('input');
const buttonElement = document.querySelector('button');
const listElements = document.querySelector('ul');

buttonElement.addEventListener('click', function() {
    if (inputElement.value.trim() == '') {
        return;
    }

    const listElement = document.createElement('li');
    const listElementButton = document.createElement('button');
    listElement.textContent = inputElement.value;
    listElementButton.textContent = '❌';
    listElementButton.ariaLabel = `Remove ${inputElement.value}`;
    listElement.appendChild(listElementButton);
    listElements.appendChild(listElement);
    listElementButton.addEventListener('click', function() {
        listElements.removeChild(listElement);
        inputElement.focus();
    });
    inputElement.value = '';
    inputElement.focus();
});
const keys = document.querySelectorAll('.key');
const input = document.querySelector('input');
const clear = document.querySelector('.clear');

clear.addEventListener('click', () => {
    input.value = input.value.slice(0, input.value.length-1);
})
keys.forEach(key => {
    key.addEventListener('click', () => {
        input.value += key.textContent;
    })
})
// perfect example of using foreach()
const btns = document.querySelectorAll('button');
const title = document.querySelector('.title');

function changeheaderTitle(text) {
    title.textContent = text;
}

btns.forEach(
    buttons => {
        buttons.addEventListener('click', () => 
        changeheaderTitle(buttons.textContent));
    }
)
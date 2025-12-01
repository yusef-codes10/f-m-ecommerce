
const container = document.querySelectorAll("button");
const titleField = document.querySelector('.title');

// container.forEach(element => {
//     console.log(element.textContent);
// });
container.forEach(getTextContent);

container.forEach(changeColor);
function changeColor(element) {
    element.style.color = 'red';
}

function getTextContent(element) {
    // check the clicked item (event delegation), apply
    titleField.value = element.textContent;
}

function updateTitle(text) {
    
}

// let's try to add an event listener sor function to foreach()
// TODO before that, we have to know the args of foreahc()
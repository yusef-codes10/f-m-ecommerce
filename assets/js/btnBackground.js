
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
    titleField.value = element.textContent;
}

// let's try to add an event listener sor function to foreach()

const container = document.querySelectorAll("button");

container.forEach(element => {
    console.log(element.textContent);
});

container.forEach(changeColor);
function changeColor(e) {
    e.style.color = 'red';
}
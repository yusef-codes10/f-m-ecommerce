// products logic
const btnsContainer = document.querySelector('.btns');
const clothesBtn = document.getElementById('clothesBtn');
window.alert(btnsContainer);

btnsContainer.addEventListener('click', (e) => {
    if (e.target === clothesBtn) {
        console.log("yes we clicking");
    }
})
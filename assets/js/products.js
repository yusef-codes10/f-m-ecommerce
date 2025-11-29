// products logic
const btnsContainer = document.querySelector('.btns');
const viewAllBtn = document.getElementById('viewAllBtn');
const clothesBtn = document.getElementById('clothesBtn');
const shoesBtn = document.getElementById('shoesBtn');
const AccBtn = document.getElementById('AccBtn');

// window.alert(btnsContainer);
const title = document.querySelector('.title');

btnsContainer.addEventListener('click', (e) => {
    if (e.target === viewAllBtn) {
        title.textContent = 'View All';
    } else if (e.target === clothesBtn) {
        title.textContent = 'Clothes';
    } else if (e.target === shoesBtn) {
        title.textContent = 'Shoes';
    }  else if (e.target === AccBtn) {
        title.textContent = 'Accessories';
    }
    console.log(e.target);
})


function changeTitle(e) {
    
}


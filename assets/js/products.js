// products logic
const btnsContainer = document.querySelector(".btns");
const viewAllBtn = document.getElementById("viewAllBtn");
const clothesBtn = document.getElementById("clothesBtn");
const shoesBtn = document.getElementById("shoesBtn");
const AccBtn = document.getElementById("AccBtn");

// window.alert(btnsContainer);
const title = document.querySelector(".title");

btnsContainer.addEventListener("click", (e) => {
  changeTitle(e);
  console.log(e.target);
});

function changeTitle(e) {
  if (e.target === viewAllBtn) {
    title.textContent = "View All";
  } else if (e.target === clothesBtn) {
    title.textContent = "Clothes";
  } else if (e.target === shoesBtn) {
    title.textContent = "Shoes";
  } else if (e.target === AccBtn) {
    title.textContent = "Accessories";
  }
}

// TODO put the functionality in a sigle func
// TODO reduce code by loop or something
// TODO keep the hovering state till another btn is clicked (using js)


// TODO learn how to loop throught a node queryselector all
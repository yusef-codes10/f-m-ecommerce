// searchIcon
const searchIcon = document.getElementById("searchIcon");
const searchSideBar = document.getElementById("searchSideBar");
console.log(searchIcon);
console.log(searchIcon);
console.log('hello');

searchIcon.addEventListener("click", () => {
  console.log(searchIcon);
  console.log('clicked');
  searchSideBar.classList.toggle("hidden");
});

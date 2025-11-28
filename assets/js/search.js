// searchIcon
console.log('searched loaded');
const searchIcon = document.getElementById("searchIcon");
const searchSideBar = document.getElementById("searchSideBar");


searchIcon.addEventListener("click", () => {
  console.log(searchIcon);
  console.log('clicked');
  searchSideBar.classList.toggle("hidden");
  newsLetterBtn.classList.toggle('hidden');
});

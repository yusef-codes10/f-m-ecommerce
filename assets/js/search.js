// searchIcon
console.log("searched loaded");
console.log(newsLetterContainer);
const searchIcon = document.getElementById("searchIcon");
const searchSideBar = document.getElementById("searchSideBar");

searchIcon.addEventListener("click", () => {
  console.log(searchIcon);
  console.log("clicked");
  searchSideBar.classList.toggle("hidden");
  newsLetterBtn.classList.toggle("hidden");
});

const closeSearchBar = document.getElementById("closeSearchBar");
closeSearchBar.addEventListener("click", () => {
  searchSideBar.classList.toggle("hidden");
  newsLetterBtn.classList.toggle("hidden");

  console.log("icon clicked!!!");
});

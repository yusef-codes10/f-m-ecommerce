// searchIcon
const searchIcon = document.getElementById("searchIcon");
const searchSideBar = document.getElementById('searchSideBar');
searchIcon.addEventListener("click", () =>
{     console.log(searchIcon)
    searchSideBar.classList.toggle('hidden')}
);

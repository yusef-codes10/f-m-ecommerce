// searchIcon
const searchIcon = document.getElementById("searchIcon");
const searchSideBar = document.getElementById('searchSideBar');
const newsLetterBtn = document.querySelector('#newsLetterBtn');

searchIcon.addEventListener("click", () =>
{     console.log(searchIcon)
    searchSideBar.classList.toggle('hidden')
    if (newsLetterBtn.contains('hidden')) {
        newsLetterBtn.classList.remove('hidden')
    } else {
        newsLetterBtn.classList.add('hidden')
    }
}
);

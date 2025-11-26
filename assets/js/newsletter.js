// news letter btn functionality
// const <i class="fa-solid fa-angle-down"></i>
const newsLetterBtn = document.getElementById('newsLetterBtn');
const newsLetterContainer = document.getElementById('newsLetterContainer')
console.log(newsLetterBtn);

newsLetterBtn.addEventListener('click', e => {
    // chat icon
    e.target.classList.toggle('fa-regular');
    e.target.classList.toggle('fa-comment-dots');
    // arrow down icon
    e.target.classList.toggle('fa-solid');
    e.target.classList.toggle('fa-angle-down');
    showNewletter()
});

function showNewletter() {
    newsLetterContainer.classList.toggle('hidden');
}
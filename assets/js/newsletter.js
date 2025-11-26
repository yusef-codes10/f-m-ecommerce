// news letter btn functionality
// const <i class="fa-solid fa-angle-down"></i>
const newsLetterBtn = document.getElementById('newsLetterBtn');
console.log(newsLetterBtn);

newsLetterBtn.addEventListener('click', function() {
    const icon = this.querySelector('i');
    icon.classList.toggle('fa-angle-down');
    icon.classList.toggle('fa-angle-up');
});

// news letter btn functionality
// const <i class="fa-solid fa-angle-down"></i>
const newsLetterBtn = document.getElementById('newsLetterBtn');
console.log(newsLetterBtn);

newsLetterBtn.addEventListener('click' , (e) => {
    e.target.classList.toggle('a-solid');
    e.target.classList.toggle('fa-angle-down');
    console.log(e.target);
})
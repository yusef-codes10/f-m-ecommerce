// news letter btn functionality
// const <i class="fa-solid fa-angle-down"></i>
const newsLetterBtn = document.getElementById('newsLetterBtn');
console.log(newsLetterBtn);

newsLetterBtn.addEventListener('click' , function() {
    console.log(this);
    this.classList.toggle('fa-solid');
    this.classList.toggle('fa-angle-down');
})
// news letter btn functionality
// const <i class="fa-solid fa-angle-down"></i>
const newsLetterBtn = document.getElementById('newsLetterBtn');
console.log(newsLetterBtn);

newsLetterBtn.addEventListener('click' , (e) => {
    if (e.target.classList.contains('fa-regular') && e.target.classList.contains('fa-comment-dots')) {
        e.target.classList.remove('fa-regular');
        e.target.classList.remove('fa-comment-dots');
        e.target.classList.add('fa-solid')
        e.target.classList.add('fa-angle-down')
        console.log('includes');

    } else {
        console.log('no');
    }
        console.log(e.target);

})
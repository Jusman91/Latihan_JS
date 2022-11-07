const bigImage = document.querySelector('.big-img img');
const miniImage = document.querySelector('.img1');

miniImage.addEventListener('click', function(e) {
    if(e.target.className == 'img1') {
        e.target.parentElement.parentElement.previousElementSibling.setAttribute('src', 'image/audi.jpg')
    }
})
console.log(miniImage.parentElement.parentElement.previousElementSibling)
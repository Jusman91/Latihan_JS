const bigImage = document.querySelector('.big-img');
const miniImage = document.querySelector('.mini-img');

miniImage.addEventListener('click', function(e) {
    if(e.target.className == 'img1') {
        bigImage.src = e.target.src;
        bigImage.classList.add('fade');
        setTimeout(function() {
            bigImage.classList.remove('fade');
        }, 500)
    }
})

let images = new Array(
    'image/aston.jpg',
    'image/audi.jpg',
    'image/bmw.jpg',
    'image/bugatti.jpg',
    'image/ferrari.jpg',
)

let i = 0;

function slider() {
    if(i > images.length - 1) {
        i = 0
    }
    bigImage.src = images[i];
    i++;
    setTimeout('slider()', 3000);

}
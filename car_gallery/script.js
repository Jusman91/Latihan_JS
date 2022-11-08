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
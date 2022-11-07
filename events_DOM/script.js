// onclick
const p2 = document.getElementsByClassName('p2')[0];
p2.onclick = ubahWarna;
function ubahWarna() {
    p2.style.backgroundColor = 'lightblue';
}

// addEventListener
const p4 = document.querySelector('section#b p');
p4.addEventListener('click', function() {
    const ul = document.querySelector('section#b ul');
    const liBaru = document.createElement('li');
    const teksLiBaru = document.createTextNode('item baru');
    liBaru.appendChild(teksLiBaru);
    ul.appendChild(liBaru);
})

const p3 = document.getElementsByClassName('p3')[0];
p3.addEventListener('click', function() {
    p3.style.backgroundColor = 'lightblue';
});
p3.addEventListener('click', function() {
    p3.style.color = 'red';
});

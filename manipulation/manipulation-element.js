// innnerHTML
// const judul = document.getElementById('judul');
// judul.innerHTML = '<em>Jusman</em>';

// const sectionA = document.getElementById('a');
// sectionA.innerHTML = 'Hello World';

// style
// const judul = document.querySelector('#judul');
// judul.style.color = 'lightblue';
// judul.style.backgroundColor = 'salmon';

// setAttribute, getAttribute, and removeAttribute
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'jusman');

// // getAttribute gunakan di console
// // judul.getAttribute('id'); 

// // removeAttribute
// judul.removeAttribute('name');

// classList (add, remove, toggle, item, contains, and replace)
const p2 = document.querySelector('.p2');
// p2.classList.add('label');

// p2.classList.remove('label');

// p2.classList.toggle('label');
// // ketika p2 sudah punya class label, maka class lebel akan dihapus ketika menggunakan nama class label atau dengan kata lain class yang sama.
// p2.classList.toggle('label');

// classList.item & classList.contains untuk mengetahui nama class pada sebuah element...gunakan diconsole
p2.classList.add('satu');
p2.classList.add('dua');
p2.classList.add('tiga');

// classList.replace
p2.classList.replace('tiga', 'empat');



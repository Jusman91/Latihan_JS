// document.createElement()
// buat elemen baru
const pBaru = document.createElement('p');
const teksPBaru = document.createTextNode('Paragraf Baru');
// simpan tulisan dalam paragraf
pBaru.appendChild(teksPBaru);
// simpan pBaru diakhir secton A -> gunakan appendChild
const sectionA = document.getElementById('a');
sectionA.appendChild(pBaru);
// sectionA.parentNode.prepend(pBaru);
// sectionA.parentNode.append(pBaru);

// simpan node baru diselah-selah node
const liBaru = document.createElement('li');
const teksLiBaru = document.createTextNode('Item Baru');
liBaru.appendChild(teksLiBaru);
const ul = document.getElementsByTagName('ul')[0];
const li2 = document.querySelector('li:nth-child(2)');
ul.insertBefore(liBaru, li2);

// hapus node
const link = document.getElementsByTagName('a')[0];
sectionA.removeChild(link);


// mengganti node
const sectionB = document.getElementById('b');
const p4 = sectionB.querySelector('p');
const h2Baru = document.createElement('h2');
const teksH2Baru = document.createTextNode('Judul Baru');
h2Baru.appendChild(teksH2Baru);
sectionB.replaceChild(h2Baru, p4);

pBaru.style.backgroundColor = 'lightgreen';
liBaru.style.backgroundColor = 'lightgreen';
h2Baru.style.backgroundColor = 'lightgreen';

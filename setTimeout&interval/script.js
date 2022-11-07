const tanggalTujuan = new Date('Nov 8, 2022 10:00:00').getTime();

const hitungMundur = setInterval(function() {
    const sekarang = new Date().getTime();
    const selisih = tanggalTujuan - sekarang;

    const hari = Math.floor(selisih / (1000 * 60 * 60 * 24));
    const jam = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const menit = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60));
    const detik = Math.floor(selisih % (1000 * 60) / 1000);

    const teks = document.getElementById('teks');
    teks.innerHTML = 'Waktu : ' + hari + ' hari ' + jam + ' jam ' + menit + ' menit ' + detik + ' detik ';

    if(selisih < 0 ) {
        clearInterval(hitungMundur);
        teks.innerHTML = 'TIme Out';
    }
}, 1000);


// menentukan pilihan komputer
function choiceComp() {
    const comp = Math.random();
    if(comp < 0.34) return 'gunting';
    if(comp >= 0.34 && comp < 0.67) return 'batu'; return 'kertas';
}
// menentukan hasil
function results(comp, player) {
    if(player == comp) return 'DRAW';
    if(player == 'gunting') return (comp == 'kertas') ? 'YOU WIN' : 'YOU LOSE';
    if(player == 'batu') return (comp == 'kertas') ? 'YOU LOSE' : 'YOU WIN';
    if(player == 'kertas') return (comp == 'gunting') ? 'YOU LOSE' : 'YOU WIN';
}
// memasukkan events
const pCanChoice = document.querySelectorAll('#player img');
let scoreP = 0, scoreC = 0;
pCanChoice.forEach(function(c) {
    c.addEventListener('click', function() {
        const cComp = choiceComp();
        const cPlayer = c.className;
        const getResults = results(cComp, cPlayer);
        // mengacak pilihan komputer
        const imgComp = document.getElementsByClassName('comp-choice')[0];
        imgComp.setAttribute('src', `image/${cComp}.png`);
        // menampilkan hasil
        const finalResults = document.querySelector('.results');
        finalResults.innerHTML = getResults;
        // menentukan skor
        if(getResults == 'YOU WIN') scoreP++;
        else if(getResults == 'YOU LOSE') scoreC++;
        // menampilkan skor
        const compScore = document.querySelector('.comp-score');
        const playerScore = document.querySelector('.player-score');
        compScore.innerHTML = scoreC;
        playerScore.innerHTML = scoreP;

    })
})
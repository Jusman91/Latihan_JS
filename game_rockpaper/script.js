// menentukan pilihan komputer
function choiceComp() {
    const comp = Math.random();
    if(comp < 0.34) return 'gunting'
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
const pGunting = document.querySelector('.gunting');
pGunting.addEventListener('click', function() {
    const cComp = choiceComp();
    const cPlayer = pGunting.className;
    const getResults = results(cComp, cPlayer);

    const imgComp = document.getElementsByClassName('comp-choice')[0];
    imgComp.setAttribute('src', `image/${cComp}.png`);

    const finalResults = document.querySelector('.results');
    finalResults.innerHTML = getResults;
})

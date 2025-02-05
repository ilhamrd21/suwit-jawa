function getPilihanComputer() {
    var comp = Math.random();
    if (comp < 0.34) return 'gajah';
    if (comp >= 0.34 && comp < 0.67) return 'orang';
    return 'semut';
}

function getHasil(comp, player) {
    if (player === comp) return 'SERI!';
    if (player === 'gajah') return (comp === 'orang') ? 'MENANG!' : 'KALAH!';
    if (player === 'orang') return (comp === 'semut') ? 'KALAH!' : 'MENANG!';
    if (player === 'semut') return (comp === 'orang') ? 'MENANG!' : 'KALAH!';
}

function putar() {
    const imgComputer = document.querySelector('.img-komputer'); // Perbaikan selektor
    const gambar = ['gajah', 'semut', 'orang']; // Perbaikan nama gambar
    let i = 0;

    const waktuMulai = new Date().getTime();
    const interval = setInterval(function () {
        if (new Date().getTime() - waktuMulai > 1000) {
            clearInterval(interval); // Perbaikan clearInterval
            return;
        }
        imgComputer.setAttribute('src', gambar[i] + '.png');
        i = (i + 1) % gambar.length;
    }, 100);
}

const pilihan = document.querySelectorAll('.area-player img'); // Lebih spesifik
pilihan.forEach(function (pil) {
    pil.addEventListener('click', function () {
        const pilihanComputer = getPilihanComputer();
        const pilihanPlayer = pil.className; // Mengambil nama kelas sebagai pilihan
        const hasil = getHasil(pilihanComputer, pilihanPlayer);

        putar();

        setTimeout(() => {
            const imgComp = document.querySelector('.img-komputer');
            imgComp.setAttribute('src', pilihanComputer + '.png');

            const info = document.querySelector('.info');
            info.innerHTML = hasil;
        }, 1000); // Menunggu animasi selesai
    });
});


// const pGajah = document.querySelector('.gajah');
// pGajah.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = 'gajah'; // Perbaikan: sebelumnya salah ('pgajah')
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pOrang = document.querySelector('.orang');
// pOrang.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = 'orang'; ('pOrang')
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });

// const pSemut = document.querySelector('.semut');
// pSemut.addEventListener('click', function () {
//     const pilihanComputer = getPilihanComputer();
//     const pilihanPlayer = 'semut'; // Tambahkan event listener untuk semut
//     const hasil = getHasil(pilihanComputer, pilihanPlayer);

//     const imgComp = document.querySelector('.img-komputer');
//     imgComp.setAttribute('src', pilihanComputer + '.png');

//     const info = document.querySelector('.info');
//     info.innerHTML = hasil;
// });










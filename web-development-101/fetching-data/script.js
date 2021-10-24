var pkmnName = document.getElementById('pkmn-name');
var btn = document.getElementById('get-pkmn');
var placeText = document.getElementById('pkmn');
var placeImg = document.getElementById('pkmn-img');

// setTimeout(() => console.log('Salu2'), 1000);
// // Espera un segundo, pero continua haciendo lo que falte

// console.log('Banda')

// const myPromise = new Promise((resolve, reject) => {
//     resolve(777);
// });

// myPromise.then((val) => console.log(`Imprimiendo asincronicamente ${val}`));
// console.log('Imprimiendo inmediatamente');

// Cola de prioridad de las llamads a funciones en JS

// 1. Creacion de promesa
// 2. Ejecucion de promesa -> Enqueue
// 3. Impresion inmediata
// 4. Dequeue de los elementos

btn.onclick = () => {
    fetch('https://pokeapi.co/api/v2/pokemon/' + pkmnName.value)
    .then(res => res.json())
    .then(data => {
        console.log(data);

        placeText.innerHTML = data.name;
        placeImg.src = data.sprites.front_default;
        placeImg.alt = data.name;
    })
}
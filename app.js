let listaNumeroSorteado =[];

function asignarTextoElemento (elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
// -------------------------------------------------------------------------

function verificarIntento(){
    numeroUser = parseInt(document.getElementById('valorUser').value);

    console.log (numeroUser);
    console.log (intentos);
    
    if (numeroUser === numeroSecreto){
        asignarTextoElemento('p', `${numeroSecreto} es el número secreto, ¡Adivinaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`)

        document.getElementById('reiniciar').removeAttribute('disabled');
    }else {
    if(numeroUser < numeroSecreto){
        asignarTextoElemento('p', 'El numero secreto es mayor, sigue intentando.')
    }else{
        asignarTextoElemento('p', 'El numero secreto es menor, sigue intentando.')
    }
        intentos++;
        document.getElementById('valorUser').value = '';
    }
    document.getElementById('valorUser').focus();

}
let intentos = 1;
let numeroUser;
// --------------------------------------------------------------------------
function generarNumeroSecreto(min, max){
    let numeroGenerado = Math.floor(Math.random() * (max - min + 1)) + min;
    // Si ya se sortearon todos los números
    if (listaNumeroSorteado.length == max){
        asignarTextoElemento('p', 'Ya sortearon todos los números posibles')
    }

    // Si el número generado esta en la lista generar uno nuevo
    if (listaNumeroSorteado.includes(numeroGenerado)) {
        return generarNumeroSecreto(min, max);
    }else {
        listaNumeroSorteado.push(numeroGenerado);
        return numeroGenerado;
    }

}
let min = 1;
let max = 10;
let numeroSecreto = generarNumeroSecreto(min, max);


// --------------------------------------------------------------------------

console.log (numeroSecreto);

function reiniciarJuego(){
    // reiniciar numero secreto
    numeroSecreto = generarNumeroSecreto(min, max);
    console.log (`el numero secreto es ${numeroSecreto}`);
    intentos = 1;
    asignarTextoElemento('p', `Indicar número entre el ${min} y el ${max}`);
    document.getElementById('valorUser').value = '';                
    document.getElementById('reiniciar').setAttribute('disabled', true);
    document.getElementById('valorUser').focus();

}


// console.log(numeroSecreto);

asignarTextoElemento('h1', 'Juego del número secreto');
asignarTextoElemento('p', `Indicar número entre el ${min} y el ${max}`);


// suma de listas

// let listaNumeros = [3,5,7];

// function generarPromedio (){
//     let suma = listaNumeros.reduce((acumulador, actual) => acumulador + actual, 0);

//     let promedio = suma / listaNumeros.length;
//     return promedio;
// }

// console.log(generarPromedio());
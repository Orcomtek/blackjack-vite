/**
 * Crear el elemento HTML que contendra la carta
 * @param {String} carta
 * @returns {HTMLImageElement} Retorna el elemento HTML de la imagen
 */

export const crearCartaHTML = (carta) => {

    if(!carta) throw new Error('carta es un argumento obligatorio')

    // <img class="carta" src="assets/cartas/2C.png">
    const imgCarta = document.createElement('img');
    imgCarta.src = `assets/cartas/${ carta }.png`; //3H, JD
    imgCarta.classList.add('carta');

    return imgCarta

}
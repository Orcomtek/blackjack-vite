/**
 * Esta función me permite tomar una carta
 * @param {Array<String>} deck Ejemplo [2D, JH, 9H]
 * @returns {String} Retorna una carta del deck
 */

export const pedirCarta = (deck) => {

    if(!deck || deck.length === 0) throw new Error('deck es obligatorio como un arreglo de string');
    // console.log(deck.length);

    // if ( deck.length === 0 ) {
    //     throw 'No hay cartas en el deck'
    // };
    
    const carta = deck.pop();
    return carta;
}
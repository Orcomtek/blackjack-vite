import { pedirCarta, valorCarta, crearCartaHTML } from "./";

/**
 * turno de la computadora
 * @param {Number} puntosMinimos Son los puntos mínimos que necesita la computadora para ganar
 * @param {HTMLElement} puntosHTML Elemento HTML para mostrar los puntos de la computadora 
 * @param {HTMLElement} divCartasComputadora Elemento HTML para mostrar los puntos de la computadora 
 * @param {Array<String>} deck Array de cartas disponibles en la baraja
 */

export const turnoComputadora = ( puntosMinimos, puntosHTML, divCartasComputadora, deck = [] ) => {

    if(!puntosMinimos) throw new Error('puntosMinimos son necesarios')
    if(!puntosHTML) throw new Error('puntosHTML es necesario')
    // if(!deck) throw new Error('deck es necesario')

    let puntosComputadora = 0;

    do {
        const carta = pedirCarta(deck);

        puntosComputadora = puntosComputadora + valorCarta( carta );
        puntosHTML.innerText = puntosComputadora;
        
        const imgCarta = crearCartaHTML(carta);
        divCartasComputadora.append( imgCarta );

        if( puntosMinimos > 21 ) {
            break;
        }

    } while(  (puntosComputadora < puntosMinimos)  && (puntosMinimos <= 21 ) );

    setTimeout(() => {
        if( puntosComputadora === puntosMinimos ) {
            alert('Nadie gana :(');
        } else if ( puntosMinimos > 21 ) {
            alert('Computadora gana')
        } else if( puntosComputadora > 21 ) {
            alert('Jugador Gana');
        } else {
            alert('Computadora Gana')
        }
    }, 100 );
}
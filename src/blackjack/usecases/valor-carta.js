
/**
 * Esta función realiza el calculo para determinar el valor de la carta
 * @param {String} carta Carta a evaluar
 * @returns {Number} Valor numérico de la carta
 */

export const valorCarta = ( carta ) => {

    const valor = carta.substring(0, carta.length - 1);
    return ( isNaN( valor ) ) ? 
            ( valor === 'A' ) ? 11 : 10
            : valor * 1;
}
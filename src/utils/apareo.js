/**
 * toma dos arrays de números ordenados y en forma eficiente los combina en uno solo, aún ordenado
 * @param {number[]} arrA un array de números ordenados
 * @param {number[]} arrB otro array de números ordenados
 * @returns {number[]} un nuevo array de números ordenados
 */
function combinarDosArrays(arrA, arrB) {
    let union = arrA.concat(arrB);
    let retorno = [];

    union.sort((a, b) => a - b);

    retorno.push(union[0]);

    for (let i = 0; i < union.length; i++) {
        if(retorno[retorno.length -1] != union[i]){
            retorno.push(union[i]);
        }
        
    }

    return retorno;
}

/**
 * toma un array de muchos arrays de números ordenados y los combina en uno solo, aún ordenado
 * @param {number[][]} arrs el array de arrays de números que quiero combinar
 * @returns {number[]} el nuevo array de números ordenados
 */
function combinarNArrays(arrs) {
    let union = [];
    let retorno = [];

    arrs.forEach(e => {
        union = combinarDosArrays(union, e)
    });

    return union
}


// exportar lo necesario

export default{
    combinarDosArrays,
    combinarNArrays
}
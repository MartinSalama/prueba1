// cargos todos los archivos en memoria
// las rutas son relativas al directorio raiz del proyecto!

// preparo 4 arrays para aparear

// apareo simple

// armo un array con los 4 arrays que quiero aparear

// apareo múltiple
import fi from './utils/fileUtils.js'
import ap from './utils/apareo.js'
import tu from './utils/transformUtils.js'

function main(){


let a1 = fi.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setA).in');
let a2 = fi.leerArchivoComoString('./in/10NumerosOrdenadosEntre1y50(setB).in');
let a3 = fi.leerArchivoComoString('./in/imparesOrdenadosEntre1y999.in');
let a4 = fi.leerArchivoComoString('./in/paresOrdenadosEntre2y1000.in');

a1 = tu.transformarStringEnArrayDeNumeros(a1, ',');
a2 = tu.transformarStringEnArrayDeNumeros(a2, ',');
a3 = tu.transformarStringEnArrayDeNumeros(a3, ',');
a4 = tu.transformarStringEnArrayDeNumeros(a4, ',');

let union2Array = ap.combinarDosArrays(a1,a4);

let los4Arrays = [a1,a2,a3,a4];

let apareoMultiple = ap.combinarNArrays(los4Arrays);

union2Array = tu.transformarArrayDeNumerosAUnSoloString(union2Array);
apareoMultiple = tu.transformarArrayDeNumerosAUnSoloString(apareoMultiple);

fi.escribirTextoEnArchivo('./out/combinado.out', union2Array, true);
fi.escribirTextoEnArchivo('./out/combinado2.out', apareoMultiple, false);

console.log('TODO OK EN EL MAIN');
}

export default{
    main
}
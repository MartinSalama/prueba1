// importar lo necesario
import fs from 'fs'

/**
 * lee y devuelve el contenido de un archivo como texto en 'utf-8'
 * @param {string} ruta
 * @return {string} el texto leído
 */
function leerArchivoComoString(ruta) {
    const data = fs.readFileSync(ruta, "utf-8");
    return data;
}

/**
 * escribe el texto en el archivo de la ruta, sólo si tal archivo existe. sino, lanza error.
 * @param {string} ruta
 * @param {string} texto
 */
function escribirTextoEnArchivo(ruta, texto, shouldCreateIfNotExists) {
    try {
        fs.readFileSync(ruta, "utf-8");
        fs.appendFileSync(ruta, texto);

    } catch (error) {
        if (shouldCreateIfNotExists) {
            fs.appendFileSync(ruta, texto);
        } else {
            throw new Error("EL ARCHIVO NO EXISTE");
        }
    }

    
}

export default{
    leerArchivoComoString,
    escribirTextoEnArchivo
}

// exportar lo necesario
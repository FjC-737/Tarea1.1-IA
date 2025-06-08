function contarPalabras(palabras){

    const contador= {};

    for (var i=0; i< palabras.length; i++){
        const palabra = palabras[i];

        if(contador[palabra]){
            contador[palabra]++;
        }else{
            contador[palabra] = 1;
        }
    }

    return contador;
}


const palabras = ['hola', 'adiós', 'hola', 'gracias', 'hola', 'gracias'];
const resultado = contarPalabras(palabras);
console.log(resultado);
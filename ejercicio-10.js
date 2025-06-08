function verificarMayoresDeEdad(edades){

    for( var i=0; i< edades.length; i++){

        if (edades[i]< 18){
            return false
        }
    }

    return true;

}

const edades = [19, 25, 32, 17];
const resultado = verificarMayoresDeEdad(edades);
console.log(resultado);

function combinarListasSinRepetir(lista1, lista2){
    const resultado = []

    for(var i=0; i< lista1.length; i++){

        if(resultado.includes(lista1[i]) == false){
            resultado.push(lista1[i])
        }
    }

     for(var i=0; i< lista2.length; i++){

        if(resultado.includes(lista2[i]) == false){
            resultado.push(lista2[i])
        }
    }

    return resultado;
}

const lista1 = ['manzana', 'pera', 'banana'];
const lista2 = ['pera', 'uva', 'manzana', 'sandía'];

const resultado = combinarListasSinRepetir(lista1, lista2);
console.log(resultado);
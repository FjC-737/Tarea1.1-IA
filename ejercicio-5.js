function eliminarDuplicados(arreglo, propiedad) {
  const resultado = [];
  const valoresVistos = [];

  for (let i = 0; i < arreglo.length; i++) {
    const item = arreglo[i];
    const valor = item[propiedad];

    if (!valoresVistos.includes(valor)) {
      valoresVistos.push(valor);
      resultado.push(item);
    }
  }

  return resultado;
}

const elementos = [
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 1, nombre: 'A' },
  { id: 2, nombre: 'B' },
  { id: 3, nombre: 'C' },
];

const resultado = eliminarDuplicados(elementos, 'id');
console.log(resultado);

function agruparPorPropiedad(arreglo, propiedad) {
  const resultado = {};

  for (var i = 0; i < arreglo.length; i++) {
    const item = arreglo[i];
    const clave = item[propiedad];

    if (!resultado[clave]) {
      resultado[clave] = [];
    }

    resultado[clave].push(item);
  }

  return resultado;
}

const datos = [
  { categoria: 'fruta', nombre: 'manzana' },
  { categoria: 'verdura', nombre: 'zanahoria' },
  { categoria: 'fruta', nombre: 'banana' },
  { categoria: 'verdura', nombre: 'lechuga' }
];

const resultado = agruparPorPropiedad(datos, 'categoria');
console.log(resultado);

function promedioPonderado(notas) {
  var suma = 0;

  for (var i = 0; i < notas.length; i++) {
    const nota = notas[i];
    suma = suma+nota.valor * nota.peso;
  }

  return suma;
}

const notas = [
  { valor: 90, peso: 0.5 },
  { valor: 80, peso: 0.3 },
  { valor: 70, peso: 0.2 }
];

const resultado = promedioPonderado(notas);
console.log(`El promedio es de: ${resultado}`); 

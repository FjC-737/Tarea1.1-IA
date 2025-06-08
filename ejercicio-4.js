function modificarPersona(persona, nuevoNombre) {
    
    return {
        nombre: nuevoNombre,
        edad: persona.edad + 1
    };
}

const persona = {
    nombre: 'Juan',
    edad: 30
};
const nuevaPersona= modificarPersona(persona, 'Carlos'); 


console.log(persona);
console.log(nuevaPersona);
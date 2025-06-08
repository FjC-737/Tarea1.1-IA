function obtenerUsuario(id){

    return new Promise((resolve) => {
    setTimeout(() => {
      const nombres = {
        1: 'Juan',
        2: 'María'
      };
      resolve({ id: id, nombre: nombres[id] });
    }, 1000); 
  });
}

obtenerUsuario(1)
  .then(usuario1 => {
    return obtenerUsuario(2).then(usuario2 => {
      console.log(`Usuarios cargados: ${usuario1.nombre} y ${usuario2.nombre}`);
    });
  });

function filtrarDisponibles(productos, categoria){

    const resultado = [];
    
    for (let i = 0; i < productos.length; i++) {
        const producto = productos[i];
        
        if (producto.categoria === categoria && producto.stock > 0) {
            resultado.push(producto);
        }
    }
    
    return resultado;

}

const productos = [
 { nombre: 'Camisa', categoria: 'ropa', stock: 10 },
 { nombre: 'Pantalón', categoria: 'ropa', stock: 0 },
 { nombre: 'Televisor', categoria: 'electrónica', stock: 5 }
];
const resultado = filtrarDisponibles(productos, 'ropa');
console.log(resultado);


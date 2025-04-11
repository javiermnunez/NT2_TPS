import productos from './productos.js';



const nuevoArray = productos.map(p => p.nombre);

console.log(nuevoArray)

const categoriaRopa = productos.filter(p => p.categoria == "Ropa")

console.log(categoriaRopa)
const PRECIO = 3000
const precioMayor = productos.filter(p => p.precio > PRECIO)
console.log(precioMayor)

const BUSCADO = 'Gorra'
const buscarProducto = productos.find(p => p.nombre == BUSCADO);
console.log(buscarProducto)
import productos from './productos.js';

console.log(productos.sort((a, b) => a.precio - b.precio))

const resultado = productos.map(p => ({
    nombre: p.nombre,
    precio: p.precio
  }));
const arrayString = []
  for (let p of resultado) {
    let r =`El producto ${p.nombre} cuesta ${p.precio} y pertenece a la categoría ${p.categoria}.`
    arrayString.push(r)
  }
console.log(arrayString)


const productosB = [
    { id: 8, nombre: "Medias", precio: 1500, categoria: "Ropa" },
    { id: 9, nombre: "Bufanda", precio: 2500, categoria: "Ropa" },
    { id: 10, nombre: "Anillo", precio: 8000, categoria: "Alajas" }
  ];
const nuevaListaProductos = [...productos,...productosB]
console.log(nuevaListaProductos)

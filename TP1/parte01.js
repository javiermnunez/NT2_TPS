
//Parte 1
import productos from './productos.js';
    
console.log(productos[0]["nombre"])

console.log('For of')
for (let p of productos) {
    console.log(`Producto: ${p.nombre} - Precio: \$${p.precio}`)
  }
  console.log('----------------------')
console.log('Foreach')
productos.forEach(p => {
    console.log(`Producto: ${p.nombre} - Precio: \$${p.precio}`)
});
console.log('----------------------')
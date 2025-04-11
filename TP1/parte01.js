
//Parte 1
const productos = [
    { id: 1, nombre: "Remera", precio: 1500, categoria: "Ropa" },
    { id: 2, nombre: "Pantalón", precio: 2500, categoria: "Ropa" },
    { id: 3, nombre: "Zapatillas", precio: 8000, categoria: "Calzado" },
    { id: 4, nombre: "Gorra", precio: 1200, categoria: "Accesorios" },
    { id: 5, nombre: "Campera", precio: 9500, categoria: "Ropa" }
    ];
    
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
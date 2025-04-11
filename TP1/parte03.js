import productos from './productos.js';

const PRECIO = 10000



console.log('01',productos.some(p => p.precio > PRECIO))

console.log('02',productos.every(p => p.precio > 1000))

console.log('03',productos.includes(p => p.nombre == 'Campera'))
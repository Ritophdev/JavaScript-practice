// Primitive Data Types
// 1. String
// 2. Number
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol (ES6)

const unicId = Symbol('id')
let user = {
    userName: "Christopher",
    age: 23, 
    [unicId]: 49765
}

console.log(user[unicId])

console.log(user['userName'])

// 7. BigInt (ES11)

let bigInt = 1234567890123456789012345678901234567890n
let bigInt2 = BigInt(1234567890123456789012345678901234567890)
console.log(bigInt)
console.log(bigInt2)

console.log(typeof unicId)

function mensajeDesarrollador() {
    const pensamiento = "Cada línea de código es un paso más hacia la solución. No se trata solo de escribir, sino de entender, aprender y mejorar constantemente. El camino del desarrollo es largo, pero cada error es una oportunidad para crecer.";
    
    console.log(pensamiento);
  }
  
  // Llamada a la función
mensajeDesarrollador();
  

/*
Clase 20 - Ejercicios: Operadores
Vídeo: https://youtu.be/1glVfFxj8a4?t=6458
*/

// 1. Crea una variable para cada operació  
let sum = 5 + 3 
let res = 8 - 7 
let mul = 1 * 9
let div = 6 / 2
let dif = 7 % 3
let exp = 9 ** 2

// 2. Crea una variable para cada tipo de operación de asignación, que haga uso de las variables utilizadas para las operaciones aritméticas
let numOpe = 4
numOpe += sum
numOpe -= res
numOpe *= mul
numOpe /= div
numOpe %= dif
numOpe **= exp
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 3. Imprime 5 comparaciones verdaderas con diferentes operadores de comparación
console.log(5 > 4)
console.log(3 < 5)
console.log(4 === 4)
console.log('b'=='b')
console.log('a'!== 'b')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 4. Imprime 5 comparaciones falsas con diferentes operadores de comparación
console.log(5 <= 4)
console.log(3 >= 5)
console.log(4 !== 4)
console.log('a'=='b')
console.log('b'!== 'b')
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 5. Utiliza el operador lógico and
console.log(5 >= 4 && 5 <= 5)
console.log(5 < 4 && 5 <= 5)
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 6. Utiliza el operador lógico or
console.log(5 < 4 || 5 <= 5)
console.log(5 < 4 || 6 <= 5)
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 7. Combina ambos operadores lógicos
console.log(5 >= 4 && 5 <= 5 || 5 < 4 && 5 <= 5)
console.log(5 >= 4 && 5 <= 5 && 5 < 4 && 5 <= 5)
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 8. Añade alguna negación
console.log(!(5 >= 4 && 5 <= 5))
console.log(!(5 < 4 || 6 <= 5))
console.log(!(5 >= 4 && 5 <= 5 || 5 < 4 && 5 <= 5))
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 9. Utiliza el operador ternario
let ask = 'No'
let correction = (ask === 'Si') ? 'Respuesta correcta 🚀' : 'Respuesta incorrecta';
console.log(correction)
console.log('✨✨✨✨✨✨✨✨✨✨✨✨✨✨✨')

// 10. Combina operadores aritméticos, de comparáción y lógicas
console.log((4*5)>=15 && (4+9)-3 ==10) 
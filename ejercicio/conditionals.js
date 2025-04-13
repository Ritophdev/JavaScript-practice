/*
Clase 24 - Ejercicios: Condicionales
Vídeo: https://youtu.be/1glVfFxj8a4?t=8652
*/

// if/else/else if/ternaria

// 1. Imprime por consola tu nombre si una variable toma su valor
let myName = 'Christopher'
if (myName === 'Christopher'){
    console.log(`Mi nombre es ${myName}!` )
}

// 2. Imprime por consola un mensaje si el usuario y contraseña concide con unos establecidos
let userName = 'Ritoph'
let password = '123qwe'
if (userName === 'Ritoph' && password === '123qwe'){
    console.log(`Bievenido ${userName}`)
}else{ 
    console.log('El nombre de usuario o la contraseña es incorecto!')
}

// 3. Verifica si un número es positivo, negativo o cero e imprime un mensaje
let nomber = -1
if (nomber > 0){
    console.log('El numero es positivo')
}else if(nomber < 0){
    console.log('El numero es negativo')
}else{
    console.log('No hay numero')
}

// 4. Verifica si una persona puede votar o no (mayor o igual a 18) e indica cuántos años le faltan
let age = 17
let aprobacion = (age >= 18)? 'Puedes votar' : `Aun no puedes votar te faltan ${18-age} años`;
console.log(aprobacion)

// 5. Usa el operador ternario para asignar el valor "adulto" o "menor" a una variable
//    dependiendo de la edad 
let edad = 3
console.log(edad >= 18 ? 'Ya es un adurto' : 'Todavia es un menor');
// 6. Muestra en que estación del año nos encontramos dependiendo del valor de una variable "mes"

// 7. Muestra el número de días que tiene un mes dependiendo de la variable del ejercicio anterior

// switch

// 8. Usa un switch para imprimir un mensaje de saludo diferente dependiendo del idioma
language = 'es'
switch (language){
    case 'es':
        console.log('Hola')
        break
    case 'pr':
        console.log('olá')
        break
    case 'en':
        console.log('hello')
    default:
        console.log('No esta diponible')
}
// 9. Usa un switch para hacer de nuevo el ejercicio 6

// 10. Usa un switch para hacer de nuevo el ejercicio 7
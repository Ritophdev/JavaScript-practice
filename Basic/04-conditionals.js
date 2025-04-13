// Condicion con (if)
let age = 28
if (age === 28) {
    console.log(`¡${age} es mi edad!`)
}else{
    console.log(`¡${age} NO es mi edad!`)
}

// Condicion con (el operador ternario)
let altura = 163
let mensaje = altura === 163 ? `¡${altura} es mi altura!` : `¡${altura} NO es mi altura!`;
console.log(mensaje)

// Condicion con (switch)
let day = 4
let dayOfBirth
switch(day){
    case 2:
        dayOfBirth = 'falta 2 dia'
        break
    case 4:
        dayOfBirth = 'es mi cump'
        break
    default:
        dayOfBirth = 'no lo es'
}
console.log(dayOfBirth)
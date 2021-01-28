var nombre = 'Sacha', apellido = 'Lifszyc'
var edad = 28

edad = '28 años'

console.log('Hola ' + nombre + ' ' + apellido)
console.log('Tengo ' + edad)

var peso = 75


var precio =200.3
var total=(precio *3)
var totalstr=total.toFixed(2) // toma los decimales que defino 


// alcalce de las funciones

var nombre = 'Cocosette'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas() 


function imprimirNombreEnMayusculas1(n) {
    n = n.toLowerCase()
    console.log(n)
}

imprimirNombreEnMayusculas1(nombre)// crea una variable local dentro del metoodo sin afectar la variable global

function imprimirNombreEnMayusculas(nombre) {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas(nombre) 
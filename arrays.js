var sacha = {
    nombre: 'Sacha',
    apellido: 'Lifszyc',
    altura: 1.72
}

var alan = {
    nombre: 'Alan',
    apellido: 'Perez',
    altura: 1.86
}

var martin = {
    nombre: 'Martin',
    apellido: 'Gomez',
    altura: 1.85
}

var dario = {
    nombre: 'Dario',
    apellido: 'Juarez',
    altura: 1.71
}

var vicky = {
    nombre: 'Vicky',
    apellido: 'Zapata',
    altura: 1.56
}

var paula = {
    nombre: 'Paula',
    apellido: 'Barros',
    altura: 1.76
}

var personas =[sacha,alan,martin,dario,vicky,paula] // defnicion del array

// function map  con arrow function

//1 con realizando las cambios en los objectos
const pasarAlturaCms = persona => {   //se retorna un nuevo objeco modificado, si se retorna simplemente persona.altura=persona.altura*100 modifica el objeto global y envia un array nuevo las mofificaciones y al modificar cualquiero array el otro tambien sufre el cambio por star en la misma ubicacion de memoria
   
    persona.altura*=100
    return persona
}
//2 realizando los cambios en un solo objecto
const pasarAlturaCms = persona => {   //se retorna un nuevo objeco sin modificar el array que llega , sin estar en la misma ubicacion de memoria
   
    return {
        ...persona ,
        altura : persona.altura*=100

    } 
}

//3 resumiendo la funtcion arrow function

const pasarAlturaCms = persona => ({  
        ...persona ,
        altura : persona.altura*=100 
    })




var personasCms =personas.map(pasarAlturaCms)

console.log(personasCms)
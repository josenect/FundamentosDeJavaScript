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

// al filtrar generamos un nuevo array con la condicion que se cumple

// tipos de funcion para el filtro 

const esAlta = persona => persona.altura > 1.8                   // funcion arrow
var personasAltas = personas.filter(function (persona){          // function anonyma desde el filter

    return persona.altura > 1.8
})  




var personasAltas = personas.filter(esAlta)  // se filtra dependiendo la condicion de la funcion esAlta


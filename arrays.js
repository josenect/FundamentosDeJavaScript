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

//metodos reduce 

const reducer = (acum,persona)=>{  // llega y valor por relacion el acum que es propio del metod reduce el 0 y el objecto del array que es persona el cual nose envia en el metodo pero el reduce sabe que necesita iterarlo
    return acum+persona.altura
}

var pesoPersonas =personas.reduce(reducer ,0)// necesita los parametro 1 el metodo 2 el valor del contador para el inicio 

console.log(pesoPersonas)
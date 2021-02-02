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

// acceder alos atributos de un array
console.log(personas[0].altura)  
console.log(personas[0]['altura'])

// implementado foreach
personas.forEach(persona => {
    console.log(persona.altura) // impresion de aca uno de los datos de una elemnto del array
});


// recorriendo array por un for

for (let index = 0; index < personas.length; index++) {
    console.log(`${personas[index].nombre} mide ${personas[index].altura}`) // impresion de aca uno de los datos de una elemnto del arra
    
}
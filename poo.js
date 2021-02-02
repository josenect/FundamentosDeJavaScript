// en js los objectos de clases son prototipos

function Persona(nombre, apellido){           // definicion de constructor 
    this.nombre = nombre                     //defincion de de los atributos 
    this.apellido = apellido
}

Persona.prototype.saludar = function(){      // definicion de un metodo para ese prototipo
    console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
}

var pablo = new Persona('Pablo', 'Andrés') // creacion de obcjetos 
var joaquin = new Persona('Joaquín', 'Perez')
var rosa = new Persona('Rosa', 'Mosqueta')

rosa.saludar()
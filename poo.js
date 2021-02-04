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


// las arrow function al definirse en un metodo de una clase generan un evento colateral dedido que al manipular las propiedades del prototipo 
//con el this este sale del scope local debido a que el pertenece al scope global perdiendo la referencia de las propiedades del prototipo que estabamos haciendo referencia

Persona.prototype.soyAlto = () => {
    return this.altura > 1.8          //  el this se sube al scope global asiendo referencia a un atributo que no existe y lo define undefine
}   

//1.  definir los metodos mediantes funciones expresivas para no sufrir este efecto

Persona.prototype.soyAlto = function () {
    return this.altura > 1.8         
}   
//


rosa.saludar()



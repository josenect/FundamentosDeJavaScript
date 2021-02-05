// definicion de Clases Padre

class Persona {

    constructor(nombre, apellido){           // definicion de constructor 
        this.nombre = nombre                     //defincion de de los atributos 
        this.apellido = apellido
    }

    saludar(){  // metodos de la clase 

        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)
    }

    soyAlto(){   //metodos de la clase

        return "this.altura > 1.8 "
    }

}



class Desarollador extends Persona{   // clase hija palabra reservada extends se especifica la padre 

    constructor(nombre,apellido,edad){    // constructor 
    super(nombre,apellido)   // se debe poner super con los atributo que necesita el constructor de la super clase

    this.edad = edad   // defincion de un atributo propia de la clase

    } 
    
    saludar(){                             // se define el mismo nombre del metodo para cambair su funcionalidad internamente principio de polimorfismo
        console.log(`me llamo ${this.nombre } y soy desarollador`)

    }


}







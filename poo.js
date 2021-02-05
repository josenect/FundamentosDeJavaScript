// definicion de Clases Padre

class Persona {

    constructor(nombre, apellido){           // definicion de constructor 
        this.nombre = nombre                     //defincion de de los atributos 
        this.apellido = apellido
    }

    saludar(fn){  // metodos de la clase // se define que se recibe un funcion como parametro 

        console.log(`Hola me llamo ${this.nombre} ${this.apellido}`)

        if (fn) {                                       // se pregunta si el metodo es real con true 
            fn(this.nombre ,this.apellido,false)        // se ejecuta ese metodo y se enviar los parametros del mismo
            
        }
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
    
    saludar(fn){                             // se define que si recibe un funcion como parametro 
        console.log(`me llamo ${this.nombre } y soy desarollador`)

        if (fn) {                                       // se pregunta si el metodo es real con true 
            fn(this.nombre ,this.apellido,true)        // se ejecuta ese metodo y se enviar los parametros del mismo el con el ultimo true para confirmar que es devo
            
        }
    }


}


 
function responderSaludo(nombre,apellido,esDev){    //funcion que se pasara como parametro 

    console.log(`Buen dia ${nombre } ${apellido }`)   
    if (esDev) {                                        // validad si es devo para responder con un mensaje personalizado 
        console.log(`Ah no sabia que eras Desarollador`)
        
    }
}


// creacion de obcjetos  
var pablo = new Persona('Pablo', 'Andrés',1.2) 
var joaquin = new Persona('Joaquín', 'Perez',1.2)
var rosa = new Desarollador('Rosa', 'Mosqueta',1.05)

// llamado de metodos con y sin function como parametro 
pablo.saludar()
joaquin.saludar(responderSaludo)
rosa.saludar(responderSaludo)



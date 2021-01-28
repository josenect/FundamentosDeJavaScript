
//objectos  definicion de un obecjto en javaScript

var persona1 ={
nombre: 'Jose' ,
apellido: 'rodriguez',
1 : 'numero 1',
edad : 24


}

var persona2 ={
    nombre: 'Andres' ,
    apellido: 'rodriguez',
    1 : 'numero 1',
    edad : 24

    }


    function imprimirNombreEnMayuscula1(persona){

        console.log(persona.nombre.toUpperCase())  // accedemos ala propiedad del objecto 
    }


    imprimirNombreEnMayuscula1(persona1)  // enviamos el objecto completo 



    function imprimirNombreEnMayuscula2({nombre,apellido}){ // definirmos que propiedad o propiedades necesitamos del objecto o q

        console.log(apellido.toUpperCase())
        console.log(nombre.toUpperCase())  // accedemos ala propiedad del objecto 
    }
    imprimirNombreEnMayuscula2(persona2)// enviamos el objecto completo 


    imprimirNombreEnMayuscula2({nombre : 'Martha' ,apellido:'rodriguez'})// declaramos el objecto al momento de enviarlo



    function imprimirNombreEnMayuscula5(persona1){ // recibimos el objecto 
        var {nombre}= persona1   // se define el nombre de la variable y el objecto que contiene esa propiedad   
        var { nombre: nombreNuevo } = persona1 //  para cambiar el nombre de la variable yq eu no se aigual ala propiedad
        console.log(nombre)
        
    }

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
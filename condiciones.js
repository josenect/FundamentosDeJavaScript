

// definiciondel objecto 
var persona2 ={
    nombre: 'Andres' ,
    apellido: 'rodriguez',
    1 : 'numero 1',
    edad : 24,
    ingeniero : true,
    cocinero :true,
    cantante :true ,
    dj: false,
    guitarrista : false,
    drone : true
    }


    function imprimirProfesion(persona){

        console.log(`${persona.nombre} es :`) // template string Interpolación de variables 

        if (persona.ingeniero=== true){
            console.log('ingeniero')
        } else
        {
            console.log( 'no es Ingeniero')  // si no cumple la condicon de if sale por esta opcion
        }

        if (persona.cocinero){  // el ""=== true " es opcion debido a que el if es un si , si la condicion es true ingresa
            console.log('cocinero')
        }
        
        if (persona.cantante){
            console.log('cantante')
        }

        if (persona.dj){
            console.log('dj')
        }
        
        if (persona.guitarrista){
            console.log('guitarrista')
        
        }

         if (persona.drone){
            console.log('piloto de drone')
        }
           
            
    }


    imprimirProfesion(persona2)
    imprimirSiEsMayorDeEdad(persona2)


    const MAYORIA_DE_EDAD = 18 // se define uan constante para no dejar un numero en la validacion del metodo

    function esMayorDeEdad(persona){   //se divide el metodo inicial en dos retorna un true o false 
        return persona.edad>=MAYORIA_DE_EDAD  
    }
 // funcion anonyma 

 const esMayorDeEdad=function (persona){   //se divide el metodo inicial en dos retorna un true o false 
    return persona.edad>=MAYORIA_DE_EDAD  
}
//funcin arrow  Arrow Functions que permiten una nomenclatura más corta para escribir expresiones de funciones
const esMayorDeEdad= (persona)=>{   //se divide el metodo inicial en dos retorna un true o false 
    return persona.edad>=MAYORIA_DE_EDAD  
}
//funcion arrow disminuido 
const esMayorDeEdad = persona=> persona.edad>=MAYORIA_DE_EDAD  //se divide el metodo inicial en dos retorna un true o false 
       


    function imprimirSiEsMayorDeEdad(persona){

        if(esMayorDeEdad(persona)){    // si es true la respuesta del metodo esMayorDeEdad ingre a el if 
             console.log(`${persona.nombre} es mayor de Edad`)
        }else{
            console.log(`${persona.nombre} no es mayor de edad`)
        }

    }
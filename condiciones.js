

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
// por referencia modifica los valores del objecto que se envia ,  
///////////////////////
// si se envia solo el valor de la propiedad no modifica el objecto
//buenas practicas responder con un nuevo objecto 
var persona ={
    nombre: 'Jose' ,
    apellido: 'rodriguez',
    1 : 'numero 1',
    edad : 24
    
    
    }
function cumpleanos(persona){

return {   // crea un nuevo objecto modificando la edad al nuevo objecto con todos datos originales 
...persona,
edad :persona.edad+1 // definimos los datos que se cambiaran en el objecto  

}
   

}
// forma correcta de llmar el motodo para aterrizar el nuevo objecto

personavieja=cumpleanos(persona)

//////Parámetros como referencia o como valor
//Cuando los objetos se pasan como una referencia, estos se modifican fuera de la función. Para solucionar esto se puede crear un objeto diferente. Esto lo podemos hacer colocando tres puntos antes del nombre. Ej …persona.

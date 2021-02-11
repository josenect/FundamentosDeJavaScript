// callbacks

const API_URl = 'https://www.swapi.tech/api/'// definicion del la url
const PEOPLE_URL = 'people/:id'             /// recurso dentro de la uri
 
const opts = {crossDomain: true}                             // tipo de request otra pagina


function obtenerPersonaje(id){
  return new Promise((resolve,reject) =>{ //// creacion de la promesa  parametro resolve se ejecuta cuando resuelve la promesa con la respuesta // reject cuando se genera error en la promesa
    
    const url = `${API_URl}${PEOPLE_URL.replace(':id',id)}`  // ruta del recurso y id de elemento 
    $.get(url,opts,function (data){

        resolve(data)   //se ejecuta cuando resuelve la promesa con la respuesta 
       
    }).fail(()=>reject(id))   // reject cuando se genera error en la promesa
    
    
  })
}

/*
Promesas Encadenadas

A diferencia de los callbacks en el CallbackHell, que terminan estando anidados unos dentro de otros, cuando se usan 
Promesas la ejecución de las llamadas no se hacen de manera anidada sino de manera encadenada, al mismo nivel una debajo
 de la otra, lo que hace que el código sea mucho más legible y mantenible.
*/

obtenerPersonaje(1).then(function(persona){    // con el metodo then propio de la promesa obtenemos el resultado que promesa este metodo requiere la function como parametro
  persona=persona.result.properties        // solo tomo los datos de la persona
  console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
  return obtenerPersonaje(2)                // al ser un return este then se convierte en una promesa que tendra un then diferente 
})
.then(function(persona){    // con el metodo then propio de la promesa obtenemos el resultado que promesa este metodo requiere la function como parametro
  persona=persona.result.properties        // solo tomo los datos de la persona
  console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
  return obtenerPersonaje(3)                 // al ser un return este then se convierte en una promesa que tendra un then diferente 
})
.then(function(persona){    // con el metodo then propio de la promesa obtenemos el resultado que promesa este metodo requiere la function como parametro
  persona=persona.result.properties        // solo tomo los datos de la persona
  console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
  return obtenerPersonaje(4)                 // al ser un return este then se convierte en una promesa que tendra un then diferente |
})
.then(function(persona){    // con el metodo then propio de la promesa obtenemos el resultado que promesa este metodo requiere la function como parametro
  persona=persona.result.properties        // solo tomo los datos de la persona
  console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
  
})


.catch(function(id){                       // con el metodo cath propio de la promesa obtenemos el error que genero la promesa este metodo requiere la function como parametro
  console.log(`error al generar la consulta del id ${id}`)
})
            




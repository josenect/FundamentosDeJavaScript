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

// Promesas  Las promesas tienen tres estados:

//pending
//fullfilled
//rejected
/*
new Promise( ( resolve, reject ) => {
  // --- llamado asíncrono
  if( todoOK ) {
     // -- se ejecutó el llamado exitosamente
     resolve()
  } else {
     // -- hubo un error en el llamado
     reject()
  }
} )
*/

obtenerPersonaje(1).then(function(persona){    // con el metodo then propio de la promesa obtenemos el resultado que promesa este metodo requiere la function como parametro
  persona=persona.result.properties        // solo tomo los datos de la persona
  console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
}).catch(function(id){                       // con el metodo cath propio de la promesa obtenemos el error que genero la promesa este metodo requiere la function como parametro
  console.log(`error al generar la consulta del id ${id}`)
})
            




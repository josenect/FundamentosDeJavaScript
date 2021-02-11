// callbacks

const API_URl = 'https://www.swapi.tech/api/'// definicion del la url
const PEOPLE_URL = 'people/:id'             /// recurso dentro de la uri
 
const opts = {crossDomain: true}                             // tipo de request otra pagina


function obtenerPersonaje(id){
  return new Promise((resolve,reject) =>{ //// creacion de la promesa  parametro resolve se ejecuta cuando resuelve la promesa con la respuesta // reject cuando se genera error en la promesa
    
    const url = `${API_URl}${PEOPLE_URL.replace(':id',id)}`  // ruta del recurso y id de elemento 
    $.get(url,opts,function (data){
      data=data.result.properties 
        resolve(data)   //se ejecuta cuando resuelve la promesa con la respuesta 
       
    }).fail(()=>reject(id))   // reject cuando se genera error en la promesa
    
    
  })
}

async function obtenerPersonajes(){ // agregar el async 

  var ids =[1,2,3,4,5,6,7,8,9]
  
  var promesas = ids.map(id=> obtenerPersonaje(id)) // creamos el array de promesas 
   
  try {
    
   var personajes= await Promise.all(promesas)   // await detiene la ejecucion del programa hasta que se tenga la respuesta de todas estas promesas
    console.log(personajes)

  } catch (id) {
    console.log(`erro en el promesa ${id}`)     
  }

}


/*
Async-await: lo último en asincronismo

Async-await es la manera más simple y clara de realizar tareas asíncronas. Await detiene la ejecución 
del programa hasta que todas las promesas sean resueltas. Para poder utilizar esta forma, hay que colocar 
async antes de la definición de la función, y encerrar el llamado a Promises.all() dentro de un bloque try … catch.

*/


obtenerPersonajes()





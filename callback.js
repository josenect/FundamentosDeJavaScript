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


/*

Múltiples promesas en paralelo

Para hacer el llamado a múltiples promesas, nos apoyamos en un array de ids con el que luego construimos otro arreglo de Promesas
, que pasaremos como parámetro a Promise.all( arregloDePromesas ), con las promesas podemos encadenar llamadas en paralelo, algo
 que no es posible usando callbacks.

*/



var ids =[1,2,3,4,5,6,7,8,9]

var promesas = ids.map(id=> obtenerPersonaje(id)) // creamos el array de promesas 
Promise.all(promesas).then(personajes => console.log(personajes))     // pasamos el array de promesas para que se ejecuten cada resultado 
                                                                      //de la promesa lo recibimos en el then como personajes y pasamos a la function 
                                                                      //que es imprimir en consola el objecto de esa promesa 
  .catch(function(){
  console.log("erro en el promesa ")               //con el catch se dispara si una de las promesas no es ejecutada de la manera correcta o falla
})




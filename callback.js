// callbacks

const API_URl = 'https://www.swapi.tech/api/'// definicion del la url
const PEOPLE_URL = 'people/:id'             /// recurso dentro de la uri
 
const lukeUrl = `${API_URl}${PEOPLE_URL.replace(':id',1)}`    // concatenacion en uri y reemplazo del id
const opts = {crossDomain: true}                             // tipo de request otra pagina

const onPeopleResponse = function(persona){   // metodo que manipula la data que llegada dela API

   
}



function obtenerPersonaje(id,callback){
  const url = `${API_URl}${PEOPLE_URL.replace(':id',id)}`  // ruta del recurso y id de elemento 

  $.get(url,opts,function(persona){ //metodo de jquery para relizar la peticion se envia al callback hasta que tiene una respuesta

    persona=persona.result.properties        // solo tomo los datos de la persona
    console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona

if (callback) {
  callback()
}


  })              

}
//Una manera de asegurar que se respete la secuencia en que hemos realizado múltiples tareas es utilizando callbacks,
// con lo que se ejecutará luego, en cada llamada. Lo importante es que el llamado al callback se haga a través de una 
//función anónima. Sin embargo, al hacerlo de esta manera generamos una situación poco deseada llamada CallbackHell.

// se llaman los datos del siguiente personaje solo si ya llego las respuesta del primero mediante callback 

obtenerPersonaje(1,function(){
  obtenerPersonaje(2,function(){
    obtenerPersonaje(3,function(){
      obtenerPersonaje(4)
    })
  })
})





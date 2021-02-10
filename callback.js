// callbacks

const API_URl = 'https://www.swapi.tech/api/'// definicion del la url
const PEOPLE_URL = 'people/:id'             /// recurso dentro de la uri
 
const lukeUrl = `${API_URl}${PEOPLE_URL.replace(':id',1)}`    // concatenacion en uri y reemplazo del id
const opts = {crossDomain: true}                             // tipo de request otra pagina

const onPeopleResponse = function(persona){   // metodo que manipula la data que llegada dela API

    persona=persona.result.properties        // solo tomo los datos de la persona
    console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
}



function obtenerPersonaje(id){
  const url = `${API_URl}${PEOPLE_URL.replace(':id',id)}`  // ruta del recurso y id de elemento 
  $.get(url,opts,onPeopleResponse)              //metodo de jquery para relizar la peticion se envia al callback hasta que tiene una respuesta

}

// asiscronismo se piden los elementos pero no se sabe en que orden llegan todo depende de la respuesta del servidor // Resulta que JavaScript 
//es un lenguaje de programación asincrono. Lo que quiere decir esto es que al ejecutar código JavaScript el hilo de ejecución continuará a pesar
// de encontrarse en situaciones en las que no obtenga un resultado inmediatamente.
obtenerPersonaje(1)
obtenerPersonaje(2)
obtenerPersonaje(3)
obtenerPersonaje(4)


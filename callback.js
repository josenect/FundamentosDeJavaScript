// callbacks

const API_URl = 'https://www.swapi.tech/api/'// definicion del la url
const PEOPLE_URL = 'people/:id'             /// recurso dentro de la uri
 
const lukeUrl = `${API_URl}${PEOPLE_URL.replace(':id',1)}`    // concatenacion en uri y reemplazo del id
const opts = {crossDomain: true}                             // tipo de request otra pagina

const onPeopleResponse = function(persona){   // metodo que manipula la data que llegada dela API

    persona=persona.result.properties        // solo tomo los datos de la persona
    console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
}

$.get(lukeUrl,opts,onPeopleResponse)           //metodo de jquery para relizar la peticion se envia al callback hasta que tiene una respuesta
  // recibe ruta , tipo de respuesta y el moto callback
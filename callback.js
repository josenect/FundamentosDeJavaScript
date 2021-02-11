// callbacks

const API_URl = 'https://www.swapi.tech/api/'// definicion del la url
const PEOPLE_URL = 'people/:id'             /// recurso dentro de la uri
 
const lukeUrl = `${API_URl}${PEOPLE_URL.replace(':id',1)}`    // concatenacion en uri y reemplazo del id
const opts = {crossDomain: true}                             // tipo de request otra pagina

const onPeopleResponse = function(persona){   // metodo que manipula la data que llegada dela API

   
}



function obtenerPersonaje(id,callback){
  const url = `${API_URl}${PEOPLE_URL.replace(':id',id)}`  // ruta del recurso y id de elemento 

  $.get(url,opts,callback).fail(function(){

    console.log(`sucedio un error al obtener el personaje ${id}` ) /// mensaje de ese callback solo se ejecuta si hay un error
  })
            

}
//Manejo de errores con callbacks
//Para solucionar el problema de quedarnos sin conexión, u otro error similar, en medio de una sucesión de callbacks utilizamos el método fail().l.

// se llaman los datos del siguiente personaje solo si ya llego las respuesta del primero mediante callback 

obtenerPersonaje(1,function(persona){   // la function que recibe es un callback  que contiene anidados 5 llamados al metodo obtener 
  persona=persona.result.properties        // solo tomo los datos de la persona
  console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
  obtenerPersonaje(2,function(persona){
    persona=persona.result.properties        // solo tomo los datos de la persona
    console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
    obtenerPersonaje(3,function(persona){
      persona=persona.result.properties        // solo tomo los datos de la persona
      console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
      obtenerPersonaje(4, function(persona){
        persona=persona.result.properties        // solo tomo los datos de la persona
        console.log(`Hola Soy ${persona.name}`)   // impresion de nombre de la persona
      })
    })
  })
})





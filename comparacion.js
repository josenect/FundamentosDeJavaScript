//comparacion


var x =4
var y ="4"


r = x==y //de esta forma JavaScrits iguala en un mismo tipo de dato para generar el resultado

r1= x===y // de esta forma se realiza la comparacion con los tipos de datos que tienen esas variables sin cambiar 

var jose={

    nombre: 'jose'
}
var jose1={

    nombre: 'jose'
}

// comparacion de objectos 

jose==jose1 // genera false
jose===jose1 // genera false
 
// si se crea el objecto en base al objecto inicial genera igual false
var jose1={

    ...jose
}

jose1=jose // si el objecto jose1 se genera de esta manera genera true debido a que esta almacenada las dos variales en la misma ubicacion en memoria
           
// lo cual genera unos efectos los cuales al modificar el valor de alguno de las propiedades de un objecto afecta al otro cambiando el valor de la porpiedad 

 jose.nombre='efrey' // esto genera cambio de ka propieda de jose1.
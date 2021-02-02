var jose={

    nombre : 'Jose',
    apellido : 'Rodriguez',
    edad : 23 ,
    peso : 101
    
    }
    
    console.log(`${jose.peso} KG inicio de año` )
    
    const INCREMENTO_PESO = 0.2  //constantes 
    const DIAS_DEL_AÑO = 365
    
    const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO   // metodo de aumento de peso 
    const adelgazar = persona => persona.peso -= INCREMENTO_PESO        // metodo de adelgazar de peso 
    
    for (var i = 1 ; i <= DIAS_DEL_AÑO ; i++){ //inicio del for
    
    var random = Math.random()   // numero aleatorio  
    
    if (random < 0.25) {     // ingreso del 25% para hacer el aumento de peso
       aumentarDePeso(jose)
    
    }else if (random <0.5) {    // ingreso del 25% para hacer el adelgazar de peso
    // adelgaza
    adelgazar(jose)
    
    }
    
    
    }
    
    console.log(`${jose.peso.toFixed(1)} KG final del año` )
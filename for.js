var jose={

    nombre : 'Jose',
    apellido : 'Rodriguez',
    edad : 23 ,
    peso : 101
    
    }
    
    console.log(`${jose.peso} KG inicio de año` )
    
    const INCREMENTO_PESO = 0.3  //constantes 
    const DIAS_DEL_AÑO = 365
    
    const aumentarDePeso = persona => persona.peso += INCREMENTO_PESO   // metodo de aumento de peso 
    const adelgazar = persona => persona.peso -= INCREMENTO_PESO        // metodo de adelgazar de peso 
    const comeMucho = () => Math.random() <0.3
    const realizarDeporte = () => Math.random() <0.4
    
    const META = jose.peso -3
    var dias=0
    while (jose.peso > META){

        if(comeMucho()){
            aumentarDePeso(jose)

        }
        if(realizarDeporte()){
            adelgazar(jose)

        }
        dias +=1
        debugger  // navegar en el codigo como un paso a paso y navegar en los metodos que invoca 
    }
    
    console.log(`${jose.peso.toFixed(1)} KG final peso dias ${dias}` )
//En enmascript 6 se introdujeron las palabras let y const
//esto significa que las variables definidas en un bloque
//solo pueden ser accedidas dentro de ese bloque

//se debe de utilizar let y const para esto y var para acceder de cualquier
//lugar

function fruits(){// bloque estodo lo que este dentro de {} corchetes
    if(true){
        var fruit=`Apple`;//function scope
        let fruit2=`kiwi`;//block scope
        const fruit3=`banana`;//block scope
        console.log(fruit2),
        console.log(fruit3)
    }
    console.log(fruit)
}

fruits();
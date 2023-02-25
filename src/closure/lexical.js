const myGlobal=0;

function myFuntion(){
    const myNumber=1;
    console.log(myGlobal);

    function parent(){//funcion interna
        const inner=2;
        console.log(myNumber,myGlobal);

        function child(){
            console.log(inner,myNumber,myGlobal)
        }
        return child();
    }
    return parent();
}

myFuntion();

//Contador
function crearContador(){
    let contador=0;
    return function incrementar(){
        contador=contador+1;
        return contador;
    }
}

const contador1=crearContador();

console.log(contador1())

function multiplicarPor(valor) { // Definimos una función llamada "multiplicarPor" que toma un parámetro llamado "valor"
    return function(numero) { // Dentro de "multiplicarPor", definimos una función interna que toma un parámetro llamado "numero"
      return valor * numero; // La función interna accede a la variable "valor" definida en el ámbito de "multiplicarPor", lo multiplica por "numero" y devuelve el resultado
    }
  }
  
  var duplicar = multiplicarPor(2); // Creamos una variable llamada "duplicar" que se le asigna la función que devuelve "multiplicarPor(2)"
  console.log(duplicar(5)); // Llamamos a la función que se encuentra en la variable "duplicar" con el argumento 5, lo que devuelve 10
  

  function sumar2(numero){
    if (numero==undefined){
        numero=0;
    }
    return function(valor){
        if (valor==undefined){
            valor=0;
        }
        return numero+valor
    }
  }

  var sumar=sumar2();
  console.log(sumar())

  function sumWithClosure(firstNum) {
    // Tu código aquí 👈
    let numero1 = firstNum
    if (numero1 == undefined) {
      numero1 = 0;
    }
    return function otherNumer(secondNum) {
      let numer2=secondNum
      if (numer2 == undefined) {
        numer2 = 0;
      }
       return numero1+numer2
     }
  }
  
 
 console.log(sumWithClosure(20)());

//Closure coche

 const coche=(function(){
    let _marca,_velocidad=0,_puertas;
    function setMarca(marca){
        _marca=marca;
        return _marca;
    }
    function getMarca(){
        return _marca;
    }
    function acelerar(){
        _velocidad++;
        return _velocidad;
    }
    function frenar(){
        _velocidad--;
        return _velocidad;
    }
    function setPuertas(puertas){
        _puertas=puertas;
        return _puertas;
    }
    return{
        setMarca,
        getMarca,
        acelerar,
        frenar,
        setPuertas
    };
 } )();

coche.setMarca("Renault");
console.log(coche.getMarca());
console.log(coche.acelerar());
console.log(coche.frenar());

let calculadora=(function(){
    let _numero1,_numero2,_resultado;
    function getNumero1(numero1){
        _numero1=numero1;
        if (_numero1==undefined){
            _numero1=0;
        }
        return _numero1;
    }
    function getNumero2(numero2){
        
        _numero2=numero2;
        if (_numero2==undefined){
            _numero2=0;
        }
        return _numero2;

    }
    function sumar(){
        _resultado= _numero1+_numero2;
        return _resultado;
    }
    return{
        getNumero1,
        getNumero2,
        sumar
    }
})()
console.log(calculadora.getNumero1(1));
console.log(calculadora. getNumero2(2));
console.log(calculadora.sumar());
console.log(calculadora.getNumero1());

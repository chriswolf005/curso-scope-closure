//variables


var a;//declarando
var b ='b';//declarando/asignamos
b='bb'//reasignacion
var a='aa'//redeclaracion

//Global Scope
var fruit='Apple';//global
console.log(fruit)
function bestFruit(){
    console.log(fruit);
}

bestFruit();

//Todas las variables declaradas al inciio del documento son variables globales


//se debe de tener cuidado a la hora de asignar variables,
//porque si asignas una variables y no la de claras pasa a ser global


//ejemplo
function countries(){
    country='Colombia';//Aqui estamos asignando mas no declarando la variable
    console.log(country)
}

countries();
console.log(country);

//aqui aparecera colombia 2 veces, porque al no declarar la variable
//pasa a ser gloval si se le pone let, const  no se podra acceder
//a ella desde fuera de la funcion
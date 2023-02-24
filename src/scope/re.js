/* Reasignacion y Redeclaracion


*/

var firstName;//aqui se esta declarando, se le asigna el valor/Undefined
  firstName='chris'   //aqui asignamos un valor
  console.log(firstName)

  var  lasname='pedro';// declarar/ asignar
  lasname='sanchez'// aqui se reasigno
  console.log(lasname)// mostrar

  var  secondName='pedro';// declarar/ asignar
  var  secondName='yunior'// reasignando y redeclarando
  console.log(lasname)// mostrar

  //let  
  /*Con let puedes reasignar pero no redeclarar */

  let fruit = 'Apple' // declara y asignar
fruit = 'Kiwi'; // reasignar
console.log(fruit);

let fruit = 'Banana';
console.log(fruit);

// const
 const animal = 'dog'; // declara y asigna
// animal = 'cat'; // reasignado
const animal = 'Snake';
console.log(animal);
/*Las constantes no pueden cambiar esto quiere decir que no puedeb ser
reasignadas ni redeclaradas, pero esto puede cambiar en js de
la siguiente manera */


const vehicles = [];
vehicles.push("🚗");
console.log(vehicles);

vehicles.pop();
console.log(vehicles);

/*Lo que quiere explicar este ejemplo
es que const puede cambiar, todo depende 
de como manejes las cosas, como es un arry
no estas ni reasignando ni redeclarando pero si
le puedes poner y quitar elementos a ese array
con el push y el pop
*/
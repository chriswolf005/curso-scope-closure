function grettin(){
    let userName='Ana';//declaramos nuestra variable
    console.log(userName);// la invocamos con el console log

    if(userName==='Ana'){//validamos 
        console.log(`hello ${userName}!`)//la invocamos
    }
}


grettin();//ejecutamos la funcion

console.log(userName);//tratamos de acceder a esta funcion 
//pero dara error debido a que al estar declarada dentro de la funcion
//esta solo existe dentro de la funcion
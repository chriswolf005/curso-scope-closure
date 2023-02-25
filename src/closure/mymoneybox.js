/* function moneyBox(coins){
    let saveCoins=0;
    saveCoins+=coins;
    console.log(`MoneyBox: $ ${saveCoins}`)
}

moneyBox(5);
moneyBox(5);
moneyBox(5); */

function moneyBox(){
 let saveCoins=0;
 function countCoins(coins){
    saveCoins+=coins;
    console.log(`MoneyBox: $ ${saveCoins}`)
 }
 return countCoins;
}

const myMoneyBox=moneyBox();
myMoneyBox(5);
myMoneyBox(5);
myMoneyBox(15);

const moneyBoxAna=moneyBox();
moneyBoxAna(10);
moneyBoxAna(20);
moneyBoxAna(5);

function createPetList() {
    // Tu código aquí 👈
    let petList=[];
    function setDates(name){
        if(name==undefined){
            return petList;
        }
        petList.push(name);
        return petList;
        
    }
    
   
    return setDates;
  }
  let pet=createPetList();
  console.log(pet('firulai'));
  console.log(pet('michi'));
  console.log(pet('cristal'));
  console.log(pet());
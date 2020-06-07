// Code your solutions in this file

// Code your solutions in this file



<<<<<<< HEAD
function writeCards(arr,surprise){

let thankYou=[];

  for(let i=0;i<arr.length;i++){
  thankYou[i]="Thank you, " +arr[i]+`, for the wonderful ${surprise} gift!`;
  }
  return thankYou;
}

writeCards(["Lisa","Kaitlin","Jan"],"surprise");
=======
function writeCards(arr,birthday){

let thankYou[];

  for(let i=0;i<arr.length;i++){
  thankYou[i]=arr[i]+`for the wonderful ${birthday} gift`;
  }
  return thankYou;
}
writeCards(["Ada", "Brendan", "Ali"],"birthday");
>>>>>>> b47c39fb481e86320037dbcb3c9180294a5469c5

function countDown(num){
  
  while(num>=0){
    console.log(num);
    num--;
  }
}

countDown(10);

//var X= X;
if (X== undefined){
  var X= 1;
}
else{
  const Xs = JSON.stringify(X);
localStorage.setItem('Xss' , Xs);
 const  Xss =  localStorage.getItem(Xss);
Xss = JSON.parse(Xss);

console.log("x is"+ Xss);


};

function runPlusBtnV(){ 
  
  //stores items in the localStorage
    var title = document.getElementById('expense').value;
    var amount = document.getElementById('amount').value;
    //var key = document.getElementById('VtitleOfIncomeOfForm').value; //gets the key from the user
   event.preventDefault();
    
    console.log(title);
    console.log(amount);
    

    if (title != "" && amount != "")
{
    // window.localStorage.setItem(key,JSON.stringify(car));  
    //converting object to string
    const titleVV = JSON.stringify(title);
    localStorage.setItem('titleVVV'+ X , titleVV);
  
  
    const amountVV = JSON.stringify(amount);
    localStorage.setItem('amountVVV'+ X, amountVV);
  
  
  
  const  Plustitle =  localStorage.getItem("titleVVV"+X);
PlustitleVVV = JSON.parse(Plustitle);

const  Plusamount =  localStorage.getItem("amountVVV"+X);
PlusamountVVV = JSON.parse(Plusamount);


console.log(PlustitleVVV + " "+ "PlustitleVVV");
console.log(PlusamountVVV + " "+ "PlustitleVVV");




return X== X++;


  
}
else
{
   alert("Please add a value");
}
  
 
}
  
function Xvalue(){
//
  }

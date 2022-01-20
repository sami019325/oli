

function playanimation(){
  document.getElementById('submitBtn').className ='submitBtnAfter';
  document.getElementById('submitBtn').innerHTML= "Done";
  var start = new Date().getTime();
 
  var end = new Date().getTime();
  var dur = end - start;


  setTimeout(function(){
    document.getElementById('submitBtn').className ='submitBtn';
    document.getElementById('submitBtn').innerHTML= "Add";
    console.log("I am the third log after 4 seconds");
  },1000);
    
}


// show and hide 
function showhome(){
  document.getElementById("add").style.display = "block";
  document.getElementById("bgOfHome").style.display = "none";
  document.getElementById("addBtn").style.opacity ="0";
  document.getElementById("homeBtn").style.opacity ="1";
  document.getElementById("downTextH").style.display = "none";
  document.getElementById("downTextA").style.display = "block";
}

function showAdd(){
  document.getElementById("add").style.display = "none";
  document.getElementById("bgOfHome").style.display = "block";
  document.getElementById("homeBtn").style.opacity ="0";
  document.getElementById("addBtn").style.opacity ="1";
  document.getElementById("downTextH").style.display = "block";
  document.getElementById("downTextA").style.display = "none";
}
 document.getElementById("input1").addEventListener("click", inputValue);

 
 function inputValue(){
  var num1 = parseFloat(document.getElementById("input1").value);
  document.getElementById("display").innerHTML = num1;
 } 


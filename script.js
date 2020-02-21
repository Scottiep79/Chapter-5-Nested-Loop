function years(){

  let rainYears= document.getElementById("txt1").value;

document.getElementById("years2").innerHTML = ("You are calculating rainfall for "+rainYears+ " years." );

}

let month = [];


function months() {

 
 let rainYears= document.getElementById("txt1").value;
 let arrPush= document.getElementById("text1").value;
 let arrPush1= document.getElementById("text2").value;
 let arrPush2= document.getElementById("text3").value;
 let arrPush3= document.getElementById("text4").value;
 let arrPush4= document.getElementById("text5").value;
 let arrPush5= document.getElementById("text6").value;
 let arrPush6= document.getElementById("text7").value;
 let arrPush7= document.getElementById("text8").value;
 let arrPush8= document.getElementById("text9").value;
 let arrPush9= document.getElementById("text10").value;
 let arrPush10= document.getElementById("text11").value;
 let arrPush11= document.getElementById("text12").value;
 

   month.push(parseInt(arrPush));
   month.push(parseInt(arrPush1));
   month.push(parseInt(arrPush2));
   month.push(parseInt(arrPush3));
   month.push(parseInt(arrPush4));
   month.push(parseInt(arrPush5));
   month.push(parseInt(arrPush6));
   month.push(parseInt(arrPush7));
   month.push(parseInt(arrPush8));
   month.push(parseInt(arrPush9));
   month.push(parseInt(arrPush10));
   month.push(parseInt(arrPush11));

 


 function myFunc(total, num) {
  return total + num;
 }

  let yearTotal = (month.length/12);

  let length1 = month.length;

  var total = month.reduce(myFunc);

  let average = (month.reduce(myFunc))/month.length;


   document.getElementById("output13").innerHTML = ("The total number of years is "+yearTotal+" years." );
   
   document.getElementById("output14").innerHTML = ("The total number of months are "+length1+" months.");
 
   document.getElementById("output15").innerHTML = ("The total rainfall for the years are "+total+" inches." );
   
   document.getElementById("output16").innerHTML = ("The average rainfall for the years are "+average+" inches.");
 
     }
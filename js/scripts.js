var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];
 
//calling functions for the Inputs
function getName(){
    var year=parseInt(document.getElementById("year").value);
    alert (year/4)
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    alert(true)
    var vali=((day>0 || day<=31)&&(month>0||month<=12 ));
    var vali2=(((year%4)==0 && month==2 && day<=28 ));
    var vali3=((year%4)!==0 &&month==2  && day<=29);

   
}
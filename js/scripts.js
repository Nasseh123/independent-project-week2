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
    

    alert (vali)
    

    if (day<=0 || day>31 ){
        alert("Please input the correct day")
    }else if (month<0||month>12 ){
        alert("PLease Enter the coreect month");
        //checking a leap year
    }

}
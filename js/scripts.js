var daysOfWeek=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
var maleNames=["Kwasi","Kwadwo","Kwabena","Kwaku","Yaw","Kofi","Kwame",];
var femaleNames=["Akosua","Adwoa","Abenaa","Akua","Yaa","Afua","Ama",];
 
//calling functions for the Inputs
function getName(){
    var year=parseInt(document.getElementById("year").value);
    //alert (year/4)
    var month=parseInt(document.getElementById("month").value);
    var day=parseInt(document.getElementById("day").value);
    var male=document.getElementById("male");
    var female=document.getElementById("female");
    var vali=((day>0 || day<=31)&&(month>0||month<=12 ));
    var vali2=(((year%4)==0 && month==2 && day<=28 ));
    var vali3=((year%4)!==0 &&month==2  && day<=29);
    //alert (vali)
    //alert(vali2+ "valll222")
    //alert(vali3 +"val33")
    

    if (day<=0 || day>31 ){
        alert("Please input the correct day")
    }else if (month<0||month>12 ){
        alert("PLease Enter the coreect month");
        //checking a leap year
    }
    else if ((year%4)==0 && month==2 && day>28 ){
        alert( "Input correct date!\n \n "+ year +" "+ "Has 28 days on February")
        //Validating days of february.
    }else if ((year%4)!==0 &&month==2  && day>29){
        alert ( "Input correct date!\n \n "+ year +" "+ "Has 29 days on February")
    }
    //alert("validation complete")
    var day =new Date (year + "/" + month + "/"+ day);
    //alert (day);
    var birthDay=day.getDay();
    //alert (birthDay+ "the dayyy")
    if (vali== true && male.checked==true){
       // alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + maleNames[birthDay]);
        document.getElementById("demo").innerHTML = "You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + maleNames[birthDay];
    }else if (female.checked){
        alert("You were born on " +daysOfWeek[birthDay]+ " and your akan name is " + femaleNames[birthDay])

    }
}
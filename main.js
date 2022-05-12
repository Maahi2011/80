function submit(){


nameofthestudentarrey=[];
var displaysa=[];
for(var j=1; j<=4; j++){
var nameofthestudent=document.getElementById("name_of_the_student_"+j).value;
console.log(nameofthestudent);
nameofthestudentarrey.push(nameofthestudent);
}
var lsa=nameofthestudentarrey.length;
for(var k=0; k<lsa; k++){
    displaysa.push("<h4>name-"+nameofthestudentarrey[k]+"</h4>");
    console.log(displaysa);
}
document.getElementById("display_name_with_commas").innerHTML=displaysa;
}
/*
User enters cityname or city abbreviation:
1.New York NY
2.San Francisco SF
3.LA LAX
4.Austin ATX
5. SYdney SYD

user clicks update button
site detects city by name then changes background of the page to the selected city



1.if user inputs cityname LA then display Los Angeles background
else if no cityname( or unrecognized cityname) was input leave background as it is or change back to original
2.if user inputs cityname NYC then display NYC background
else if no cityname( or unrecognized cityname) was input leave background as it is or change back to original
3.if user inputs cityname SF then display SF background
else if no cityname( or unrecognized cityname) was input leave background as it is or change back to original
4.if user inputs cityname ATX then display ATX background
else if no cityname( or unrecognized cityname) was input leave background as it is or change back to original
5.if user inputs cityname LA then display Los Angeles background
else if no cityname( or unrecognized cityname) was input leave background as it is or change back to original

*/




$(document).ready(function(){

$( "input" ).click(function() {
  var text = $( this ).text();
 $( "input" ).val( text );

function city()
{
var input = document.getElementById("city-type");
alert(input);
}

document.getElementById("submit-btn").onclick = function() {
   alert("button was clicked by user");
}​


document.getElementById("submit-btn").addEventListener("click", function(event){
    event.preventDefault()
});

var  = $( "" ).attr( "" );
$( "" ).text( );

$(".nyc").css("background-image: url(../images/nyc.jpg)");
$("sf").css("background-image: url(../images/sf.jpg)");
$("la").css("background-image: url(../images/la.jpg)");
$("austin").css("background-image: url(../images/austin.jpg)");
$('sydney').css("background-image: url(../images/sydney.jpg)");



}); 
function countdown(){
var current=new Date();
var month=current.getMonth();
var day=current.getDate();
if(month+1>4) year=current.getFullYear()+1;
else if(month+1==4&&day>23) year=current.getFullYear()+1;
else year=current.getFullYear();
var birthday=new Date(year, 04, 23);
birthday.setMonth(birthday.getMonth()-1) //month in 0-11 format
var time1=current.getTime();
var time2=birthday.getTime();
var days=Math.floor((time2-time1)/(1000*60*60*24));
var hour=current.getHours();
hours=24-hour-1;
var minute=current.getMinutes();
minutes=60-minute-1;
var second=current.getSeconds();
seconds=60-second;
document.getElementById("bday_reminder").innerHTML=days+" days "+hours+" hours "+minutes+" minutes "+seconds+" seconds for my birthday!!"
setTimeout("countdown()",1000);
}
var heading = null;
function moveText(milliseconds) {
 window.setInterval("changePosition()", milliseconds);
}
function changePosition() {
 var x = event.clientX;
 var y = event.clientY;
  heading = document.getElementById("bday_reminder");
   if(heading != null) {
   heading.style.left = x+10;
   heading.style.top = y-10;
 }
}
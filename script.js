
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
if(day==23&&month==3) document.getElementById("bday_reminder").innerHTML="Today is my birthday..!!"
else document.getElementById("bday_reminder").innerHTML=days+" days "+hours+" hours "+minutes+" minutes "+seconds+" seconds for my birthday!!"
setTimeout("countdown()",1000);
}
var heading = null;
function moveText(milliseconds) {
 window.setInterval("changePosition()", milliseconds);
}
parity=1;
function changePosition(parity) {
if(parity!=0){
 var x = event.clientX;
 var y = event.clientY;
 }
 else {
 var x=-10;
 var y=10;
 }
  heading = document.getElementById("bday_reminder");
   if(heading != null) {
   heading.style.left = x+10;
   heading.style.top = y-10;
 }
}
function set(){
if(parity!=0){
document.getElementById("tog").innerHTML="stick";
parity=0;}
else{
 document.getElementById("tog").innerHTML="unstick";
 parity=1;
}
}
function show1()
{
document.getElementById("about_me").style.visibility='visible';
document.getElementById("what_do").style.visibility='hidden';
document.getElementById("contact_me").style.visibility='hidden';
}
function show2()
{
document.getElementById("about_me").style.visibility='hidden';
document.getElementById("what_do").style.visibility='visible';
document.getElementById("contact_me").style.visibility='hidden';
}
function show3()
{
document.getElementById("what_do").style.visibility='hidden';
document.getElementById("about_me").style.visibility='hidden';
document.getElementById("contact_me").style.visibility='visible';
}

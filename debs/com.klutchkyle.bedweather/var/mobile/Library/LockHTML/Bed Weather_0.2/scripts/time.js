function startTime() {
var today = new Date();
var h = today.getHours();
var m = today.getMinutes();
var s = today.getSeconds();

m = checkTime(m);
s = checkTime(s);


if (twelvehour == true) {
if (h > 12){
h -= 12
}
if (m < 10){
m = "" + m
}
}  
    
if (h < 10) {
document.getElementById('hrsDiv').innerHTML = "0" + h;
} 
else {
document.getElementById('hrsDiv').innerHTML = h;
}
document.getElementById('m').innerHTML = m;
var t = setTimeout(startTime, 500);      
}
    
function checkTime(i) {
if (i < 10) {i = "0" + i};
return i;
}

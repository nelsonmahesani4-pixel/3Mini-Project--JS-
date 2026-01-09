var div=document.getElementById("div1");
console.log("div==>",div.childNodes[1].nodeType)
var counter=0;
for(var i=0; i<div.childNodes.length; i++){
if(div.childNodes[i].nodeType ==1){
    counter++;
}}
console.log("Number of element nodes in div1 is:", counter);    
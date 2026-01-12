// var doc=document.getElementById("div1").firstChildElementChild;
// console.log("==>div", doc);

// var lists=document.getElementsByTagName('li');
// // console.log("==>div", lists);
// var listLength=lists.length;
// for(var i =0; i<listLength; i++){
//     if(lists[i].innerHTML==""){
//         lists[i].innerHTML="Empty List Item";
//         console.log("==>empty li", lists[i]);}
// }

function wordChecker(){
  var input=document.getElementById("input").value;
//   console.log("==>input", input);
    var checkPalindrome=input.split('').reverse().join('');
    if(input==checkPalindrome){
        alert("The word is a palindrome");
    }   else{
        alert("The word is not a palindrome");
    }
}
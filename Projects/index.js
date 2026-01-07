function Increment() {
    var count = document.getElementById("count").innerText;
    count = parseInt(count) + 1;
    document.getElementById("count").innerText = count ;
}


function Decrement() {
    var count = document.getElementById("count").innerText;
    count = parseInt(count) -1;
    document.getElementById("count").innerText = count ;
}

function Reset() {
    document.getElementById("count").innerText = 0;


}
function ShowPassword() {
    var passwordField = document.getElementById("password");
    var passwordFieldType = passwordField.getAttribute("type");
    // passwordField.type = "text";
    if(passwordField === "password"){
        passwordField.setAttribute ("text","type");

    }else{
        passwordField.setAttribute("type", "password");


    }
}
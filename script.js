
function Increment() {
    let count = document.getElementById("count").innerText;
    count = parseInt(count) + 2;
    document.getElementById("count").innerText = count;

    console.log("count==>", count)
}

function Decrement() {
    let count = document.getElementById("count").innerText;
    count = parseInt(count) - 2;
    document.getElementById("count").innerText = count;
}

function Reset() {
    document.getElementById("count").innerText = 0;

}

function showPassWord() { 
    let passwordField = document.getElementById("password");
    let passFieldType = passwordField.getAttribute("type");
    if(passFieldType === "password") {
        passwordField.setAttribute("type", "text");
    } else {
        passwordField.setAttribute("type", "password");
    }
} 
function sumbitAction(){
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;  
    if(email === "" || password === ""){
        alert("Please fill in all fields.");
    } else {
        alert("Login successful!");
    }}

  // Odd, Even & Prime Checker
  function checkNumber() {
  let num = document.getElementById('number').value;
  let result = document.getElementById('result');

  if (num === '') {
    result.innerText = 'Please enter a number';
    return;
  }

  num = parseInt(num);

  if (num < 1) {
    result.innerText = 'Number must be greater than 0';
    return;
  }

  let isPrime = true;

  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) {
      isPrime = false;
      break;
    }
  }

  if (num % 2 === 0) {
    result.innerText = num + ' is Even';
  } else {
    result.innerText = num + ' is Odd';
  }

  if (isPrime) {
    result.innerText += ' and Prime';
  } else {
    result.innerText += ' and Not Prime';
  }
}

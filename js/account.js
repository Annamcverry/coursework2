var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

const accountButton = document.getElementById("accountButton");
console.log(accountButton);
accountButton.onclick = function () {
  modal.style.display = "block";
}
  span.onclick = function() {
  modal.style.display = "none";
}
  window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }//   console.log("test");
  // const firstName = document.getElementById("firstName");
  // const lastName = document.getElementById("lastName");
  // const email = document.getElementById("email");
  // const password = document.getElementById("password");
  // console.log("First Name: " + firstName.value);
  // console.log("Last Name: " + lastName.value);
  // console.log("Email: " + email.value);
  // console.log("Password: " + password.value);
  // localStorage.setItem("firstName", firstName.value);
  // localStorage.setItem("lastName", lastName.value);
  // localStorage.setItem("email", email.value);
  // localStorage.setItem("password", password.value);

  // window.location.href = "./Account.html";
};

document.body.onload = function () {
  var firstName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName");
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);


const accountDiv = document.getElementById("userAccount");
const body = document.createElement("div");
createAccount();



function createAccount(accountListing){

const accountDiv = document.getElementById("userAccount");
const body = document.createElement("div");
const nameText = document.createElement("p");
nameText.innerHTML = firstName;
nameText.className = "nameCSS";

const lastnameText = document.createElement("p");
lastnameText.innerHTML = lastName;
lastnameText.className = "lastnameCSS";

const emailText = document.createElement("p");
emailText.innerHTML = email;
emailText.className = "emailCSS";

const passwordText = document.createElement("p");
passwordText.innerHTML = password;
passwordText.className = "passwordCSS";

body.appendChild(nameText);
body.appendChild(lastnameText);
body.appendChild(emailText);
body.appendChild(passwordText);
accountDiv.appendChild(body);
return body;
}

//Form Validation
function validateName(){
  let x = document.forms["accountForm"]["firstName"].value;
  if(x == ""){
    alert("Name must be filled out")
  }
}

// //Tutorial new
let id = (id) => document.getElementById(id);
let classes = (classes) => document.getElementsByClassName(classes);

//then store the classes and ids inside these vars

let firstName = id("firstName"),
  lastName = id("lastName"),
  email = id("email"),
  password = id("password"),
  accountForm = id("form"),

  errorMsg = classes("error"),
  successIcon = classes("success-icon"),
  failureIcon = classes("failure-icon");

  //target form and add submit event listener
    accountForm.addEventListener("submit", (e) => {
      e.preventDefault();

    engine(firstName, 0, "Name cannot be blank");
    engine(lastName,1, "Name cannot be blank");
    engine(email, 2, "Email cannot be blank");
    engine(password, 3, "Password cannot be blank");

  })

  //create function to do form validation
  //trim removes extra white space
  let engine = (id, serial, message) => {
    if(id.value.trim() === ""){
      errorMsg[serial].innerHTML = message;
      id.style.border = "2px solic red";
      //icons
      failureIcon[serial].style.opacity = "1";
      successIcon[serial].style.opacity = "0";
    }
    else{
      errorMsg[serial].innerHTML = "";
      id.style.border = "2px solid green";
      //icons
      failureIcon[serial].style.opacity = "0";
      successIcon[serial].style.opacity = "1";
    }
  }
  };

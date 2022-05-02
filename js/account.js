const accountButton = document.getElementById("accountButton");
console.log(accountButton);
accountButton.onclick = function () {
  //   console.log("test");
  const firstName = document.getElementById("firstName");
  const lastName = document.getElementById("lastName");
  const email = document.getElementById("email");
  const password = document.getElementById("password");
  console.log("First Name: " + firstName.value);
  console.log("Last Name: " + lastName.value);
  console.log("Email: " + email.value);
  console.log("Password: " + password.value);
  localStorage.setItem("firstName", firstName.value);
  localStorage.setItem("lastName", lastName.value);
  localStorage.setItem("email", email.value);
  localStorage.setItem("password", password.value);

  window.location.href = "./Account.html";
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
};

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

body.appendChild(nameText);
body.appendChild(lastnameText);
body.appendChild(emailText);
accountDiv.appendChild(body);

// window.location.href = "./Account.html";

document.body.onload = function () {
  var firstName = localStorage.getItem("firstName");
  var lastName = localStorage.getItem("lastName");
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");
  var confirmPassword = localStorage.getItem("confirmPassword");
  console.log(firstName);
  console.log(lastName);
  console.log(email);
  console.log(password);
  console.log(confirmPassword);

  if (localStorage.getItem("accountCreated") == "true") {
    var modal = document.getElementById("accountSuccessModal");
    var span = document.getElementsByClassName("close")[0];

    modal.style.display = "block";

    // When the user clicks on <span> (x), close the modal
    span.onclick = function () {
      modal.style.display = "none";
    };

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    };
    localStorage.setItem("accountCreated", "false");
  }
};

const accountDiv = document.getElementById("userAccount");
const body = document.createElement("div");
// createAccount();

function createAccount(accountListing) {
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
function validateName() {
  let x = document.forms["accountForm"]["firstName"].value;
  if (x == "") {
    alert("Name must be filled out");
    return;
  }

  let email_address = document.forms["accountForm"]["email"].value;
  let email_regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  if (!email_address.match(email_regex)) {
    alert("Email is not formatted correctly.");
    return;
  }

  localStorage.setItem("accountCreated", "true");

  const firstName = document.forms["accountForm"]["firstName"].value;
  const lastName = document.forms["accountForm"]["lastName"].value;
  const email = document.forms["accountForm"]["email"].value;
  const password = document.forms["accountForm"]["password"].value;
  const confirmPassword =
    document.forms["accountForm"]["confirmPassword"].value;
  localStorage.setItem("firstName", firstName);
  localStorage.setItem("lastName", lastName);
  localStorage.setItem("email", email);
  localStorage.setItem("password", password);
  localStorage.setItem("confirmPassword", confirmPassword);
}

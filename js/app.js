const formButton = document.getElementById("search-btn");
console.log(formButton);
formButton.onclick = function () {
  //   console.log("test");
  const destination = document.getElementById("destination");
  const style = document.getElementById("stay-style");
  const checkInDate = document.getElementById("check-in");
  const checkOutDate = document.getElementById("check-out");
  const noOfPeople = document.getElementById("number-people");
  const price = document.getElementById("price");
  console.log("Destination " + destination.value);
  console.log("style: " + style.value);
  console.log("Check in date: " + checkInDate.value);
  console.log("Check out date: " + checkOutDate.value);
  console.log("Number of people: " + noOfPeople.value);
  console.log("price: " + price.value);
  
  localStorage.setItem("destination", destination.value);
  localStorage.setItem("style", style.value);
  localStorage.setItem("check-in", checkInDate.value);
  localStorage.setItem("check-out", checkOutDate.value);
  localStorage.setItem("number-people", noOfPeople.value);
  localStorage.setItem("price", price.value);

  window.location.href = "./FindYourStay.html";
};

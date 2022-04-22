const formButton = document.getElementById("formButton");
console.log(formButton);
formButton.onclick = function () {
  //   console.log("test");
  const checkInDate = document.getElementById("checkIn");
  const checkOutDate = document.getElementById("checkOut");
  const noOfPeople = document.getElementById("noOfPeople");
  const price = document.getElementById("price");
  console.log("Check out date: " + noOfPeople.value);
  console.log("Check in date: " + checkInDate.value);
  console.log("Check out date: " + checkOutDate.value);
  console.log("price: " + price.value);
  localStorage.setItem("noOfPeople", noOfPeople.value);
  localStorage.setItem("checkInDate", checkInDate.value);
  localStorage.setItem("checkOutDate", checkOutDate.value);
  localStorage.setItem("price", price.value);

  window.location.href = "./FindYourStay.html";
};

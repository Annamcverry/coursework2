const formButton = document.getElementById("formButton");
console.log(formButton);
formButton.onclick = function () {
  //   console.log("test");
  // window.location.href = "./FeaturedStays.html";
  const checkInDate = document.getElementById("checkIn");
  const checkOutDate = document.getElementById("checkOut");
  const noOfPeople = document.getElementById("noOfPeople");
  console.log("Check out date: " + noOfPeople.value);
  console.log("Check in date: " + checkInDate.value);
  console.log("Check out date: " + checkOutDate.value);
};

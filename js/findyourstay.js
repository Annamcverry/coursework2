document.body.onload = function () {
  var noOfPeople = localStorage.getItem("noOfPeople");
  var checkInDate = localStorage.getItem("checkInDate");
  var checkOutDate = localStorage.getItem("checkOutDate");
  var price = localStorage.getItem("price");
  var style = localStorage.getItem("style");
  console.log(noOfPeople);
  console.log(checkInDate);
  console.log(checkOutDate);
  console.log(price);
  console.log(style);

  // Prints out from form on homepage
  const anythingContainer = document.getElementById("anything");
  const body = document.createElement("div");
  // body.className can assign to a css file to make everything the same
  const noOfPeopleText = document.createElement("h4");
  noOfPeopleText.innerHTML = noOfPeople;
  noOfPeopleText.className = "example";

  const priceText = document.createElement("p");
  priceText.innerHTML = price;
  priceText.className = "priceCSS";
  // can move across in CSS

  //Last thing you do
  body.appendChild(noOfPeopleText);
  body.appendChild(priceText);
  anythingContainer.appendChild(body);
};

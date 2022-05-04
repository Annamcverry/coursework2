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

  const checkInDateText = document.createElement("p");
  checkInDateText.innerHTML = checkInDate;
  checkInDateText.className = "checkInDateCSS";

  const checkOutDateText = document.createElement("p");
  checkOutDateText.innerHTML = checkOutDate;
  checkOutDateText.className = "checkOutDateCSS";

  const noOfPeopleText = document.createElement("p");
  noOfPeopleText.innerHTML = noOfPeople;
  noOfPeopleText.className = "noOfPeopleCSS";

  const priceText = document.createElement("p");
  priceText.innerHTML = price;
  priceText.className = "priceCSS";
  // can move across in CSS

  const styleText = document.createElement("p");
  styleText.innerHTML = style;
  styleText.className = "styleCSS";

  //Last thing you do
  body.appendChild(checkInDateText);
  body.appendChild(checkOutDateText);
  body.appendChild(noOfPeopleText);
  body.appendChild(priceText);
  body.appendChild(styleText);
  anythingContainer.appendChild(body);
};

const HOLISTAY_DATA = [
  {
    price: "500",
    people: "2",
    style: "Bit of Both",
  },
  {
    price: "200",
    people: "1",
    style: "City Break",
  },
  {
    price: "100",
    people: "3",
    houseType: "Outdoor adventure",
  },
];




document.body.onload = function () {
  var destination = localStorage.getItem("destination");
  var style = localStorage.getItem("stay-style");
  var checkInDate = localStorage.getItem("check-in");
  var checkOutDate = localStorage.getItem("check-out");
  var noOfPeople = localStorage.getItem("number-people");
  var price = localStorage.getItem("price");
  console.log(destination);
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

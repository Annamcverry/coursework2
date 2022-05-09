const FAKE_HOLIDAY_DATA = [
  {
    price: "500",
    people: "2",
    style: "Bit of Both",
    url: "./Images/galway.jpg",
  },
  {
    price: "200",
    people: "1",
    style: "City Break",
    url: "./Images/belfast.jpg",
  },
  {
    price: "100",
    people: "3",
    style: "Outdoor Adventure",
    url: "./Images/armagh.jpg",
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
  // const anythingContainer = document.getElementById("anything");
  // const body = document.createElement("div");

  // body.className can assign to a css file to make everything the same

  // const checkInDateText = document.createElement("p");
  // checkInDateText.innerHTML = checkInDate;
  // checkInDateText.className = "checkInDateCSS";

  // const checkOutDateText = document.createElement("p");
  // checkOutDateText.innerHTML = checkOutDate;
  // checkOutDateText.className = "checkOutDateCSS";

  // const noOfPeopleText = document.createElement("p");
  // noOfPeopleText.innerHTML = noOfPeople;
  // noOfPeopleText.className = "noOfPeopleCSS";

  // const priceText = document.createElement("p");
  // priceText.innerHTML = price;
  // priceText.className = "priceCSS";
  // // can move across in CSS

  //   const styleText = document.createElement("p");
  //   styleText.innerHTML = style;
  //   styleText.className = "styleCSS";

  //   //Last thing you do
  //   body.appendChild(checkInDateText);
  //   body.appendChild(checkOutDateText);
  //   body.appendChild(noOfPeopleText);
  //   body.appendChild(priceText);
  //   body.appendChild(styleText);
  //   anythingContainer.appendChild(body);
  // };

  const anythingContainer = document.getElementById("root-container");
  const body = document.createElement("div");

  showListing(); //print everything that is inside list
};
function showListing() {
  const rootContianer = document.getElementById("data-container");
  const filteredList = FAKE_HOLIDAY_DATA.filter(
    (listing) =>
      listing.price == localStorage.getItem("price") &&
      listing.style == localStorage.getItem("style")
  );
  filteredList.forEach((listing) => {
    //console.log(listing)
    const createdListing = createListing(listing);
    rootContianer.appendChild(createdListing);
  });
}

function createListing(holidayListing) {
  const baseListing = document.createElement("div");
  const image = document.createElement("img");
  image.setAttribute("src", holidayListing.url);
  image.className = "listingImage";
  const style = document.createElement("p");
  style.innerHTML = "Style: " + holidayListing.style;
  const price = document.createElement("p");
  price.innerHTML = "Price: " + holidayListing.price;
  const people = document.createElement("p");
  people.innerHTML = "People: " + holidayListing.people;
  baseListing.appendChild(image);
  baseListing.appendChild(style);
  baseListing.appendChild(people);
  baseListing.appendChild(price);
  return baseListing;
}

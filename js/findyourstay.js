const FAKE_HOLIDAY_DATA = [
  {
    price: "500",
    people: "2",
    style: "Bit of Both",
    url: "./Images/galway.jpg",
    destination: "Galway",
  },
  {
    price: "200",
    people: "1",
    style: "City Break",
    url: "./Images/belfast.jpg",
    destination: "Belfast",
  },
  {
    price: "100",
    people: "3",
    style: "City Break",
    url: "./Images/armagh.jpg",
    destination: "Armagh",
  },
  {
    price: "100",
    people: "3",
    style: "City Break",
    url: "./Images/dublin.jpg",
    destination: "Dublin",
  },
  {
    price: "300",
    people: "4",
    style: "Bit of Both",
    url: "./Images/portrush.jpg",
    destination: "Portrush",
  },
  {
    price: "400",
    people: "5",
    style: "Outdoor Adventure",
    url: "./Images/Donegal.jpeg",
    destination: "Donegal",
  },
  {
    price: "500",
    people: "5",
    style: "Outdoor Adventure",
    url: "./Images/Centre-Parcs1.jpg",
    destination: "Centre Parcs",
  },
  {
    price: "200",
    people: "1",
    style: "City Break",
    url: "./Images/Derry.jpg",
    destination: "Derry/Londonderry",
  },
  {
    price: "300",
    people: "4",
    style: "Outdoor Adventure",
    url: "./Images/galway.jpg",
    destination: "Galway",
  },
  {
    price: "100",
    people: "2",
    style: "Outdoor Adventure",
    url: "./Images/portrush.jpg",
    destination: "Portrush",
  },
  {
    price: "300",
    people: "2",
    style: "City Break",
    url: "./Images/Cork.jpg",
    destination: "Cork",
  },
  {
    price: "500",
    people: "5",
    style: "Bit of Both",
    url: "./Images/Kerry.jpg",
    destination: "Kerry",
  },
  {
    price: "400",
    people: "4",
    style: "City Break",
    url: "./Images/Limerick.jpg",
    destination: "Limerick",
  },
  {
    price: "200",
    people: "2",
    style: "Bit of Both",
    url: "./Images/Donegal.jpeg",
    destination: "Donegal",
  },
  {
    price: "100",
    people: "1",
    style: "Bit of Both",
    url: "./Images/Belfast.jpg",
    destination: "Belfast",
  },
  {
    price: "100",
    people: "1",
    style: "Outdoor Adventure",
    url: "./Images/Donegal.jpeg",
    destination: "Donegal",
  },
  {
    price: "300",
    people: "3",
    style: "City Break",
    url: "./Images/Waterford.jpg",
    destination: "Waterford",
  },
  {
    price: "200",
    people: "4",
    style: "Bit of Both",
    url: "./Images/Athlone.jpg",
    destination: "Athlone",
  },
  {
    price: "200",
    people: "4",
    style: "Bit of Both",
    url: "./Images/portrush.jpg",
    destination: "Portrush",
  },
  {
    price: "400",
    people: "4",
    style: "City Break",
    url: "./Images/dublin.jpg",
    destination: "Dublin",
  },
  {
    price: "400",
    people: "4",
    style: "City Break",
    url: "./Images/Derry.jpg",
    destination: "Derry/Londonderry",
  },
  {
    price: "200",
    people: "2",
    style: "Outdoor Adventure",
    url: "./Images/Centre-Parcs1.jpg",
    destination: "Centre Parcs",
  },
  {
    price: "100",
    people: "3",
    style: "City Break",
    url: "./Images/galway.jpg",
    destination: "Galway",
  },
  {
    price: "500",
    people: "5",
    style: "Bit of Both",
    url: "./Images/Donegal.jpg",
    destination: "Donegal",
  },
  {
    price: "500",
    people: "5",
    style: "Bit of Both",
    url: "./Images/Waterford.jpg",
    destination: "Waterford",
  },
  {
    price: "100",
    people: "2",
    style: "Outdoor Adventure",
    url: "./Images/Centre-Parcs1.jpg",
    destination: "Centre Parcs",
  },
  {
    price: "100",
    people: "1",
    style: "City Break",
    url: "./Images/belfast.jpg",
    destination: "Belfast",
  },
  {
    price: "100",
    people: "1",
    style: "Outdoor Adventure",
    url: "./Images/Cavan.jpg",
    destination: "Cavan",
  },
];

document.body.onload = function () {
  // var destination = localStorage.getItem("destination");
  var style = localStorage.getItem("stay-style");
  var checkInDate = localStorage.getItem("check-in");
  var checkOutDate = localStorage.getItem("check-out");
  var noOfPeople = localStorage.getItem("number-people");
  var price = localStorage.getItem("price");
  // console.log(destination);
  console.log(noOfPeople);
  console.log(checkInDate);
  console.log(checkOutDate);
  console.log(price);
  console.log(style);

  showListing(); //print everything that is inside list
};
function showListing() {
  const rootContainer = document.getElementById("data-container");

  const datesText = document.createElement("p");
  datesText.className = "datesTextStyle";
  var checkInDate = localStorage.getItem("check-in");
  var checkOutDate = localStorage.getItem("check-out");
  datesText.innerHTML =
    "Check-in Date: " + checkInDate + ", Check-out Date: " + checkOutDate;
  rootContainer.appendChild(datesText);
  const filteredList = FAKE_HOLIDAY_DATA.filter(
    (listing) =>
      listing.price == localStorage.getItem("price") &&
      listing.style == localStorage.getItem("style")
  );
  filteredList.forEach((listing) => {
    //console.log(listing)
    const createdListing = createListing(listing);
    rootContainer.appendChild(createdListing);
  });
}

var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

function createListing(holidayListing) {
  const baseListing = document.createElement("div");
  baseListing.className =
    "hol-listing"; /*added to see if we can call the listing as a whole in the css*/
  const image = document.createElement("img");
  image.setAttribute("src", holidayListing.url);
  image.className = "listingImage";
  const destination = document.createElement("h1");
  destination.innerHTML = "Destination: " + holidayListing.destination;
  destination.className = "destinationCSS";
  const style = document.createElement("h1");
  style.innerHTML = "Style: " + holidayListing.style;
  style.className = "styleCSS";
  const price = document.createElement("h1");
  price.innerHTML = "Price: " + holidayListing.price;
  const people = document.createElement("h1");
  people.innerHTML = "People: " + holidayListing.people;
  const button = document.createElement("button");
  button.className = "hol-btn";
  button.innerHTML = "Book Now";
  button.onclick = function () {
    modal.style.display = "block";
  };
  span.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  baseListing.appendChild(image);
  baseListing.appendChild(style);
  baseListing.appendChild(people);
  baseListing.appendChild(price);
  baseListing.appendChild(destination);
  baseListing.appendChild(button);
  return baseListing;
}

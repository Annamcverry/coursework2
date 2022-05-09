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
    url: "./Images/portush.jpg",
    destination: "Portrush",
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
  const destination = document.createElement("p");
  destination.innerHTML = "Destination: " + holidayListing.destination;
  destination.className = "destinationCSS";
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
  baseListing.appendChild(destination);
  return baseListing;
}

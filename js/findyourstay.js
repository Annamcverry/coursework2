document.body.onload = function () {
    var noOfPeople = localStorage.getItem("noOfPeople");
    var checkInDate = localStorage.getItem("checkInDate");
    var checkOutDate = localStorage.getItem("checkOutDate");
    var price = localStorage.getItem("price");
    console.log(noOfPeople);
    console.log(checkInDate);
    console.log(checkOutDate);
    console.log(price);
  };
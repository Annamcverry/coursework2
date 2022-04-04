document.body.onload = function () {
  var noOfPeople = localStorage.getItem("noOfPeople");
  var checkInDate = localStorage.getItem("checkInDate");
  var checkOutDate = localStorage.getItem("checkOutDate");
  console.log(noOfPeople);
  console.log(checkInDate);
  console.log(checkOutDate);
};

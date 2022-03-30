'use strict'
const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme')

    var className = document.body.className;
    if(className == "light-theme") {
        this.textContent = "Dark";
    }
    else {
        this.textContent = "Light";
    }

    console.log('current class name: ' + className);
    
});


var myRange = document.querySelector("#myRange");
      var myValue = document.querySelector("#myValue");
      var myUnits = "myUnits";
      var off =
        myRange.offsetWidth / (parseInt(myRange.max) - parseInt(myRange.min));
      var px =
        (myRange.valueAsNumber - parseInt(myRange.min)) * off -
        myValue.offsetParent.offsetWidth / 2;

      myValue.parentElement.style.left = px + "px";
      myValue.parentElement.style.top = myRange.offsetHeight + "px";
      myValue.innerHTML = myRange.value + " " + myUnits;

      myRange.oninput = function () {
        let px =
          (myRange.valueAsNumber - parseInt(myRange.min)) * off -
          myValue.offsetWidth / 2;
        myValue.innerHTML = myRange.value + " " + myUnits;
        myValue.parentElement.style.left = px + "px";
      };
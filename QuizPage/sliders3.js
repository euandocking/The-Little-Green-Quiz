var slider1 = document.getElementById("othersThrown");
var output1 = document.getElementById("print-othersThrown");
output1.innerHTML = slider1.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider1.oninput = function() {
  output1.innerHTML = this.value;
}

var slider2 = document.getElementById("othersRecycled");
var output2 = document.getElementById("print-othersRecycled");
output2.innerHTML = slider2.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider2.oninput = function() {
  output2.innerHTML = this.value;
}

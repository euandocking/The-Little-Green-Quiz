function getName(nameFromInput) {
  alert('Hello, ' + nameFromInput + '!'); //show user's name from input
  window.location.assign("questions1.html"); //go to the first question
}

function nextQuestions() {
  //Stores the quantity and weight of the different waste
  var waste = [
    {value:document.getElementById('bagsThrown').value, weight:0.005},
    {value:document.getElementById('cupsThrown').value, weight:0.400},
    {value:document.getElementById('strawsThrown').value, weight:0.00042},
    {value:document.getElementById('plBottlesThrown').value, weight:0.0127},
    {value:document.getElementById('containersThrown').value, weight:0.454},
    {value:document.getElementById('cutleryThrown').value, weight:0.0052},
    {value:document.getElementById('plasticOtherThrown').value, weight:1}
  ];

  //Stores the quantity and weight of the different recycled materials
  var recycle = [
    {value:document.getElementById('bagsRecycled').value, weight:0.005},
    {value:document.getElementById('cupsRecycled').value, weight:0.400},
    {value:document.getElementById('strawsRecycled').value, weight:0.00042},
    {value:document.getElementById('plBottlesRecycled').value, weight:0.0127},
    {value:document.getElementById('containersRecycled').value, weight:0.454},
    {value:document.getElementById('cutleryRecycled').value, weight:0.0052},
    {value:document.getElementById('plasticOtherRecycled').value, weight:1}
  ];

  //Initialise the totals to 0
  window.localStorage.totalWaste = 0;
  window.localStorage.totalRecycled = 0;

  //If the browser supports local storage
  if (typeof(Storage) !== "undefined") {
    //Calculate the total waste for page 1
    window.localStorage.totalWaste = addWasteKG(waste, parseInt(window.localStorage.totalWaste, 10));

    //Calculate the total recycled for page 1
    window.localStorage.totalRecycled = addWasteKG(recycle, parseInt(window.localStorage.totalRecycled, 10));
  }

  window.location.assign("questions2.html"); //go to the second set of questions
}

function finalQestion() {

  //Stores the quantity and weight of the different waste
  var waste = [
    {value:document.getElementById('cansThrown').value, weight:0.0142},
    {value:document.getElementById('metalOtherThrown').value, weight:1},
    {value:document.getElementById('foodThrown').value, weight:1},
    {value:document.getElementById('paperThrown').value, weight:1},
    {value:document.getElementById('glBottlesThrown').value, weight:1},
    {value:document.getElementById('jarsThrown').value, weight:0.170},
    {value:document.getElementById('glassOtherThrown').value, weight:1}
  ];

  //Stores the quantity and weight of the different recycled materials
  var recycle = [
    {value:document.getElementById('cansRecycled').value, weight:0.0142},
    {value:document.getElementById('metalOtherRecycled').value, weight:1},
    {value:document.getElementById('foodRecycled').value, weight:1},
    {value:document.getElementById('paperRecycled').value, weight:1},
    {value:document.getElementById('glBottlesRecycled').value, weight:1},
    {value:document.getElementById('jarsRecycled').value, weight:0.170},
    {value:document.getElementById('glassOtherRecycled').value, weight:1}
  ];

  //If the browser supports local storage
  if (typeof(Storage) !== "undefined") {
    //Calculate the total waste for page 1
    window.localStorage.totalWaste = addWasteKG(waste, parseInt(window.localStorage.totalWaste, 10));

    //Calculate the total recycled for page 1
    window.localStorage.totalRecycled = addWasteKG(recycle, parseInt(window.localStorage.totalRecycled, 10));
  }

  window.location.assign("questions3.html"); //go to the third set of questions
}

function goToResults() {
  //Stores the quantity and weight of the different waste
  var waste = [
    {value:document.getElementById('othersThrown').value, weight:1},
  ];

  //Stores the quantity and weight of the different recycled materials
  var recycle = [
    {value:document.getElementById('othersRecycled').value, weight:1},
  ];

  //If the browser supports local storage
  if (typeof(Storage) !== "undefined") {
    //Calculate the total waste for page 1
    window.localStorage.totalWaste = addWasteKG(waste, parseInt(window.localStorage.totalWaste, 10));

    //Calculate the total recycled for page 1
    window.localStorage.totalRecycled = addWasteKG(recycle, parseInt(window.localStorage.totalRecycled, 10));
  }

  window.location.assign("../Result Page/result.html"); //go to the results page
}

function addWasteKG(items, total)
{
  for (var i = 0; i < items.length; i++) {
    quantity = items[i].value;
    weight = items[i].weight;
    total += (quantity * weight);
  }
  return total;
}

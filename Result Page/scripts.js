//Written by Sameer Al Harbi
//Version 3.5, Nov 2019

var value1=0;//bar1 -> value1 etc..
var value2=0;
var value3=0;

var bar2Color='#EFBC9B';
var bar3Color='#EFBC9B'

var weightInKilo=window.localStorage.totalWaste*52;
var totalRecycled=window.localStorage.totalRecycled*52;
var percentageRecycled;

var averageRecycleRate=0.355;
var weightInKiloPerHouseHoldAverage=930;
var dundeeHouseholds=69193;//all data last updated 2017

weightInKilo = weightInKilo - totalRecycled;

if(weightInKilo>=weightInKiloPerHouseHoldAverage)//more than average
{
  value2 = weightInKilo/weightInKiloPerHouseHoldAverage-1;
  value2 = Math.round(value2*100)/100;
  document.getElementById("landfillHeader").innerHTML = "Trash sent to landfill (% Above Average)";
  document.getElementById("landfill").innerHTML = "You are sending "+value2*100+"% more trash than the average household!"+" Yikes! Thats a lot of waste you are sending to a landfill! Waste send to landfills can rot releasing harmful gasses that contribute to global warming, take up space and damage natural beauty and some wastes such as plastics take centuries to decompose while metals may leach into the earth and water. Do consider useing less reusable items.";
  bar2Color='#ff0000'
}
if(weightInKilo<weightInKiloPerHouseHoldAverage)//less than average
{
  value2 = 1-weightInKilo/weightInKiloPerHouseHoldAverage;
  value2 = Math.round(value2*100)/100;
  document.getElementById("landfillHeader").innerHTML = "Trash sent to landfill (% Below Average)";
  document.getElementById("landfill").innerHTML = "You are sending "+value2*100+"% less trash than the average household! Well Done!";
}

percentageRecycled = totalRecycled/weightInKilo;//calculate percentage

if(percentageRecycled>averageRecycleRate)//Above Average
{
  value3 = percentageRecycled/averageRecycleRate-1;
  value3 = Math.round(value3*100)/100;
  document.getElementById("recycleHeader").innerHTML = "Percentage Recycled (% Above Average)";
  document.getElementById("recycled").innerHTML = "You are recycling "+value3*100+"% more than the average household! Well done!"
}
if(percentageRecycled<=averageRecycleRate)//Below Average
{
  value3 = 1-percentageRecycled/averageRecycleRate;
  value3 = Math.round(value3*100)/100;
  document.getElementById("recycleHeader").innerHTML = "Percentage Recycled (% Below Average)";
  document.getElementById("recycled").innerHTML = "You are recycling "+value3*100+"% less than the average household in dundee! Yikes! Please consider using less unrecyclable items as unrecyled trash usually ends up in landfills and uses up precious natural resources";
  bar3Color='#ff0000'
}

value1 = (value2 + value3)/2;

//Main bar
var bar = new ProgressBar.Circle("#mainBar", {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#EFBC9B',
  trailColor: '#000000',
  trailWidth: 1,
  svgStyle: null

});
//second sub bar
var bar2 = new ProgressBar.Circle("#bar2", {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: bar2Color,
  trailColor: '#000000',
  trailWidth: 1,
  svgStyle: null
});
//third sub bar
var bar3 = new ProgressBar.Circle("#bar3", {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: bar3Color,
  trailColor: '#000000',
  trailWidth: 1,
  svgStyle: null
});

bar3.animate(value3);
bar2.animate(value2);
bar.animate(value1); // Number from 0.0 to 1.0
bar.setText(value1*100+"%");
bar2.setText(value2*100);
bar3.setText(value3*100);

bar.text.style.fontSize = '6rem';
bar.text.style.color = "#EFBC9B";

//Written by Sameer Al Harbi
//Version 2, Nov 2019

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
  color: '#EFBC9B',
  trailColor: '#000000',
  trailWidth: 1,
  svgStyle: null
});
//third sub bar
var bar3 = new ProgressBar.Circle("#bar3", {
  strokeWidth: 6,
  easing: 'easeInOut',
  duration: 1400,
  color: '#EFBC9B ',
  trailColor: '#000000',
  trailWidth: 1,
  svgStyle: null
});

bar3.animate(0.19);
bar2.animate(0.78);
bar.animate(0.65); // Number from 0.0 to 1.0
bar.setText("65%");
bar2.setText("78%");
bar3.setText("19%");


bar.text.style.fontSize = '6rem';
bar.text.style.color = "#EFBC9B";

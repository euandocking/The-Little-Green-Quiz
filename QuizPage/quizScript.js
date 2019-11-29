function getName(nameFromInput) {
  alert('Hello, ' + nameFromInput + '!'); //show user's name from input
  window.location.assign("questions1.html"); //go to the first question
}

function nextQuestions() {
  window.location.assign("questions2.html"); //go to the second set of questions
}

function finalQestion() {
  window.location.assign("questions3.html"); //go to the third set of questions
}

function goToResults() {
  window.location.assign("../Result Page/result.html"); //go to the results page
}

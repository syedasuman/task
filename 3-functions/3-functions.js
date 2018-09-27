let intervalId;
function actionCorrect(){
    document.querySelector("header").innerHTML = "CORRECT";
    document.querySelector("header").classList.toggle("success-text", true);
    document.querySelector("header").classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector("body").style["background-color"] = color;
    }, 500);
}

function actionIncorrect(){
   document.querySelector("header").innerHTML = "INCORRECT";
    document.querySelector("header").classList.toggle("success-text", false);
    document.querySelector("header").classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector("body").style["background-color"] = color;
    }, 500);
}

function submitMathAns() {
  const answer = parseInt(document.querySelector("#math input").value);
  if (answer === 4) {
    // correct
  actionCorrect();
  } else {
    // incorrect
   actionIncorrect();
  }
}

function submitEnglishAns() {
  const answer = document.querySelector("#english input[name='webdev']:checked")
    .value;
  if (answer === "website") {
    // correct
   actionCorrect();
  } else {
    // incorrect
    actionIncorrect();
  }
}

function submitScienceAns() {
  const answer = document.querySelector("#science input").value;
  if (answer.toLowerCase() === "blue") {
    // correct
   actionCorrect();
  } else {
    // incorrect
    actionIncorrect();
  }
}
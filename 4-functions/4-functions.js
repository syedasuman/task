let intervalId;

function markCorrect(subject){
   document.querySelector("header").innerHTML = "CORRECT";
    document.querySelector(`#${subject} h1`).classList.toggle("success-text", true);
    document.querySelector(`#${subject} h1`).classList.toggle("error-text", false);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#28a745";
      if (counter++ % 2) {
        color = "#1DE9B6";
      }
      document.querySelector(`section#${subject}`).style["background-color"] = color;
    }, 500);
}

function markIncorrect(subject){
  document.querySelector("header").innerHTML = "INCORRECT";
    document.querySelector(`#${subject} h1`).classList.toggle("success-text", false);
    document.querySelector(`#${subject} h1`).classList.toggle("error-text", true);
    let counter = 0;
    clearInterval(intervalId);
    intervalId = setInterval(function() {
      let color = "#FF3D00";
      if (counter++ % 2) {
        color = "#BF360C";
      }
      document.querySelector(`section#${subject}`).style["background-color"] = color;
    }, 500);
}

function submitMathAns() {
  const answer = parseInt(document.querySelector("#math input").value);
  if (answer === 4) {
    // correct
    markCorrect("math");
   
  } else {
    // incorrect
     markIncorrect("math");
  }
}

function submitEnglishAns() {
  const answer = document.querySelector("#english input[name='webdev']:checked")
    .value;
  if (answer === "website") {
    // correct
    markCorrect("english");
    
  } else {
    // incorrect
     markIncorrect("english");
  }
}

function submitScienceAns() {
  const answer = document.querySelector("#science input").value;
  if (answer.toLowerCase() === "blue") {
    // correct
   markCorrect("science");
  } else {
    // incorrect
    markIncorrect("science");
  }
}
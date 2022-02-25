let currentQuestion = 1;

const moveToNextStep = () => {
  document.getElementById("page" + currentQuestion).scrollIntoView(false);
};

//this function is being called from timer.js file in onTimesUp function
const incQue = () => {
  if (currentQuestion === 5) {
    window.location.href = "../result/result.html";
  } else {
    currentQuestion++;
    moveToNextStep();
    startTimer();
  }
};

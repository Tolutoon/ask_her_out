function startQuestions() {
    document.getElementById("questions").style.display = "block";
  }
  
  function answerYes() {
    document.getElementById("questions").style.display = "none";
      document.getElementById("que").style.display = "none";
      document.getElementById("questions2").style.display = "none";
      document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "I believe in love at first sight too! Safe to now say we are in a relationship? I love you Julia";
    showConfetti()
}
  
  function answerNo() {
    document.getElementById("questions").style.display = "none";
    document.getElementById("questions2").style.display = "none";
    document.getElementById("que").style.display = "none";
    document.getElementById("init").innerText = "YEY YEY 🎉🎉🎉";
    document.getElementById("message").style.display = "block";
    document.getElementById("messageText").innerText = "No worries, love takes time. But can we spend some time together and see if something beautiful blossoms?";
    showConfetti()

}

function triggerSecondQuestion() {
  document.getElementById("questions2").style.display = "block";
  document.getElementById("questions").style.display = "none";
}
  
// Function to show confetti
function showConfetti() {
    const confettiSettings = {
      target: 'confetti-canvas',
      respawn: true,
      colors: ['#ff0000', '#00ff00', '#0000ff'], 
    };
  
    const confetti = new ConfettiGenerator(confettiSettings);
    confetti.render();
    setTimeout(() => {
      confetti.clear();
    }, 5000);
  }
  

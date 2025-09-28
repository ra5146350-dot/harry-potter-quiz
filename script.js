function checkAnswer(answer) {
  const result = document.getElementById("result");
  if (answer === "Ron") {
    result.textContent = "✅ Correct! Ron is Harry's best friend.";
    result.style.color = "green";
  } else {
    result.textContent = "❌ Wrong! Try again.";
    result.style.color = "red";
  }
}
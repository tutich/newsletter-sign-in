const emailInput = document.getElementById("email");

const subscribeButton = document.getElementById("subscribe");
const dismissButton = document.getElementById("dismiss");

const card1 = document.querySelector(".card-1");
const card2 = document.querySelector(".card-2");

const emailDisplay = document.querySelector(".email");

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

// validate
subscribeButton.addEventListener("click", (event) => {
    event.preventDefault();

  const email = emailInput.value.trim();
  const parent = emailInput.parentElement;
  const errorMessage = parent.querySelector(".error");

  if (!isValidEmail(email)) {
    emailInput.style.borderColor = "hsl(4, 100%, 67%)";
    errorMessage.innerText = "valid email required";
    errorMessage.style.color = "hsl(4, 100%, 67%)";
  } else {
    emailInput.style.borderColor = " ";
    errorMessage.innerText = "";

    card1.style.display = "none";
    card2.style.display = "flex";
    emailDisplay.textContent = email;
  }
});


dismissButton.addEventListener("click", () => {
    card1.style.display = "flex";
    card2.style.display = "none";
})

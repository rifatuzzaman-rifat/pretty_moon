// Object to store passwords and their corresponding websites
const passwordRedirectMap = {
  "orpa": "/orpa.html",
  "taiyba": "/taiyba.html",
  "nuha": "/nuha.html",
  "maria":"/maria.html",
  "rifat":"/rifat.html",
  "tabassum":"/tabassum.html",
  "a.fattah":"a.fattah.html",
  "ankhi":"/ankhi.html",
};

// Function to validate the password and redirect to the corresponding website
function validatePassword() {
  var password = document.getElementById("password").value;

  // Check if the entered password exists in the passwordRedirectMap
  if (password in passwordRedirectMap) {
    // Redirect to the corresponding website
    window.location.href = passwordRedirectMap[password];
  } else {
    // Display error message if the password is incorrect
    var errorMessage = document.getElementById("errorMessage");
    errorMessage.textContent = "Incorrect password. Please try again.";
  }
}

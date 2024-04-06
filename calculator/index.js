
document.addEventListener("DOMContentLoaded", function () {
  const calculateButton = document.getElementById("calculateButton");
  const resultElement = document.getElementById("result");

  calculateButton.addEventListener("click", function () {
    const number1 = parseFloat(document.getElementById("number1").value);
    const number2 = parseFloat(document.getElementById("number2").value);
    const operation = document.getElementById("operation").value;

    if (isNaN(number1) || isNaN(number2)) {
      showAlert("danger", "Please enter valid numbers.");
      return;
    }

    if (operation === "divide" && number2 === 0) {
      showAlert("danger", "Cannot divide by zero.");
      return;
    }

    let result;
    switch (operation) {
      case "add":
        result = number1 + number2;
        break;
      case "subtract":
        result = number1 - number2;
        break;
      case "multiply":
        result = number1 * number2;
        break;
      case "divide":
        result = number1 / number2;
        break;
      default:
        result = "Invalid operation";
    }

    showAlert("success", `Result: ${result}`);
  });

  function showAlert(type, message) {
    const alertDiv = document.createElement("div");
    alertDiv.classList.add("alert", `alert-${type}`, "mt-3");
    alertDiv.setAttribute("role", "alert");
    alertDiv.textContent = message;
    resultElement.innerHTML = '';
    resultElement.appendChild(alertDiv);
  }
});

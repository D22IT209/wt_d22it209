function calculator() {
    while (true) {
      var num1 = parseFloat(prompt("Enter the first number:"));
      var operator = prompt("Enter the operator (+, -, *, /):");
      var num2 = parseFloat(prompt("Enter the second number:"));
        if (operator === "+") {
        alert(num1 + num2);
      } else if (operator === "-") {
        alert(num1 - num2);
      } else if (operator === "*") {
        alert(num1 * num2);
      } else if (operator === "/") {
        alert(num1 / num2);
      } else {
        alert("Invalid operator. Please enter a valid operator (+, -, *, /).");
      }
     var again = prompt("Do you want to calculate again? (yes/no)");
      if (again === "no") {
        break;
      }
    } 
}

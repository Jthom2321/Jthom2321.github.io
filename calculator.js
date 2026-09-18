// Runs the input input loop and builds the results table
var results = [];

document.write("<table>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {
  var xInput = prompt("Enter the first number (x):");
  if (xInput === null) break;

  var opInput = prompt("Enter an operator (+, -, *, /, %):");
  if (opInput === null) break;

  var yInput = prompt("Enter the second number (y):");
  if (yInput === null) break;

  var x = parseFloat(xInput);
  var y = parseFloat(yInput);
  var result;

  if (isNaN(x) || isNaN(y)) {
    result = "Error: not a number";
  } else if (opInput === "+") {
    result = x + y;
  } else if (opInput === "-") {
    result = x - y;
  } else if (opInput === "*") {
    result = x * y;
  } else if (opInput === "/") {
    result = x / y;
  } else if (opInput === "%") {
    result = x % y;
  } else {
    result = "invalid operator";
  }

  document.write("<tr><td>" + xInput + "</td><td>" + opInput + "</td><td>" + yInput + "</td><td>" + result + "</td></tr>");

  if (typeof result === "number" && !isNaN(result)) {
    results.push(result);
  }
}

document.write("</table>");

// Builds the summary table from valid results only
document.write("<table>");
document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");

if (results.length > 0) {
  var min = Math.min.apply(null, results);
  var max = Math.max.apply(null, results);
  var total = results.reduce(function (sum, val) { return sum + val; }, 0);
  var avg = total / results.length;

  document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg.toFixed(2) + "</td><td>" + total + "</td></tr>");
} else {
  document.write("<tr><td colspan='4'>No valid results</td></tr>");
}

document.write("</table>");

function myFunction() {
  let name = document.getElementById("text-name").value;
  document.querySelector(".result").innerHTML = name;
}

function add() {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);
  let operator = document.getElementById("operation").value;

  switch (operator) {
    case "+": {
      result = num1 + num2;
      break;
    }

    case "-": {
      result = num1 - num2;
      break;
    }
  }

  document.querySelector(".addreslt").innerHTML = result;
}

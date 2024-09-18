function adding() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    var result = number1 + number2;
    document.getElementById("result").innerHTML = String(result);
    document.getElementById("result").style.color = result < 0 ? "red" : "black";
}

function subtracting() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    var result = number1 - number2;
    document.getElementById("result").innerHTML = String(result);
    document.getElementById("result").style.color = result < 0 ? "red" : "black";
}

function multiplying() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    var result = number1 * number2;
    document.getElementById("result").innerHTML =  String(result);
    document.getElementById("result").style.color = result < 0 ? "red" : "black";
}

function dividing() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    var result = number1 / number2;
    document.getElementById("result").innerHTML = String(result);
    document.getElementById("result").style.color = result < 0 ? "red" : "black";
}

function powerto() {
    let num1 = document.getElementById("num1").value;
    let num2 = document.getElementById("num2").value;
    let number1 = Number(num1);
    let number2 = Number(num2);
    var result = 1;
    for (var i = 0; i < number2; i++) {
    result *= number1;
    }
    document.getElementById("result").innerHTML = String(result);
    document.getElementById("result").style.color = result < 0 ? "red" : "black";
}

function resetting() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("result").style.color = "black";
}
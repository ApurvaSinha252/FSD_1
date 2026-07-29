let a = parseInt(prompt("Enter first number"));
let b = parseInt(prompt("Enter second number"));
let operator = prompt("Enter what operation you want to perform (+,-,*,/,%)");
if(operator == "+"){
    alert("The sum is " + (a+b));
}
if (operator == '-'){
    alert("The difference is " + (a-b));
}
if (operator == '*'){
    alert("The product is " + (a*b));
}
if (operator == '/'){
    alert("The quotient is " + (a/b));
}
if (operator == '%'){
    alert("The remainder is " + (a%b));
}

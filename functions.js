function multiply(a,b)
{
    return a*b;
}
let result = multiply (3,4);
document.write("THE MULTIPLICATION of 3 and 4 IS: " + result + "<br>");

function mult()
{
    let c=parseInt(prompt("Enter the first number : "));
    let d=parseInt(prompt("Enter the second number : "));
    return c*d;
}
let res=mult();
alert("THE MULTIPLICATION using function and taking input from user IS: " + res);
document.write("THE MULTIPLICATION using function and taking input from user IS: " + res);
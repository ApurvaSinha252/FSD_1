let name=prompt("Enter your name : ");
let roll=prompt("Enter your roll number : ");
let n=parseInt(prompt("Enter number of subjects : "));
let marks=[];
for(let i=0 ; i<n ;i++)
{
    let m=parseFloat(prompt("Enter the marks of subject " + (i+1) + " : "));
    marks.push(m);
}
function total()
{
    let total=0;
    for(let i=0 ; i<n ; i++)
    {
        total = total + marks[i];
    }
    return total;
}
let totalmarks = total();
let percentage = (totalmarks/(n*100))*100;
function grade()
{
    if(percentage >= 90)
    {
        return "A+";
    }
    else if(percentage >= 80)
    {
        return "A";
    }
    else if(percentage >= 70)
    {
        return "B";
    }
    else if(percentage >= 60)
    {
        return "C";
    }
    else if(percentage >= 50)
    {
        return "D";
    }
    else
    {
        return "F";
    }
}
let finalgrade = grade();
alert("Name : " + name +
      "\nRoll Number : " + roll +
      "\nTotal Marks : " + totalmarks +
      "\nPercentage : " + percentage +
      "\nGrade : " + finalgrade);
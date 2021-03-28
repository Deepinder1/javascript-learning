// program to find the largest among three numbers
var input1 = prompt("Enter the 1st age:")
var input2 = prompt("Enter the 2nd age:")
var input3 = prompt("Enter the 3rd age:")
const num1 = parseFloat(input1)
const num2 = parseFloat(input2)
const num3 = parseFloat(input3)


let largestNumber;
let smallestNumber;

if (num1 >= num2 && num1 >= num3){
    largestNumber = num1;
    smallestNumber = (num2 < num3) ? num2 : num3
    alert("The smallest age is " +smallestNumber)
}
else if(num2 >= num1 && num2 >= num3){
    largestNumber = num2;
    smallestNumber = (num1 < num3) ? num1 : num3
    alert("The smallest age is " +smallestNumber)
}
else{
    largestNumber = num3;
    smallestNumber = (num1 < num2) ? num1 : num2
    alert("The smallest age is " +smallestNumber)
}

alert("The largest age is " +largestNumber)
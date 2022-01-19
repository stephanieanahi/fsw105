var readlineSync = require('readline-sync');

 

var firstNum = readlineSync.questionInt("Please enter first number: ");

var secondNum = readlineSync.questionInt("Please enter second number: ");

var userOperation = readlineSync.question("please enter the operation to perform (add, sub, mul, div): ");

 

function myAddFunction(a, b){

  return a + b;

}

function mySubtractionFunction(a, b){

    return a - b;

  }

 

function myMultiplicationFunction(a, b){

    return a * b;

  }

 

function myDivisionFunction(a, b){

    return a / b;

  }

function myCustomCalculator(num1, num2, operation){

    if (operation == "add"){

        console.log("addition of " + num1 + " with " + num2 + " returns: " + myAddFunction(num1, num2));

    } else if (operation == "sub"){

        console.log("subtraction of " + num1 + " with " + num2 + " returns: " + mySubtractionFunction(num1, num2));

    } else if (operation == "mul"){

        console.log("multiplication of " + num1 + " with " + num2 + " returns: " + myMultiplicationFunction(num1, num2));


    }else if (operation == "div"){

      console.log("division of " + num1 + "with"+ num2 + " returns: " + myDivisionFunction(num1, num2));

    }else{

        console.log("Invalid operation, please try again!");

    }

}
myCustomCalculator(firstNum, secondNum, userOperation);


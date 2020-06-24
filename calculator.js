var firstNumber = document.getElementById('first-number');
var secondNumber = document.getElementById('second-number');
var operator = document.getElementById('operator');
var result = document.getElementById('result');

var firstNumbervalue = "";
var secondNumbervalue = "";
var opValue = "";
var resultValue = "";


//Button Click to acquire value
  $(".number").on("click", function() {
    if (opValue === "") {
    var numClicked = $(this).val();
    firstNumbervalue = firstNumbervalue + numClicked;
    console.log(firstNumbervalue);
    firstNumber.innerHTML = firstNumbervalue;
    }
    else {
    var secondnumClicked = $(this).val();
    secondNumbervalue = secondNumbervalue + secondnumClicked;
    console.log(secondNumbervalue);
    secondNumber.innerHTML = secondNumbervalue;
    }
  })

  $(".operator").on("click", function() {
    var opClicked = $(this).val();
    opValue = opClicked;
    console.log(opValue);
    operator.innerHTML = opValue;
  })

//   $(".number").on("click", function() {
//     var secnumClicked = $(this).val();
//     firstNumbervalue = firstNumbervalue + numClicked;
//     console.log(firstNumbervalue);
//     firstNumber.innerHTML = firstNumbervalue;
//   })


  $(".equals").on("click", function() {
    if (opClicked === "plus") {
        resultValue = parseInt(firstNumbervalue) + parseInt(secondNumbervalue);
        console.log(resultValue);
    }


    // operator.innerHTML = opValue;
  })




// //Store Values
// var calculator = {
//     displayValue: '0',
//     firstOperand: null,
//     waitingForSecondOperand: false,
//     operator: null,
//   };
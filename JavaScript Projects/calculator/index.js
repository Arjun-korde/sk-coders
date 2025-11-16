
// Getting elements from the document
let inputbox1 = document.getElementById("operand1");
let inputbox2 = document.getElementById("operand2");
let resultbox = document.getElementById("result");
let clearbtn = document.getElementById("clearbtn");
let numberBtns = document.getElementsByClassName("number-btn");
let equalsBtn = document.getElementById("equals");
let operationBtns = document.querySelectorAll(".operation-btn");

// to keep track of current active input box
let currInputBox = null;

inputbox1.addEventListener("focus", function() {
    currInputBox = inputbox1;
});

inputbox2.addEventListener("focus", function() {
    currInputBox = inputbox2;
});

// adding event listeners to number buttons
numberBtns = Array.from(numberBtns);
numberBtns.forEach(element => {
    element.addEventListener("click", function() {
        if(currInputBox) {
            currInputBox.value += parseInt(element.innerText);
            currInputBox.focus();
        }
    });
});

// clear input boxes and result box
clearbtn.addEventListener("click", function() {
    inputbox1.value = "";
    inputbox2.value = "";
    resultbox.value = "Result";
});

// adding event listener on operation buttons
let selectedOp = null;
operationBtns.forEach(ele => {
    ele.addEventListener("click", function() {
        operationBtns.forEach(btn => btn.classList.remove("active-op"));
        ele.classList.add("active-op");
        selectedOp = ele.getAttribute("id");
        console.log("op : "+selectedOp);
        
    })
});

// calculating the result
equalsBtn.addEventListener("click", function() {
    let op1 = parseInt(inputbox1.value);
    let op2 = parseInt(inputbox2.value);
    isNaN(op1) ? alert("please enter first number") : console.log("op1 : " + op1);
    isNaN(op2) ? alert("please enter second number") : console.log("op2 : " + op2);
    
    let result=0;
    console.log("calc : " + selectedOp);
    switch(selectedOp) {
        case "add": 
            result = op1 + op2;
            break;
        case "subtract":
            result = op1 - op2;
            break;
        case "multiply":
            result = op1 * op2;
            break;
        case "divide":
            result = op2 !== 0 ? op1 / op2 : alert("Cannot divide by zero");
            break;
        default: 
            alert("Please select operation");
    }
    resultbox.value = result;
    console.log("res : "+result);
    
});



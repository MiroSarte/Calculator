const currentOutput = document.getElementById("current_output");
const previousOutput = document.getElementById("previous_output");
const result = document.getElementById("result")
let btn = document.querySelectorAll(".btn")
const btn_9 = document.getElementById("keys_9")
const btn_8 = document.getElementById("keys_8")
const btn_7 = document.getElementById("keys_7")
const btn_6 = document.getElementById("keys_6")
const btn_5 = document.getElementById("keys_5")
const btn_4 = document.getElementById("keys_4")
const btn_3 = document.getElementById("keys_3")
const btn_2 = document.getElementById("keys_2")
const btn_1 = document.getElementById("keys_1")
const btn_0 = document.getElementById("keys_0")
const btn_decimal = document.getElementById("keys_dot")
const btn_equal = document.getElementById("operator_=")
const btn_addition = document.getElementById("operator_+")
const btn_subtraction = document.getElementById("operator_-")
const btn_multiplication = document.getElementById("operator_x")
const btn_division = document.getElementById("operator_÷")
const btn_AC = document.getElementById("keys_AC")
const btn_Parenthesis = document.getElementById("keys_parenthesis")
const btn_Percent = document.getElementById("keys_percent")
const backspace = document.getElementById("keys_backspace")
const dayTheme = document.getElementById("day");
const nightTheme = document.getElementById("night");
const toggleTheme = document.querySelector(".toggle-switch")
const themeIcon = document.querySelector(".theme-icon")
const calculatorContainer = document.querySelector(".calculator")
const display = document.querySelectorAll(".input")
const keysContainer = document.querySelector(".keys_container")
const numKeys = document.querySelectorAll(".numkeys")
dayTheme.addEventListener("click", ()=>{
    for (let i = 0; i < display.length; i++) {
        display[i].style.color = "#fafafa"
        display[i].style.backgroundColor = "#141212"
        
    }
    for (let j = 0; j < btn.length; j++) {
       btn[j].style.backgroundColor = "#d9d9d90a"
        
    }
    for (let k = 0; k < numKeys.length; k++) {
       numKeys[k].style.color = "#fafafa"
        
    }
    keysContainer.style.backgroundColor =  "#3E2D2D";
    calculatorContainer.style.backgroundColor = "#141212";
    currentOutput.style.caretColor = "#fafafa"
    toggleTheme.style.backgroundColor = "#494949";
    day.style.transform = "translateX(36px)";
    night.style.transform = "translateX(40px)";
    setTimeout(disappearDay, 800);
    function disappearDay(){
        dayTheme.style.display = "none"
        nightTheme.style.display = "block"
    }
     
})
nightTheme.addEventListener("click", ()=>{
    for (let i = 0; i < display.length; i++) {
        display[i].style.color = "#3E2D2D"
        display[i].style.backgroundColor = "#fafafa"
    }
    for (let j = 0; j < btn.length; j++) {
        btn[j].style.backgroundColor = "#d9d9d9"          
     }
     for (let k = 0; k < numKeys.length; k++) {
        numKeys[k].style.color = "#3E2D2D"
              
     }
    
    keysContainer.style.backgroundColor =  "#f1f1f1";
    currentOutput.style.backgroundColor = "#fafafa"
    currentOutput.style.caretColor = "#3E2D2D"
    calculatorContainer.style.backgroundColor = "#fafafa"
    toggleTheme.style.backgroundColor = "#F1F1F1";
    day.style.transform = "translateX(0px)";
    night.style.transform = "translateX(0px)";
    setTimeout(disappearDay, 800);
    function disappearDay(){
        dayTheme.style.display = "block"
        nightTheme.style.display = "none"
    }
     
})
btn_9.addEventListener("click", ()=>{
    const keys = "9";
    //callback displayoutput
    displayOutput(keys);
})
btn_8.addEventListener("click", ()=>{
    const keys = "8";
    //callback displayoutput
    displayOutput(keys)
})
btn_7.addEventListener("click", ()=>{
    const keys = "7";
    //callback displayoutput
    displayOutput(keys)})
btn_6.addEventListener("click", ()=>{
    const keys = "6";
    //callback displayoutput
    displayOutput(keys)})
btn_5.addEventListener("click", ()=>{
    const keys = "5";
    //callback displayoutput
    displayOutput(keys)})
btn_4.addEventListener("click", ()=>{
    const keys = "4";
    //callback displayoutput
    displayOutput(keys)})
btn_3.addEventListener("click", ()=>{
    const keys = "3";
    //callback displayoutput
    displayOutput(keys)})
btn_2.addEventListener("click", ()=>{
    const keys = "2";
    //callback displayoutput
    displayOutput(keys)})
btn_1.addEventListener("click", ()=>{
    const keys = "1";
    //callback displayoutput
    displayOutput(keys)})
btn_0.addEventListener("click", ()=>{
    const keys = "0";
    //callback displayoutput
    displayOutput(keys)})
btn_decimal.addEventListener("click", ()=>{
    const keys = ".";
    const arrlength = currentOutput.value.length
     if(currentOutput.value.slice(-1) ===  "+" || currentOutput.value.slice(-1) ===  "-"|| currentOutput.value.slice(-1) ===  "x"|| currentOutput.value.slice(-1) ===  "÷" || currentOutput.value.slice(-1) ===  "."|| currentOutput.value.slice(-1) ===  "" ){
         //dont append operator
       currentOutput.value = currentOutput.value.slice(0, arrlength-1)
       displayOutput(keys)
         
    }
     else{
      
            //callback displayoutput
            displayOutput(keys)
     }
  })
btn_addition.addEventListener("click", ()=>{
    const keys = "+";
    const arrlength = currentOutput.value.length
     if(currentOutput.value.slice(-1) ===  "+" || currentOutput.value.slice(-1) ===  "-"|| currentOutput.value.slice(-1) ===  "x"|| currentOutput.value.slice(-1) ===  "÷" || currentOutput.value.slice(-1) ===  "" || currentOutput.value.slice(-1) ===  "."){
         //dont append operator
       currentOutput.value = currentOutput.value.slice(0, arrlength-1)
       displayOutput(keys)
         
    }
     else{
      
            //callback displayoutput
            displayOutput(keys)
     }
     
})
btn_subtraction.addEventListener("click", ()=>{
    const keys = "-";
    const arrlength = currentOutput.value.length
    if(currentOutput.value.slice(-1) ===  "+" || currentOutput.value.slice(-1) ===  "-"|| currentOutput.value.slice(-1) ===  "x"|| currentOutput.value.slice(-1) ===  "÷" || currentOutput.value.slice(-1) ===  "" || currentOutput.value.slice(-1) ===  "."){
        //dont append operator
        currentOutput.value = currentOutput.value.slice(0, arrlength-1)
        displayOutput(keys)
     }
     else{
    
            //callback displayoutput
            displayOutput(keys)
     }
})
btn_multiplication.addEventListener("click", ()=>{
    const keys = "x";
    const arrlength = currentOutput.value.length
    if(currentOutput.value.slice(-1) ===  "+" || currentOutput.value.slice(-1) ===  "-"|| currentOutput.value.slice(-1) ===  "x"|| currentOutput.value.slice(-1) ===  "÷" || currentOutput.value.slice(-1) ===  "" || currentOutput.value.slice(-1) ===  "."){
       //dont append operator
       currentOutput.value = currentOutput.value.slice(0, arrlength-1)
       displayOutput(keys)
     }
     else{
        
            //callback displayoutput
            displayOutput(keys)
     }
})
btn_division.addEventListener("click", ()=>{
    const keys = "÷";
    const arrlength = currentOutput.value.length
    if(currentOutput.value.slice(-1) ===  "+" || currentOutput.value.slice(-1) ===  "-"|| currentOutput.value.slice(-1) ===  "x"|| currentOutput.value.slice(-1) ===  "÷" || currentOutput.value.slice(-1) ===  "" || currentOutput.value.slice(-1) ===  "."){
        //dont append operator
        currentOutput.value = currentOutput.value.slice(0, arrlength-1)
        displayOutput(keys)
     }
     else{
        
            //callback displayoutput
            displayOutput(keys)
     }
})
btn_equal.addEventListener("click", ()=>{
    const operators = currentOutput.value.replace(/[0-9]|\./g, "").split("");
    const number = currentOutput.value.split(/\+|\-|\x|\÷/g);
    console.log(number);
    console.log(operators);
    ResolvedMath(operators, number)
})

btn_AC.addEventListener("click", ()=>{
    currentOutput.value = "";
    previousOutput.innerHTML = "";
    result.innerHTML = "";
})
btn_Parenthesis.addEventListener("click", ()=>{
    currentOutput.value += "()";
    
})
backspace.addEventListener("click", ()=>{
    //remove the last character in the currentOutput.
 const pos = currentOutput.selectionStart;
let charAfterCaret = currentOutput.value.substring(pos);
let charBeforeCaret = currentOutput.value.substring(0, pos-1);
 currentOutput.value = charBeforeCaret+charAfterCaret
 currentOutput.setSelectionRange(pos, pos)
})
btn_Percent.addEventListener("click", ()=>{
    if(currentOutput.value.slice(-1) ===  "%" || currentOutput.value.slice(-1) ===  "" ){
        //dont append operator
     }
     else{
        const keys = "%";
            //callback displayoutput
            displayOutput(keys)
     }    
})

//create a function that only numbers and special characters that input accept.
function numbersAndOperatorsOnly(event){
    if(isNaN(event.key) && event.key !== '.' && event.key !== '+' && event.key !== '-' && event.key !== 'x' && event.key !== '÷' && event.key !== '%' && event.key !== '('  && event.key !== ')')event.preventDefault();
}

function displayOutput(keys){
    const pos = currentOutput.selectionStart;
    let charAfterCaret = currentOutput.value.substring(pos);
    let charBeforeCaret = currentOutput.value.substring(0, pos);
    currentOutput.value = charBeforeCaret+ keys +charAfterCaret;
    currentOutput.setSelectionRange(pos+1, pos+1)
}

// Add a click event listener to each button 
// everytime the button is click the caret is still on focus.
btn.forEach((button) => {
button.addEventListener("click", ()=>{
    currentOutput.focus()
       // button.style.backgroundColor = "#F1F1F1";
    
});
})

function ResolvedMath(operators, number){
      // assign the position of premier division from operator in the divide varible.
      let divide = operators.indexOf("÷");
      //using while loop to target all divide in the equation and resolve it. 
      while(divide != -1){
          //resolve the target divisor
          number.splice(divide, 2, number[divide] / number[divide + 1]);
          //remove the operator after it  is resolved
          operators.splice(divide, 1);
          // assign the position of next divisor to be divide.
          divide = operators.indexOf("÷")
  
      }
       // assign the position of premier multiplication from operator in the multiplication varible.
       let multiplication = operators.indexOf("x");
       //using while loop to target all multiply in the equation and resolve it. 
       while(multiplication != -1){
           //resolve the target multiplier
           number.splice(multiplication, 2, number[multiplication] * number[multiplication + 1]);
           //remove the operator after it  is resolved
           operators.splice(multiplication, 1);
           // assign the position of next multiplier to be multiply.
           multiplication = operators.indexOf("x")
   
       }
  
       // assign the position of premier addition from operator in the addition varible.
       let addition = operators.indexOf("+");
       //using while loop to target all adden in the equation and resolve it. 
       while(addition != -1){
           //resolve the target adden
           number.splice(addition, 2, Number(number[addition]) + Number(number[addition + 1]));
           //remove the operator after it  is resolved
           operators.splice(addition, 1);
           // assign the position of next adden to be sum.
           addition = operators.indexOf("+")
       }
  
        // assign the position of premier addition from operator in the addition varible.
        let subtraction = operators.indexOf("-");
        //using while loop to target all adden in the equation and resolve it. 
        while(subtraction != -1){
            //resolve the target adden
            number.splice(subtraction, 2, number[subtraction] - number[subtraction + 1]);
            //remove the operator after it  is resolved
            operators.splice(subtraction, 1);
            // assign the position of next adden to be sum.
            subtraction = operators.indexOf("-");
        }
        previousOutput.innerHTML = currentOutput.value;
        currentOutput.value = number[0];
        result.innerHTML = currentOutput.value;
  
  
  }
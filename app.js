// Buttons
let reset = document.querySelector("#reset");
let swapBtn = document.querySelector("#swapBtn");
let convertBtn = document.querySelector("#converBtn");
//select options
let optionFrom = document.querySelector("#data1");
let optionTo = document.querySelector("#data2");
// input output
let input = document.querySelector("#input");
let output = document.querySelector("#output");
//lable 
let inputLabel = document.querySelector("#inputLable");
let h1 = document.querySelector("#h1");

function heading(){
    setInterval(()=>{
        if(optionFrom.value == "decimal"){
            h1.innerHTML = `Decimal-Converter`;
            inputLabel.innerHTML = `Enter Decimal Number`;
        } else if (optionFrom.value == "octal"){
                h1.innerHTML = `Octal-Converter`;
                inputLabel.innerHTML = `Enter Octal Number`;
        } else if (optionFrom.value == "hexa"){
            h1.innerHTML = `HexaDecimal-Converter`;
            inputLabel.innerHTML = `Enter HexaDecimal Number`;
        } else if (optionFrom.value == "binary"){
        h1.innerHTML = `Binary-Converter`;
        inputLabel.innerHTML = `Enter Binary Number`;
        }
    },3000)
       
}
heading();


convertBtn.addEventListener("click", function () {
  output.innerHTML = "";

  //For Decimal conversion
  if(optionFrom.value == "decimal" && optionTo.value == "binary") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = +input.value;
      output.innerText += decimal.toString(2);
      output.style.border = "2px solid lightgreen";
    }
   else {
    output.style.color = "red";
    output.value = "Enter a Valid Number";
    output.style.border = "2px solid red";
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "octal") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = +input.value;
      output.innerText += decimal.toString(8);
      output.style.border = "2px solid lightgreen";
    }
   else {
    output.style.color = "red";
    output.value = "Enter a Valid Number";
    output.style.border = "2px solid red";
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "hexa") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = +input.value;
      output.innerText += decimal.toString(16).toUpperCase();
      output.style.border = "2px solid lightgreen";
    }
   else {
    output.style.color = "red";
    output.value = "Enter a Valid Number";
    output.style.border = "2px solid red";
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "decimal") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = input.value;
      output.innerText += decimal
      output.style.border = "2px solid lightgreen";
    }
   else {
    output.style.color = "red";
    output.value = "Enter a Valid Number";
    output.style.border = "2px solid red";
  }
}
});
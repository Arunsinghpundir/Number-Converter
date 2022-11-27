'use strict'
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
let h1 = document.querySelector(".h1");
//mode
let day =  document.querySelector(".day");
let night = document.querySelector(".night");
let container = document.querySelector(".container");

 // If the user presses the "Enter" key on the keyboard
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
   convertBtn.click();
  }
});

day.addEventListener("click", function(){
  document.body.classList.add("dayWall");
  document.body.classList.remove("nightWall");
  day.classList.add("reverse");
  night.classList.remove("reverse");
  h1.classList.add("blackFont");
  h1.classList.remove('whiteFont');
  container.classList.remove("bgNight");
  container.classList.add("bgDay");
})
night.addEventListener("click",function(){
  document.body.classList.add("nightWall");
  h1.classList.toggle('whiteFont');
  night.classList.add("reverse")
  day.classList.remove("reverse");
  container.classList.toggle("bgNight");
  document.body.classList.remove("dayWall");
})

function err(){  
  output.classList.remove("none")
  output.classList.remove("success");
  output.classList.add("err");
  output.placeholder = "Enter a Valid Number";
}

function success(){
  output.classList.add("success");
  output.classList.remove("err");
  output.classList.remove("none")
};

function blank(){
  if(input.value === ""){
    output.classList.remove("success");
    output.classList.add("err");
    output.placeholder = "Enter a Number";  
    output.innerText = ""; 
    output.classList.remove("none")
  }
}
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
    },2000)
}
heading();

//for Swaping 
swapBtn.addEventListener("click",function(){
  let  valueOfTo = optionTo.value
  let valueOfFrom = optionFrom.value;
  optionFrom.value = valueOfTo;
  optionTo.value = valueOfFrom;
  let inputValue = input.value ;
  let outputvalue = output.innerHTML;
  output.innerHTML = inputValue;
  input.value = outputvalue;
  reset.addEventListener("click",function(){
    output.innerText = "";
    input.value = "";
    output.classList.add("none")
  })
})

// for reset
reset.addEventListener("click",function(){
  output.innerText = "";
  input.value = "";
  output.classList.add("none")
})

//conversion
convertBtn.addEventListener("click", function() {
  output.innerHTML = "";
  //For Decimal conversion
  let inputValueDecimal = isNaN(input.value);
  let decimal = +input.value;

  if(optionFrom.value == "decimal" && optionTo.value == "binary") {
    if(!inputValueDecimal) {
      success();
      output.innerText += decimal.toString(2);
    }
   else {
   err();
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "octal") {
  if(!inputValueDecimal) {
      success();
      output.innerText += decimal.toString(8);
    }
   else {
   err()
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "hexa") {
    if(!inputValueDecimal) {
      success();
      output.innerText += decimal.toString(16).toUpperCase();
    }
   else {
    err();
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "decimal") {
    if(!inputValueDecimal) {
      success();
      output.innerText += decimal
    }
   else {
    err();
  }
}

//for binary conversion
let binary = input.value;
//spiliting each value into an array to check
let inputArr = (input.value).split("");
// prefix check if number have alpha numeric value or giver number is binary or not
let inputValueBinary = isNaN(Number("0B"+ input.value));
if(optionFrom.value == "binary" && optionTo.value == "decimal") {
  inputArr.forEach(i => {
  if(!inputValueBinary) { 
    success();
    output.innerText += parseInt(binary, 2);
    } else {
      err();
    }
});
} else if(optionFrom.value == "binary" && optionTo.value == "octal") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(!inputValueBinary) {
      success();
      output.innerText += parseInt(binary, 2).toString(8);  // read
      } else {
        err();
      }
  });
} else if(optionFrom.value == "binary" && optionTo.value == "hexa") {
  inputArr.forEach(i => {
    if(!inputValueBinary){
      success();
      output.innerText += parseInt(binary, 2).toString(16).toUpperCase();
      } else {
        err();
      }
  });
} else if(optionFrom.value == "binary" && optionTo.value == "binary") {
  inputArr.forEach(i => {
    if(!inputValueBinary) {
     success();
      output.innerText += binary;
      } else {
        err();
      }
  });
}

//for octal conversion
let octal = input.value;
let inputValueOctal = isNaN(Number('0O' + input.value));
if(optionFrom.value == "octal" && optionTo.value == "decimal") {
  if (!inputValueOctal){
    success();
    output.innerText = (parseInt(octal, 8));
  } 
  else {
    err(); 
  }
} else if(optionFrom.value == "octal" && optionTo.value == "octal") {
  if (!inputValueOctal){
    success();
    output.innerText = octal;
  } 
  else {
    err(); 
  }
} else if(optionFrom.value == "octal" && optionTo.value == "hexa") {
  if (!inputValueOctal){
    success();
    output.innerText = (parseInt(octal, 8)).toString(16).toUpperCase();
  } 
  else {
    err(); 
  }
} else if(optionFrom.value == "octal" && optionTo.value == "binary") {
  if (!inputValueOctal){
   success();
    output.innerText = (parseInt(octal, 8)).toString(2);
  } 
  else {
    err(); 
  }
}

// For Hexadecimal conversion
let hexa = input.value;
//checking if the input value is alphanumeric and hex value or not.
let inputValueHexa = isNaN(Number('0x' + input.value)); 

if(optionFrom.value == "hexa" && optionTo.value == "decimal") {
    if (!inputValueHexa){
      success();
    output.innerText +=  (parseInt(hexa, 16));
    } else {
      err();
    }
} else if(optionFrom.value == "hexa" && optionTo.value == "octal") {
    if (!inputValueHexa){
      success();
    output.innerText +=  parseInt(hexa, 16).toString(8); //toString read
    } else {
      err();
    }
} else if(optionFrom.value == "hexa" && optionTo.value == "binary") {
    if (!inputValueHexa){
      success();
    output.innerText +=  (parseInt(hexa, 16)).toString(2);
    } else {
      err();
    }
} else if(optionFrom.value == "hexa" && optionTo.value == "hexa") {
    if (!inputValueHexa){
    success();
    output.innerText +=  hexa.toUpperCase();
    } else {
      err();
    }
}
blank();
});

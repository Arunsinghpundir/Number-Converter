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
//mode
let day =  document.querySelector("#day");
let night = document.querySelector("#night");
let container = document.querySelector(".container");

day.addEventListener("click",function(){
  document.body.style.backgroundImage = "url(img/daywall.jpg)"; 
  document.body.style.transition = "2s";
  day.style.transform = `rotate(90deg)`;
  day.style.transition = "2s";
  night.style.transform = `rotate(0deg)`;
  h1.style.color = "#000";
})
night.addEventListener("click",function(){
 document.body.style.backgroundImage = "url(img/nightwall.jpg)";
 h1.style.color = "#fff";
 night.style.transform = `rotate(90deg)`;
 night.style.transition = "2s";
 day.style.transform = `rotate(0deg)`;
 document.body.style.color = "#fff"
 container.style.background = "rgba(0,0,0,0.5)";
 document.body.style.transition = "2s";
 
})

function err(){
  setTimeout(()=>{
    output.style.color = "red";
    output.innerText = "Enter a Valid Number";
    output.style.border = "2px solid red";
  });
  setTimeout(()=>{
    output.style.color = "black";
    output.innerText = "";
    output.style.border = "1px solid black";
  },2500);
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
    },3000)
}
heading();

//for Swaping 
swapBtn.addEventListener("click",function a(){
  let  a = optionTo.value
  let b = optionFrom.value;
  optionFrom.value = a;
  optionTo.value = b;
  let c = input.value ;
  let d = output.innerHTML;
  output.innerHTML = c;
  input.value = d;
  reset.addEventListener("click",function(){
    output.innerText = "";
    input.value = "";
    output.style.border = "none";
  })
})

// for reset
reset.addEventListener("click",function(){
  output.innerText = "";
  input.value = "";
  output.style.border = "none";
})

//conversion
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
   err();
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "octal") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = +input.value;
      output.innerText += decimal.toString(8);
      output.style.border = "2px solid lightgreen";
    }
   else {
   err()
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "hexa") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = +input.value;
      output.innerText += decimal.toString(16).toUpperCase();
      output.style.border = "2px solid lightgreen";
    }
   else {
    err();
  }
} else if(optionFrom.value == "decimal" && optionTo.value == "decimal") {
    if(!isNaN(input.value)) {
      output.style.color = "Black";
      let decimal = input.value;
      output.innerText += decimal
      output.style.border = "2px solid lightgreen";
    }
   else {
    err();
  }
}

//for binary conversion
if(optionFrom.value == "binary" && optionTo.value == "decimal") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
  if(!isNaN(input.value)) {
    if(inputArr[i]==0 || inputArr[i]==1){
    output.style.color = "Black";
    let binary = input.value;
    output.innerText += parseInt(binary, 2);
    output.style.border = "2px solid lightgreen";
    } else {
      err();
    }
  }
  else {
    err(); 
}
});
} else if(optionFrom.value == "binary" && optionTo.value == "octal") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(!isNaN(input.value)) {
      if(inputArr[i]==0 || inputArr[i]==1){
      output.style.color = "Black";
      let binary = input.value;
      output.innerText += parseInt(binary, 2).toString(8); //parseInt(binary, 2).toString(8);
      output.style.border = "2px solid lightgreen";
      console.log(parseInt(decimal, 2))
      } else {
        err();
      }
    }
    else {
      err(); 
    }
  });
} else if(optionFrom.value == "binary" && optionTo.value == "hexa") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(!isNaN(input.value)) {
      if(inputArr[i]==0 || inputArr[i]==1){
      output.style.color = "Black";
      let binary = input.value;
      output.innerText += parseInt(binary, 2).toString(16).toUpperCase(); //parseInt(binary, 2).toString(16);
      output.style.border = "2px solid lightgreen";
      console.log(parseInt(decimal, 2))
      } else {
        err();
      }
    }
    else {
      err(); 
    }
  });
} else if(optionFrom.value == "binary" && optionTo.value == "binary") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(!isNaN(input.value)) {
      if(inputArr[i]==0 || inputArr[i]==1){
      output.style.color = "Black";
      let binary = input.value;
      output.innerText += binary //parseInt(binary, 2).toString(16);
      output.style.border = "2px solid lightgreen";
      console.log(parseInt(decimal, 2))
      } else {
        err();
      }
    }
    else {
      err(); 
    }
  });
}

//for octal conversion
if(optionFrom.value == "octal" && optionTo.value == "decimal") {
  if(!isNaN(input.value)) {
    output.style.color = "Black";
    let octal = input.value;
    output.innerText = (parseInt(octal, 8)).toString(10);
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
  } 
  else {
    err(); 
  }
} else if(optionFrom.value == "octal" && optionTo.value == "octal") {
  if(!isNaN(input.value)) {
    output.style.color = "Black";
    let octal = input.value;
    output.innerText = octal;
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
  } 
  else {
    err(); 
  }
} else if(optionFrom.value == "octal" && optionTo.value == "hexa") {
  if(!isNaN(input.value)) {
    output.style.color = "Black";
    let octal = input.value;
    output.innerText = (parseInt(octal, 8)).toString(16).toUpperCase(); //(parseInt(text, 8)).toString(16);
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
  } 
  else {
    err(); 
  }
} else if(optionFrom.value == "octal" && optionTo.value == "binary") {
  if(!isNaN(input.value)) {
    output.style.color = "Black";
    let octal = input.value;
    output.innerText = (parseInt(octal, 8)).toString(2); //(parseInt(text, 8)).toString(2);
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
  } 
  else {
    err(); 
  }
}

// For Hexadecimal conversion
if(optionFrom.value == "hexa" && optionTo.value == "decimal") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(inputArr[i]>="a" || inputArr[i]<="f"){
    output.style.color = "Black";
    let hexa = input.value;
    output.innerText +=  (parseInt(hexa, 16))
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
    } else {
      err();
    }
});
} else if(optionFrom.value == "hexa" && optionTo.value == "octal") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(inputArr[i]>="a" || inputArr[i]<="f"){
    output.style.color = "Black";
    let hexa = input.value;
    output.innerText +=  parseInt(hexa, 16).toString(8);
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
    } else {
      err();
    }
});
} else if(optionFrom.value == "hexa" && optionTo.value == "binary") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(inputArr[i]>="a" || inputArr[i]<="f" ){
    output.style.color = "Black";
    let hexa = input.value;
    output.innerText +=  (parseInt(hexa, 16)).toString(2);
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
    } else {
      err();
    }
});
} else if(optionFrom.value == "hexa" && optionTo.value == "hexa") {
  let inputArr = (input.value).split("");
  inputArr.forEach(i => {
    if(inputArr[i]>="a" || inputArr[i]<="f"){
    output.style.color = "Black";
    let hexa = input.value;
    output.innerText +=  hexa.toUpperCase();
    output.style.border = "2px solid lightgreen";
    console.log(parseInt(decimal, 2))
    } else {
      err();
    }
});
}
});
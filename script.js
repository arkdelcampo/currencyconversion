// Consts
const currency1El = document.getElementById("currency1");
const currency2El = document.getElementById("currency2");
const amountEl = document.getElementById("amount");
const btn = document.getElementById("convert-btn");
const convertStatement = document.getElementById("convertStatement");
const outputEl = document.getElementById("output");

const lightBtn = document.getElementById("lightMode");
const darkBtn = document.getElementById("darkMode");

// Conversion variables
let outputStatement = null;
let convertedAmt = null;

let mode = "Light";

// Event Listeners
btn.addEventListener("click", convert);
currency1El.addEventListener("change", updateConvertStatement);
currency2El.addEventListener("change", updateConvertStatement);
amountEl.addEventListener("change", updateConvertStatement);

lightBtn.addEventListener("click", lightMode);
darkBtn.addEventListener("click", darkMode);

// amountEl.value = 0;

// Function for converting the currency
function convert() {
  // Input
  let currency1 = currency1El.value;
  let currency2 = currency2El.value;
  let amount = +amountEl.value;

  // Process
  // CAD
  if (currency1 == "CAD") {
    if (currency2 == "USD") {
      convertedAmt = 0.7159 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.6831 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 60.2616 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 5.1747 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 110.247 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 14.5141 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 1.0996 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.5689 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
    // USD
  } else if (currency1 == "USD") {
    if (currency2 == "CAD") {
      convertedAmt = 1.397 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.9544 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 84.2698 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 7.2398 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 154.195 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 20.3006 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 1.538 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.7956 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
    // EURO
  } else if (currency1 == "EURO") {
    if (currency2 == "CAD") {
      convertedAmt = 1.4639 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 1.0477 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 88.428 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 7.5956 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 161.8085 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 21.3072 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 1.6139 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.8352 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }
  // RUPEES
  else if (currency1 == "RUPEES") {
    if (currency2 == "CAD") {
      convertedAmt = 0.0166 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 0.0119 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.0113 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 0.0859 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 1.83 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 0.2409 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 0.0183 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.0094 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }
  // YUAN
  else if (currency1 == "YUAN") {
    if (currency2 == "CAD") {
      convertedAmt = 0.1932 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 0.1381 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.1316 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 11.6398 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 21.2981 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 2.8036 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 0.2124 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.1099 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }
  // YEN
  else if (currency1 == "YEN") {
    if (currency2 == "CAD") {
      convertedAmt = 0.0091 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 0.0065 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.0062 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 1.8298 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 0.047 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 0.1316 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 0.01 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.0052 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }
  // PESOS
  else if (currency1 == "PESOS") {
    if (currency2 == "CAD") {
      convertedAmt = 0.0689 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 0.0492 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.0469 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 4.1557 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 0.3565 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 7.5965 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 0.0757 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.0392 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }
  // PESOS
  else if (currency1 == "AUD") {
    if (currency2 == "CAD") {
      convertedAmt = 0.9094 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 0.6502 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 0.6196 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 54.7896 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 4.7073 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 100.29 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 13.2063 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "POUNDS") {
      convertedAmt = 0.5175 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }
  // POUNDS
  else if (currency1 == "POUNDS") {
    if (currency2 == "CAD") {
      convertedAmt = 1.7578 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "USD") {
      convertedAmt = 1.2569 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "EURO") {
      convertedAmt = 1.1974 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "RUPEES") {
      convertedAmt = 106.0739 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YUAN") {
      convertedAmt = 9.0996 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "YEN") {
      convertedAmt = 193.82 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "PESOS") {
      convertedAmt = 25.5309 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else if (currency2 == "AUD") {
      convertedAmt = 1.9324 * amount;
      convertedAmt = convertedAmt.toFixed(2);
    } else {
      convertedAmt = amount;
    }
  }

  // Prevents the user from converting 0 or negative amount of currency.
  if (amount <= 0) {
    if (amount == 0) {
      outputStatement = "Please provide the amount of currency.";
      console.log("Amount is empty.");
    } else if (amount < 0) {
      outputStatement = "Amount of currency cannot be negative.";
      console.log("Amount is negative.");
    }
    convertStatement.innerHTML = outputStatement;
    outputEl.innerHTML = "----";
    return;
  }

  // Creating the output statement
  outputStatement = convertedAmt + " " + currency2;

  // Output
  console.log(outputStatement);
  outputEl.innerHTML = outputStatement;
  if (mode == "Light") {
    outputEl.style.color = "green";
  } else if (mode == "Dark") {
    outputEl.style.color = "lightgreen";
  }
}

function updateConvertStatement() {
  // Create the statement
  let statement =
    "You are converting " +
    amountEl.value +
    " " +
    currency1El.value +
    " to " +
    currency2El.value +
    ".";
  // Apply the statement
  convertStatement.innerHTML = statement;
}

// Light mode function
function lightMode() {
  console.log("CHANGED TO LIGHT MODE");
  mode = "Light";
  outputEl.style.color = "green";

  // Body
  document.body.style.backgroundColor = "#78c78c";
  document.body.style.color = "black";
  document.body.style.border = "8px solid rgb(92, 153, 106)";
  document.body.style.boxShadow = "0px 12px rgb(92, 153, 106)";

  document.getElementById("HTML").style.backgroundColor = "#548560";

  // Divs and header
  document.getElementById("div1").style.backgroundColor = "rgb(135, 221, 156)";
  document.getElementById("div2").style.backgroundColor = "rgb(135, 221, 156)";
  document.getElementById("div3").style.backgroundColor = "rgb(135, 221, 156)";

  document.getElementById("div1").style.border = "6px solid rgb(113, 185, 131)";
  document.getElementById("div2").style.border = "6px solid rgb(113, 185, 131)";
  document.getElementById("div3").style.border = "6px solid rgb(113, 185, 131)";
  document.getElementById("header").style.border =
    "6px solid rgb(113, 185, 131)";

  document.getElementById("div1").style.boxShadow =
    "0px 8px rgb(113, 185, 131)";
  document.getElementById("div2").style.boxShadow =
    "0px 8px rgb(113, 185, 131)";
  document.getElementById("div3").style.boxShadow =
    "0px 8px rgb(113, 185, 131)";
  document.getElementById("header").style.boxShadow =
    "0px 8px rgb(113, 185, 131)";

  document.getElementById("header").style.backgroundColor =
    "rgb(135, 221, 156)";

  // Amount input, currency selects, and convert button
  document.getElementById("currency1").style.backgroundColor = "white";
  document.getElementById("currency2").style.backgroundColor = "white";

  document.getElementById("amount").style.backgroundColor = "white";
  document.getElementById("convert-btn").style.backgroundColor = "white";

  document.getElementById("currency1").style.color = "black";
  document.getElementById("currency2").style.color = "black";

  document.getElementById("amount").style.color = "black";
  document.getElementById("convert-btn").style.color = "black";

  document.getElementById("amount").style.border = "3px solid rgb(82, 134, 95)";
  document.getElementById("convert-btn").style.border =
    "3px solid rgb(82, 134, 95)";
  document.getElementById("currency1").style.border =
    "3px solid rgb(82, 134, 95)";
  document.getElementById("currency2").style.border =
    "3px solid rgb(82, 134, 95)";

  document.getElementById("amount").style.boxShadow =
    "0px 4px rgb(82, 134, 95)";
  document.getElementById("convert-btn").style.boxShadow =
    "0px 4px rgb(82, 134, 95)";
  document.getElementById("currency1").style.boxShadow =
    "0px 4px rgb(82, 134, 95)";
  document.getElementById("currency2").style.boxShadow =
    "0px 4px rgb(82, 134, 95)";

  // Light and dark mode buttons
  document.getElementById("lightMode").style.backgroundColor = "white";
  document.getElementById("darkMode").style.backgroundColor = "white";

  document.getElementById("lightMode").style.color = "black";
  document.getElementById("darkMode").style.color = "black";

  document.getElementById("lightMode").style.border =
    "3px solid rgb(82, 134, 95)";
  document.getElementById("darkMode").style.border =
    "3px solid rgb(82, 134, 95)";

  document.getElementById("lightMode").style.boxShadow =
    "0px 4px rgb(82, 134, 95)";
  document.getElementById("darkMode").style.boxShadow =
    "0px 4px rgb(82, 134, 95)";
}

// Dark mode function
function darkMode() {
  console.log("CHANGED TO DARK MODE");
  mode = "Dark";
  outputEl.style.color = "lightgreen";

  // Body
  document.body.style.backgroundColor = "#385e41";
  document.body.style.color = "white";
  document.body.style.border = "8px solid rgb(32, 53, 37)";
  document.body.style.boxShadow = "0px 12px rgb(32, 53, 37)";

  document.getElementById("HTML").style.backgroundColor = "rgb(21, 36, 23)";

  // Divs and header
  document.getElementById("div1").style.backgroundColor = "rgb(82, 136, 95)";
  document.getElementById("div2").style.backgroundColor = "rgb(82, 136, 95)";
  document.getElementById("div3").style.backgroundColor = "rgb(82, 136, 95)";

  document.getElementById("div1").style.border = "6px solid rgb(50, 83, 58)";
  document.getElementById("div2").style.border = "6px solid rgb(50, 83, 58)";
  document.getElementById("div3").style.border = "6px solid rgb(50, 83, 58)";
  document.getElementById("header").style.border = "6px solid rgb(50, 83, 58)";

  document.getElementById("div1").style.boxShadow = "0px 8px rgb(50, 83, 58)";
  document.getElementById("div2").style.boxShadow = "0px 8px rgb(50, 83, 58)";
  document.getElementById("div3").style.boxShadow = "0px 8px rgb(50, 83, 58)";
  document.getElementById("header").style.boxShadow = "0px 8px rgb(50, 83, 58)";

  document.getElementById("header").style.backgroundColor = "rgb(82, 136, 95)";

  // Amount input, currency selects, and convert button
  document.getElementById("currency1").style.backgroundColor = "#181f14";
  document.getElementById("currency2").style.backgroundColor = "#181f14";

  document.getElementById("currency1").style.color = "white";
  document.getElementById("currency2").style.color = "white";

  document.getElementById("amount").style.backgroundColor = "#181f14";
  document.getElementById("convert-btn").style.backgroundColor = "#181f14";

  document.getElementById("amount").style.color = "white";
  document.getElementById("convert-btn").style.color = "white";

  document.getElementById("amount").style.border = "3px solid rgb(41, 65, 46)";
  document.getElementById("convert-btn").style.border =
    "3px solid rgb(41, 65, 46)";
  document.getElementById("currency1").style.border =
    "3px solid rgb(41, 65, 46)";
  document.getElementById("currency2").style.border =
    "3px solid rgb(41, 65, 46)";

  document.getElementById("amount").style.boxShadow = "0px 4px rgb(41, 65, 46)";
  document.getElementById("convert-btn").style.boxShadow =
    "0px 4px rgb(41, 65, 46)";
  document.getElementById("currency1").style.boxShadow =
    "0px 4px rgb(41, 65, 46)";
  document.getElementById("currency2").style.boxShadow =
    "0px 4px rgb(41, 65, 46)";

  document.getElementById("outputContainer").style.transition = "all 0.4s";
  document.getElementById("output").style.transition = "all 0.4s";

  // Light and dark mode buttons
  document.getElementById("lightMode").style.backgroundColor = "black";
  document.getElementById("darkMode").style.backgroundColor = "black";

  document.getElementById("lightMode").style.color = "white";
  document.getElementById("darkMode").style.color = "white";

  document.getElementById("lightMode").style.border =
    "3px solid rgb(41, 65, 46)";
  document.getElementById("darkMode").style.border =
    "3px solid rgb(41, 65, 46)";

  document.getElementById("lightMode").style.boxShadow =
    "0px 4px rgb(41, 65, 46)";
  document.getElementById("darkMode").style.boxShadow =
    "0px 4px rgb(41, 65, 46)";
}

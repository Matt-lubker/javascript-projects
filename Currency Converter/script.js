const form = document.getElementById("converterForm");
const amount = document.getElementById("amount");
const fromCurrency = document.getElementById("fromCurrency");
const convertedAmount = document.getElementById("convertedAmount");
const toCurrency = document.getElementById("toCurrency");
const loading = document.querySelector(".loading");
const result = document.querySelector(".result");
const error = document.querySelector(".error");

function convertMoney() {
    loading.style.display = "block";

    setTimeout(() => {
        loading.style.display = "none";
        console.log("Form submitted");
    }, 1000); // hides after 1 second
}


form.addEventListener("submit", function (event) {
    event.preventDefault();
    convertMoney();
});  

const balance = document.getElementById("balance");
const interest = document.getElementById("interest");
const submit = document.getElementById("submit");
const result = document.getElementById("result");
const years = document.getElementById("years")


function getResult() {
    let balanceValue = balance.value;
    let interestValue = interest.value;
    let yearsValue = years.value;
    interestValue /= 100;
    let rate = balanceValue * interestValue * yearsValue
    result.innerText = `interest after ${yearsValue}years is ${rate.toFixed(2)}`;
    result.classList.add('totalreturn');

}

    submit.addEventListener("click", getResult);
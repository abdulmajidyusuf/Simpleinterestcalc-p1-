
const balance = document.getElementById("balance");
const interest = document.getElementById("interest");
const submit = document.getElementById("submit");
const result = document.getElementById("result");



function getResult() {
    let balanceValue = balance.value;
    let interestValue = interest.value;
   // const rateJs = balanceValue * (1 + interestValue / 100);
   interestValue = interestValue / 100;
    const rateJs = balanceValue * interestValue;
    result.innerText = rateJs;

}

    submit.addEventListener("click", getResult);
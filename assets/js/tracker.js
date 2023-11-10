let balance = 0;
let income = 0;
let outcome = 0;
function submitData(event) {
    event.preventDefault();
    let details = document.getElementById("details").value;
    let amount = document.getElementById("amount").value;

    let updateHistory = document.getElementById("list");

    let amountInt = parseInt(amount);

    let newDelete = document.createElement("button")
    let newDetail = document.createElement("p");
    let newAmount = document.createElement("p");

    let newDiv = document.createElement("div");
    if (amountInt < 0) {
        newDiv.setAttribute("class", "list-item-minus list-item");
        newAmount.textContent = amountInt;
        amountInt = Math.abs(amountInt)
        calculateMinus(amountInt);
        decreaseBalance(amountInt);
    } else {
        newDiv.setAttribute("class", "list-item-plus list-item");
        newAmount.textContent = "+" + amountInt;
        calculatePlus(amountInt);
        increaseBalance(amountInt);
    }

    newDetail.textContent = details;

    newDelete.setAttribute("class", "delete");
    newDelete.setAttribute("onclick", "deleteBalance(event)");

    newDelete.textContent = "Delete";
    newDiv.appendChild(newDelete);
    newDiv.appendChild(newDetail);
    newDiv.appendChild(newAmount);

    updateHistory.appendChild(newDiv);

    document.getElementById("myForm").reset();
}

function calculateMinus(amountInt) {
    outcome += amountInt
    let newOutcome = document.getElementById("minus");
    newOutcome.innerHTML = `-Rp ` + outcome;
}

function calculatePlus(amountInt) {
    income += amountInt;
    let newIncome = document.getElementById("plus");
    newIncome.innerHTML = `+Rp ` + income;
}

function decreaseBalance(amountInt) {
    balance -= amountInt;
    let newBalance = document.getElementById("balance");
    newBalance.innerHTML = `Rp ` + balance;
}

function increaseBalance(amountInt) {
    balance += amountInt;
    let newBalance = document.getElementById("balance");
    newBalance.innerHTML = `Rp ` + balance;
}

function deleteBalance(event) {
    let list = event.target.parentNode;

    let deleteAmount = list.childNodes[2].innerText;
    deleteAmount = parseInt(deleteAmount)
    decreaseBalance(deleteAmount);

    if(deleteAmount >0){
    calculatePlus(-deleteAmount)
    }else{
        calculateMinus(deleteAmount)
    }


    list.parentNode.removeChild(list);    
}
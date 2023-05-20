document.getElementById("depositbtn").addEventListener("click",function(){
    let depositAmount = document.getElementById("depositmoney");
    let newdeposit = depositAmount.value;
    let newdepositint = parseFloat(newdeposit);

    let depositvalue = document.getElementById("depositsum");
    let depositvalueprevious = depositvalue.innerText;
    let depositvaluepreviousint= parseFloat(depositvalueprevious);
    let totaldeposit = depositvaluepreviousint + newdepositint;
    depositvalue.innerText = totaldeposit;

    // -----------------------add to balance--------

    let balanceamount = document.getElementById("balancemoney");
    let previousBalance =  balanceamount.innerHTML;
    let previousBalanceInt = parseFloat(previousBalance);
    let finalBalance = previousBalanceInt + newdepositint;
    balanceamount.innerHTML = finalBalance;

    console.log(previousBalance);

})
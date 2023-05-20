document.getElementById("withdrawbtn").addEventListener("click",function(){
    let withdrawAmount = document.getElementById("withdrawmoney");
    let newWithdraw = withdrawAmount.value;
    let nnewWithdrawint = parseFloat(newWithdraw );

    let withdrawvalue = document.getElementById("withdrawsum");
    let withdrawvalueprevious = withdrawvalue.innerText;
    let withdrawvaluepreviousint= parseFloat(withdrawvalueprevious);
    let totalwithdraw = withdrawvaluepreviousint + nnewWithdrawint ;
    withdrawvalue.innerText = totalwithdraw;

    // -----------------------deduct from balance--------

    let balanceamount = document.getElementById("balancemoney");
    let previousBalance =  balanceamount.innerHTML;
    let previousBalanceInt = parseFloat(previousBalance);
    let finalwithdrawBalance = previousBalanceInt -  nnewWithdrawint;
    balanceamount.innerHTML = finalwithdrawBalance;

    console.log(previousBalance);


 
})
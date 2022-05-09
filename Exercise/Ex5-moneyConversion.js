function Convert(){
    let fromCurrency = document.getElementById("FromCurrency").value;
    let toCurrency = document.getElementById("ToCurrency").value;
    let amount=document.getElementById("Amount").value ;
    let result =(amount*toCurrency)/fromCurrency ;
    document.getElementById("result").innerText=result;

}



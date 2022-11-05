//selected elements using their id
var initialPrice = document.querySelector('#initial-price');
var stocksQuant = document.querySelector('#stocks-quantity');
var currentPrice = document.querySelector('#current-price');
var submitBtn = document.querySelector('#submit-btn');
var outPutBox = document.querySelector('#output-box');


function profitOrLoss(){
   
        var ip = initialPrice.value;
        var qty = stocksQuant.value;
        var curr = currentPrice.value;
        calculate(ip, qty, curr);
        if(ip =="" || qty == ""||curr =="")
        {
            ShowMessage("Please fill up everything.");
        }
        else if(ip <=0 || qty <= 0||curr <=0 )
        {
            ShowMessage("Please enter the valid figures!");
        }

    }

function calculate(initial,quantity,current)
{
    if(initial>current)
    {
       var loss = (initial-current) * quantity;
       var lossPercentage = (loss/initial) * 100;
       ShowMessage( `Hey, the loss is ${loss} and the loss percentage is ${lossPercentage.toFixed(2)}% `) ;
    }
    else if(current>initial)
    {
        var profit = (current-initial) * quantity;
        var profitPercentage=(profit/initial) * 100;
        ShowMessage(`Hey the profit is ${profit} and the profit percentage is ${profitPercentage.toFixed(3)}%`);
    }
    else{
      ShowMessage(`No loss!!No profit!!`);
    }
}
function ShowMessage(message)
{
    outPutBox.innerText = message;
}

submitBtn.addEventListener("click",profitOrLoss);


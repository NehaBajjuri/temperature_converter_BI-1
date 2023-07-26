//selected elements using their id

function convertTemperature() {
    const temperatureInput = document.getElementById("temperature");
    const unitSelect = document.getElementById("unit");
    const temperature = parseFloat(temperatureInput.value);
    const selectedUnit = unitSelect.value;
    if (selectedUnit === " ")
    {
        ShowMessage("Please select an option.");
    }
    else if (selectedUnit === "celsius") {
        document.getElementById("kelvin").value = (temperature + 273.15).toFixed(2);
        document.getElementById("fahrenheit").value = ((temperature * 9/5) + 32).toFixed(2);
        document.getElementById("rankine").value = ((temperature + 273.15) * 9/5).toFixed(2);
    } else if (selectedUnit === "kelvin") {
        document.getElementById("celsius").value = (temperature - 273.15).toFixed(2);
        document.getElementById("fahrenheit").value = ((temperature * 9/5) - 459.67).toFixed(2);
        document.getElementById("rankine").value = (temperature * 9/5).toFixed(2);
    } else if (selectedUnit === "fahrenheit") {
        document.getElementById("celsius").value = ((temperature - 32) * 5/9).toFixed(2);
        document.getElementById("kelvin").value = ((temperature + 459.67) * 5/9).toFixed(2);
        document.getElementById("rankine").value = (temperature + 459.67).toFixed(2);
    } else if (selectedUnit === "rankine") {
        document.getElementById("celsius").value = ((temperature - 491.67) * 5/9).toFixed(2);
        document.getElementById("kelvin").value = (temperature * 5/9).toFixed(2);
        document.getElementById("fahrenheit").value = (temperature - 459.67).toFixed(2);
    }
}

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


const calculateTemp=() =>
{
    const numberTemp = document.getElementById('temp').value;
    const tempSelected = document.getElementById('temp_diff');
    const valueTemp=temp_diff.options[tempSelected.selectedIndex].value;
    

    const celToRem = (cel) =>
    {
        let resultArray = [(cel + 273.15),((cel* 9/5 )+ 32), ((cel*9/5) + 491.67)];
        return resultArray;
    }
    const kelToRem = (kel) =>
    {
        let resultArray = [( kel - 273.15),((kel * 9/5) - 459.67), (kel * 9/5)];
        return resultArray;
    }
    const farToRem = (far) =>
    {
        let resultArray = [( (far - 32)*(5/9)),( (far + 459.67)*(5/9)), ( far + 459.67)];
        return resultArray;
    }
    const ranToRem = (ran) =>
    {
        let resultArray = [( ( ran - 491.67) / 1.8),(ran / 1.8), (ran - 459.67)];
        return resultArray;
    }
    var resultArr = new Array(3);
    if(valueTemp== 'cel')
    {
let resultArr = celToRem(Number(numberTemp));

let resultContainer = document.getElementById('resultContainer');


resultContainer.innerHTML = `=${resultArr[0]} Kelvin<br>=${resultArr[1]} °Fahrenheit<br>=${resultArr[2]} °Rankine`;

    }
    else if(valueTemp== 'kel')
    {
        resultArr= kelToRem(numberTemp);
        resultContainer.innerHTML = `=${resultArr[0]} °Celsius <br>=${resultArr[1]} °Fahrenheit<br>=${resultArr[2]} °Rankine`;
    }
    else if(valueTemp== 'far')
    {
        resultArr= farToRem(numberTemp);
        resultContainer.innerHTML = `=${resultArr[0]} °Celsius<br>=${resultArr[1]} Kelvin <br>=${resultArr[2]} °Rankine`;
    }
    else if(valueTemp== 'ran')
    {
        resultArr= ranToRem(numberTemp);
        resultContainer.innerHTML = `=${resultArr[0]} °Celsius<br>=${resultArr[1]} Kelvin <br>=${resultArr[2]} °Farenheit`;
    }
}
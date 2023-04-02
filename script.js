const calculateTemp = () => {
    const inputTemp = document.getElementById('temp').value;

    const tempSelected = document.getElementById('temp_diff');
    const valueTemp = temp_diff.options[tempSelected.selectedIndex].value;

    // Celsius to Fahrenheit
    const celToFah = (cel) => {
        let fahrenheit = ((cel * 9 / 5) + 32).toFixed(1);
        return fahrenheit;
    }

    // Fahrenheit to Celsius
    const fahToCel = (fah) => {
        let celsius = ((fah - 32) * 5 / 9).toFixed(1);
        return celsius;
    }
    //celsius to kelvin
    // const celToKel = (cel) => {
    //     let kelvin = (cel + 273).toFixed(1);
    //     return kelvin;
    // }

    if (valueTemp == 'cel') {
        document.getElementById("result").innerHTML = (celToFah(inputTemp) + "&#176; Fahrenheit" );
        
    }
    else {
        document.getElementById("result").innerHTML = fahToCel(inputTemp) + "&#176; Celsius";
    }
}

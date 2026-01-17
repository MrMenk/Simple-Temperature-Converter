function convert() {
    const degree = document.getElementById('degree').value;
    const fromScale = document.getElementById('fromScale').value;
    const toScale = document.getElementById('toScale').value;
    const display = document.getElementById('resultDisplay');

    if (degree === "") {
        display.innerHTML = "--";
        return;
    }

    let temp = parseFloat(degree);
    let celsius;

    // 1. Convert Input to Celsius (The Pivot)
    if (fromScale === "Celsius") {
        celsius = temp;
    } else if (fromScale === "Fahrenheit") {
        celsius = (temp - 32) * (5 / 9);
    } else if (fromScale === "Kelvin") {
        celsius = temp - 273.15;
    }

    // 2. Convert Celsius to Target Scale
    let result;
    if (toScale === "Celsius") {
        result = celsius;
    } else if (toScale === "Fahrenheit") {
        result = (celsius * 9 / 5) + 32;
    } else if (toScale === "Kelvin") {
        result = celsius + 273.15;
    }

    // 3. Display Result (rounded to 2 decimal places)
    const unitMap = { "Celsius": "°C", "Fahrenheit": "°F", "Kelvin": "K" };
    display.innerHTML = `${result.toFixed(2)} ${unitMap[toScale]}`;
}
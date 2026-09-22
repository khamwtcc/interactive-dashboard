// Metric Converter

var form = document.getElementById("metric-form");
var input = document.getElementById("value");
var resultOutput = document.getElementById("conversion-result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    // Get the numeric value from the input field
    var value = parseFloat(input.value);

    // Get the selected conversion
    var conversionSelect = document.getElementById("conversion");
    var options = document.getElementsByTagName("option");
    var conversion = parseInt(options[conversionSelect.selectedIndex].value);

    var result;

    if (conversion === 1) {
        result = value * 2.54;
        resultOutput.innerHTML = value + " inches is " + result.toFixed(2) + " centimeters";

    } else if (conversion === 2) {
        result = value / 2.54;
        resultOutput.innerHTML = value + " centimeters is " + result.toFixed(2) + " inches";

    } else if (conversion === 3) {
        result = value * 0.3048;
        resultOutput.innerHTML = value + " feet is " + result.toFixed(2) + " meters";

    } else if (conversion === 4) {
        result = value / 0.3048;
        resultOutput.innerHTML = value + " meters is " + result.toFixed(2) + " feet";

    } else if (conversion === 5) {
        result = value * 0.9144;
        resultOutput.innerHTML = value + " yards is " + result.toFixed(2) + " meters";

    } else if (conversion === 6) {
        result = value / 0.9144;
        resultOutput.innerHTML = value + " meters is " + result.toFixed(2) + " yards";

    } else if (conversion === 7) {
        result = value * 1.60934;
        resultOutput.innerHTML = value + " miles is " + result.toFixed(2) + " kilometers";

    } else if (conversion === 8) {
        result = value / 1.60934;
        resultOutput.innerHTML = value + " kilometers is " + result.toFixed(2) + " miles";

    } else {
        resultOutput.innerHTML = "Invalid conversion selected.";
    }
});
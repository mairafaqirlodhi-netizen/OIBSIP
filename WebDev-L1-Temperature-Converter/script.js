alert("JavaScript is connected!");
const temperatureInput = document.getElementById("temperature");
const unitSelect = document.getElementById("unit");
const convertBtn = document.getElementById("convertBtn");
const message = document.getElementById("message");
const results = document.getElementById("results");

convertBtn.addEventListener("click", function () {
    const rawValue = temperatureInput.value.trim();
    const value = Number(rawValue);
    const unit = unitSelect.value;

    message.textContent = "";
    results.hidden = true;

    if (rawValue === "" || !Number.isFinite(value)) {
        message.textContent = "Please enter a valid temperature.";
        return;
    }

    let celsius;

    if (unit === "C") {
        celsius = value;
    } else if (unit === "F") {
        celsius = (value - 32) * 5 / 9;
    } else {
        celsius = value - 273.15;
    }

    if (celsius < -273.15) {
        message.textContent =
            "Temperature cannot be below absolute zero (-273.15°C).";
        return;
    }

    const fahrenheit = (celsius * 9 / 5) + 32;
    const kelvin = celsius + 273.15;

    document.getElementById("celsius").textContent =
        `Celsius: ${celsius.toFixed(2)} °C`;

    document.getElementById("fahrenheit").textContent =
        `Fahrenheit: ${fahrenheit.toFixed(2)} °F`;

    document.getElementById("kelvin").textContent =
        `Kelvin: ${kelvin.toFixed(2)} K`;

    results.hidden = false;
});

temperatureInput.addEventListener("input", function () {
    message.textContent = "";
    results.hidden = true;
});

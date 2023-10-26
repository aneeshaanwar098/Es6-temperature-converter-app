function convert(event) {
    event.preventDefault();

    console.log("function is running")

    let celsius = document.querySelector("#inputCelsius").value;
    let fahrenheit = celsius * 9/5 + 32;
    
    document.querySelector("#output").innerHTML = `The temperature in Fahrenheit is ${fahrenheit}`;

    console.log(celsius)
    console.log(fahrenheit)

}
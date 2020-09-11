import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const LCC = $("#CurrencyFrom").val();

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${LCC}`;
    console.log(process.env.API_KEY);

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $(".exchageFrom").text(`You requested information on ${response.name}.`);
      $(".ExchangeTo").text(
        `The humidity in ${zipcode} is ${response.main.humidity}%`
      );
      $(".showRates").text(
        `The temperature in fahrenheit is  ${temp(response.main.temp)} degrees.`
      );
      $(".result").text();
      $(".Error-Type").text();
    }
  });
});

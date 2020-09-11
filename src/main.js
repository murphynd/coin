import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#weatherLocation").click(function () {
    const LCC = $("#LLC").val();
    let amount = $(".amount").val();

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
      $(".LLC-choice").text(`${response}.`);
      $(".LLC-conversion").text(`${response}`);
      $(".date").text(`${response}.`);
      $(".showRates").text(`${response}`);
      $(".result").text(`${response}.`);
      $(".Error-Type").text(`${response}.`);
    }
  });
});

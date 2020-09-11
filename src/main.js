import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";
import ConversionService

$(document).ready(function () {
  $("#Exchange").submit(function () {
    event.preventDefault();
    const LCC = $("#LLC").val();
    let numinput = $("#numinput").val();
    $(".con-title").text(LCC);
    $(".num").text(numinput + " USD");

    let request = new XMLHttpRequest();
    const url = `https://v6.exchangerate-api.com/v6/${process.env.API_KEY}/latest/${LCC}`;

    request.onreadystatechange = function () {
      if (this.readyState === 4 && this.status === 200) {
        const response = JSON.parse(this.responseText);
        getElements(response);
        console.log(response);
      }
      console.log(this.response);
      console.log(this.status);
    };

    request.open("GET", url, true);
    request.send();

    function getElements(response) {
      $(".LLC-conversion").text(numinput * `${response.conversion_rates.USD}`);
      $(".date").text(`Last Updated ${response.time_last_update_utc}`);
      $(".showRates").text(`${response.conversion_rates}`);
      $(".result").text(`${response.result}.`);
      $(".author").text(`${response.terms_of_use}`);
    }
  });
});

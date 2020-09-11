import $ from "jquery";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./css/styles.css";

$(document).ready(function () {
  $("#Exchange").submit(function () {
    event.preventDefault();
    const LCC = $("#LLC").val();
    let numinput = $("#numinput").val();
    console.log(numinput);

    console.log(LLC);
    $(".num").text(numinput);

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
      $(".LLC-choice").text(`${response.base_code}.`);
      $(".LLC-conversion").text(`${response.conversion_rates.USD}`);
      $(".con-title").text("AUD");
      $(".date").text(`${response.time_last_update_utc}`);
      $(".showRates").text(`${response.conversion_rates}`);
      $(".result").text(`${response.result}.`);
      $(".author").text(`${response.terms_of_use}`);
    }
  });
});

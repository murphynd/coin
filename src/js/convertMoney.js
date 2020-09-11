export function convertMoney(response, numinput) {
  let num = numinput;
  $(".LLC-conversion").text(num * `${response.conversion_rates.USD}`);
}

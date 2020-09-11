export function getElements(response) {
  console.log(response);
  if (response) {
    $(".result").text(`${response.result}.`);
    $(".base").text(`${response.base_code}`);
    $(".date").text(`Last Updated ${response.time_last_update_utc}`);
    $(".author").text(`${response.terms_of_use}`);
  } else {
    $(".showErrors").text(`There was an error: ${response.message}`);
  }
}

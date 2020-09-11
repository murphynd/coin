# _Coin_ 💷 💶 💱 💵 💴

#### _Currency Exchanger, Sept 11,2020_

#### By _**Natalie Murphy**_

## Description

\_Currency Exchanger
For this week's project, you'll create a currency exchange application. A user should be able to type in an amount (in U.S. dollars) and then choose which currency it should be converted to (such as francs, marks, rupees, and so on). To determine the most recent exchange rate, your application will make an API call to the following exchange rate API.

- A user should be able to enter an amount (in U.S. dollars) and then specify another currency (such as the South Korean won).

* The user should then see the total amount they entered in converted currency.
* In the example above, a user might enter 10 dollars and then see that amount in South Korean won.

- Users should be able to convert U.S. currency into at least 5 other types of currency.
- If the API call results in an error (any message not a 200 OK), the application should return a notification that states what the error is.
- If the query response doesn't include that particular currency, the application should return a notification that states the currency in question doesn't exist.
  (Note: Even if you use a dropdown menu to specify currencies instead of a form field, you'll still need to add this functionality to your code.)

## Specs

spec: need input from user on currency choice, ammount, to what currency
input: \$50 USD to ? EUR
output: 50.00 USD and EUR selected

spec: a function to multiply the ammount user inputs against the output the api gives
input 1 usd is 1.5 EUR (user input was \$50)
output: 50 USD is 75 EUR

## Setup/Installation Requirements/API

- Clone this repository
- visit https://www.exchangerate-api.com/
- Input your email address and click the "Get Free Key" button.
- You'll be prompted to create an account with your email, first name and a password. Agree to the terms of use and click "Get Started!"
- At this point, you'll be able to access a dashboard that includes your API key as well as your remaining API calls for the month.
- copy that key and create a .env file within the project and type API_KEY =[Your Key].
- Save
- index.html

## Known Bugs

## Support and contact details

If you run into any issues or have questions, ideas or concerns contact Natalie Murphy at Nataliemurphy500@gmail.com or make a contribution to the code.

## Technologies Used

HTML
CSS
jQuery
Javascript

### License

MIT
Copyright (c) 2020 **_Natalie Murphy _**

import  '../scss/style.scss';

// function caclulate() {
//   // fetch('./assets/data/items.json', {
//   //   method: 'POST',
//   //   headers: {'Content-Type': 'applictation/json'}
//   // })
//   fetch('./assets/data/items.json')
//     .then(res => res.json())
//     .then(data => document.body.innerHTML = data[0].text);
// }
// caclulate();

const currencyEl_one = document.getElementById('currency-one');
const amountEl_one = document.getElementById('amount-one');
const currencyEl_two= document.getElementById('currency-two');
const amountEl_two = document.getElementById('amount-two');

const rateEl = document.getElementById('rate');
const swap = document.getElementById('swap');

// Fetch exchange rates and update the DOM 
function caclulate() {
  // console.log('RAN');
  const currency_one = currencyEl_one.value;
  const currency_two = currencyEl_two.value;
  // console.log(currency_one, currency_two);

  fetch(`https://api.exchangerate-api.com/v4/latest/${currency_one}`)
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      const rate = data.rates[currency_two];
      // console.log(rate);

      rateEl.innerText = `1 ${currency_one} = ${rate} ${currency_two}`;

      amountEl_two.value = (amountEl_one.value * rate).toFixed(2); // toFixed() メソッドは、数を固定小数点表記を用いて整形する
    });
}

// Event Listeners
currencyEl_one.addEventListener('change', caclulate);
amountEl_one.addEventListener('input', caclulate);
currencyEl_two.addEventListener('change', caclulate);
amountEl_two.addEventListener('input', caclulate);

// 切り替え処理
swap.addEventListener('click', () => {
  const temp = currencyEl_one.value;
  currencyEl_one.value = currencyEl_two.value;
  currencyEl_two.value = temp;
  caclulate();
})


caclulate();

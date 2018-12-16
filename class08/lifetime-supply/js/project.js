document.querySelector('#click-me').onclick = calculateTime;

function calculateTime() {
    let age = document.querySelector('#age').value;
    let maxage = document.querySelector('#max-age').value;
    let drink = document.querySelector('#item').value;
    let times = document.querySelector('#num-per-day').value;
    let calculation = (maxage - age ) * 365 * times;

    document.querySelector('#solution').innerHTML = calculation;
    document.querySelector('#drink').innerHTML = drink;
}

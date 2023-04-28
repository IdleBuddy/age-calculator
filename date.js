// Grabs Inputs //
const form = document.querySelector('form');
const dayIn = form['day'];
const monthIn = form['month'];
const yearIn = form['year'];

// Grabs Outputs //

const dayOut = document.getElementById('DD');
const monthOut = document.getElementById('MM');
const yearOut = document.getElementById('YYYY');

const submitBtn = document.querySelector('button');

// Grabs Current Date //

let date = new Date();
let newDay = date.getDate();
let newMonth = 1 + date.getMonth();
let newYear = date.getFullYear();
let months = [31, 28, 31, 30, 31, 30, 31, 30, 31, 30, 31];


// Validation //

function isDate() {
    const dateInput = document.querySelectorAll('input');
    const formError = document.getElementById('formerror');

    dateInput.forEach((i) => {

        if (!i.value) {
            i.style.borderColor = 'hsl(0, 100%, 67%)';
            formError.innerText = 'Enter Date';
            return false;
        } else {
            i.style.borderColor = 'hsl(0, 0%, 85%)';
            formError.innerText = '';
            return false;
        }
    });

    if (monthIn.value > 12) {
        monthIn.style.borderColor = 'hsl(0, 100%, 67%)';
        monthIn.parentElement.querySelector('p').innerText = 'Enter Valid Month';
        return false;
    } else {
        monthIn.parentElement.querySelector('p').innerText = '';
    }

    if (dayIn.value >= months[newMonth - 1]) {
        dayIn.style.borderColor = 'hsl(0, 100%, 67%)';
        dayIn.parentElement.querySelector('p').innerText = 'Enter Valid Day';
        return false;
    } else {
        dayIn.parentElement.querySelector('p').innerText = '';
    }

    if (yearIn.value > newYear) {
        yearIn.style.borderColor = 'hsl(0, 100%, 67%)';
        yearIn.parentElement.querySelector('p').innerText = 'Input cannot exceed current year';
        return false;
    } else {
        yearIn.parentElement.querySelector('p').innerText = '';
    }

    return true;
}

// Age Calculation //

form.addEventListener('submit', r => {
    r.preventDefault();

    const dateInput = document.querySelectorAll('input');
    const formError = document.getElementById('formerror');

    if (isDate()) {

        yearAge = newYear - yearIn.value;

        if (monthIn.value > newMonth) {
            var monthAge = 12 + newMonth - monthIn.value;
            yearAge--;
        }

        var monthAge = newMonth - monthIn.value;

        if (dayIn.value > newDay) {
            var dayAge = newDay + months[newMonth - 1];
            var monthAge = newMonth--;
        }

        var dayAge = newDay - dayIn.value;

        dayOut.innerHTML = dayAge;
        monthOut.innerHTML = monthAge;
        yearOut.innerHTML = yearAge;
    }

    
});
// tires 
const tirePrices = {
    '205/55R16': 100000,
    '225/45R17': 120000,
    '235/55R18': 150000,
    // Add more tire sizes and prices as needed
  };
  
  function calculateAmount() {
    const serviceSelect = document.getElementById('service');
    const amountInput = document.getElementById('amount');
    const selectedService = serviceSelect.value;
  
    if (selectedService === 'tirePressure') {
      amountInput.value = '500';
    } else if (selectedService === 'punctureFixing' || selectedService === 'valves') {
      amountInput.value = '5000';
    } else {
      amountInput.value = '';
    }
  }
  
  window.addEventListener('DOMContentLoaded', () => {
    const carModelInput = document.getElementById('carModel');
    carModelInput.addEventListener('input', calculateAmount);
  });

// login the user
  const form = document.querySelector("form");
  let
eField = form.querySelector(".email"),
    eInput = eField.querySelector("input"),
    pField = form.querySelector(".password"),
    pInput = pField.querySelector("input");

form.onsubmit = (e) => {
    e.preventDefault();

    (eInput.value == "") ? eField.classList.add("shake", "error"): checkEmail();
    (pInput.value == "") ? pField.classList.add("shake", "error"): checkPass();

    setTimeout(() => {
        eField.classList.remove("shake");
        pField.classList.remove("shake");
    }, 500);

    eInput.onkeyup = () => { checkEmail(); }
    pInput.onkeyup = () => { checkPass(); }

    function checkEmail() {
        let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (!eInput.value.match(pattern)) {
            eField.classList.add("error");
            eField.classList.remove("valid");
            let errorTxt = eField.querySelector(".error-txt");

            (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address": errorTxt.innerText = "Email can't be blank";
        } else {
            eField.classList.remove("error");
            eField.classList.add("valid");
        }
    }

    function checkPass() {
        if (pInput.value == "") {
            pField.classList.add("error");
            pField.classList.remove("valid");
        } else {
            pField.classList.remove("error");
            pField.classList.add("valid");
        }
    }

    if (!eField.classList.contains("error") && !pField.classList.contains("error")) {
        window.location.href = form.getAttribute("action");
    }
}

// script for time
const timeInput = document.getElementById('time');
        timeInput.addEventListener('input', function() {
            const timeValue = this.value;
            const timeParts = timeValue.split(':');
            let hours = parseInt(timeParts[0], 10);
            const minutes = timeParts[1];

            if (hours > 12) {
                hours -= 12;
                this.value = `${hours}:${minutes} PM`;
            } else if (hours === 0) {
                hours = 12;
                this.value = `${hours}:${minutes} AM`;
            } else if (hours === 12) {
                this.value = `${hours}:${minutes} PM`;
            } else {
                this.value = `${hours}:${minutes} AM`;
            }
        });

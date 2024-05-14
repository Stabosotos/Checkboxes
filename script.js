const myCheckBox = document.getElementById("myCheckBox");
const visaBtn = document.getElementById("visaBtn");
const masterCardBtn = document.getElementById("masterCardBtn");
const paypalBtn = document.getElementById("paypalBtn");
const mySubmit = document.getElementById("mySubmit");
const messege = document.getElementById("messege");
const payment = document.getElementById("payment");


mySubmit.onclick = function(){
    if (myCheckBox.checked) {
        messege.textContent = "You are subbed!";
    }
    else {
        messege.textContent = "You are NOT subbed";
    }

    if (visaBtn.checked) {
        messege2.textContent = "Payment with Visa!";
    }
    else if (masterCardBtn.checked) {
        messege2.textContent = "Payment with Master Card!";
    }
    else if (paypalBtn.checked) {
        messege2.textContent = "Payment PayPal";
    }
    else {
        messege2.textContent = "You must select payment."
    }
}   

let timerE1 = document.getElementById("timer");
let quotedisplay = document.getElementById("quoteDisplay");
let quoteInput = document.getElementById("quoteInput");
let speedTypingTest = document.getElementById("speedTypingTest");

let submitBtn = document.getElementById("submitBtn");
let resetBtn = document.getElementById("resetBtn");

let resultE1 = document.getElementById("result");
let spinnerComponent = document.getElementById("spinnerComponent");


let counter = 0;
let uniqueId = setInterval(function() {
    counter += 1;
    timerE1.textContent = counter;
}, 1000);

function fetchapi() {
    spinnerComponent.classList.remove("d-none")
    speedTypingTest.classList.add("d-none")

    let url = "https://apis.ccbp.in/random-quote";
    let properties = {
        method: "GET"
    }

    fetch(url, properties)
        .then(function(response) {
            return response.json()
        })
        .then(function(jsonData) {

            spinnerComponent.classList.add("d-none")
            speedTypingTest.classList.remove("d-none")
            quotedisplay.textContent = jsonData.content;
        })
}
fetchapi();




resetBtn.addEventListener("click", function() {
    fetchapi();
    clearInterval(uniqueId)
    timerE1.textContent = "0";
    quoteInput.value = "";
    resultE1.textContent = "";
    counter = 0;
    uniqueId = setInterval(function() {
        counter += 1;
        timerE1.textContent = counter;
    }, 1000);


})
submitBtn.addEventListener("click", function() {
    if (quotedisplay.textContent === quoteInput.value) {
        clearInterval(uniqueId);
        let ANS_in_seconds = timerE1.textContent
        resultE1.textContent = "You typed in " + ANS_in_seconds + " seconds"
        timerE1.textContent = "0";

    } else if (quotedisplay.textContent !== quoteInput.value) {
        resultE1.textContent = "You typed incorrect sentence"
    }
})
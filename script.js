let counterValue = 1;

document.getElementById("plusButton").addEventListener("click", function() {
    counterValue++;
    updateMessage();
});

document.getElementById("minusButton").addEventListener("click", function() {
    if (counterValue > 1) { // Prevents negative or zero values in the message
        counterValue--;
    }
    updateMessage();
});

function updateMessage() {
    document.getElementById("counterValue").textContent = counterValue;
}

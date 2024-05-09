const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const resetBtn = document.getElementById("reset");
let count = 0;

decreaseBtn.onclick = function() {
        count--;

        if (count < 0)
                count = 0;

        document.getElementById("counter").textContent = count;
}

increaseBtn.onclick = function() {
        count++;
        document.getElementById("counter").textContent = count;
}

resetBtn.onclick = function() {
        count = 0;
        document.getElementById("counter").textContent = count;
}
const inputValues = document.querySelectorAll(".side-input")
const calculateHypotenuseBtn = document.querySelector("#calculate-hypotenuse-btn")
const outputEl = document.querySelector(".output")

function calculateHypotenuse() {
    const a = inputValues[0].value
    const b = inputValues[1].value
    const c = Math.sqrt(a ** 2 + b ** 2)
    outputEl.innerText = "The length of hypotenuse is " + c
}

calculateHypotenuseBtn.addEventListener("click", calculateHypotenuse)
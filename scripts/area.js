const inputSides = document.querySelectorAll(".input-text")
const calculateButton = document.querySelector(".btn-check")
const outputEl = document.querySelector(".output")

function areaOfTriangle(base, height) {
    const area = (1 / 2) * Number(base) * Number(height)
    return area
}

function calculateArea() {
    const base = inputSides[0].value
    const height = inputSides[1].value

    if (base != 0 && height != 0) {
        const area = areaOfTriangle(base, height)
        outputEl.innerText = "Area of the triangle is " + area
    } else {
        outputEl.innerText = "Please enter the values correctly"
    }
}

calculateButton.addEventListener("click", calculateArea)
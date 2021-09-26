const inputAngles = document.querySelectorAll(".angle-input")
const isTriangleBtn = document.querySelector("#is-triangle-btn")
const outputEl = document.querySelector(".output")

function sumOfAngles(angle1, angle2, angle3) {
    const sum = Number(angle1) + Number(angle2) + Number(angle3)
    return sum
}

isTriangleBtn.addEventListener("click", function isTriangle() {
    const angle1 = inputAngles[0].value
    const angle2 = inputAngles[1].value
    const angle3 = inputAngles[2].value

    if (angle1 > 0 && angle2 > 0 && angle3 > 0) {
        const sum = sumOfAngles(angle1, angle2, angle3)
        if (sum == 180) {
            output("Yay, the angles form a triangle!")
        } else {
            output("Oh Oh! The angle doesn't form a triangle")
        }
    } else {
        output("angles cannot be zero in a triangle")
    }

})

function output(message) {
    outputEl.innerText = message
}
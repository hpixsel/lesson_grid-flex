const grid = document.querySelector(".grid__demo")
const flex = document.querySelector(".flex__demo")

const gridChange = () => {
    grid.classList.toggle("grid")
    grid.classList.toggle("without")
}

const flexChange = () => {
    flex.classList.toggle("flex")
    flex.classList.toggle("without")
}
const slider = document.querySelector(`#slider`)
const left = document.querySelector(`#left`)
const right = document.querySelector(`#right`)
const list = document.querySelector(`#indicatorList`)

const images = [
    `https://images.wallpaperscraft.ru/image/single/mitsubishi_lancer_evo_x_tiuning_96277_3840x2400.jpg`,
    `https://images.wallpaperscraft.ru/image/single/bmw_avtomobil_bamper_191131_3840x2160.jpg`,
    `https://images.wallpaperscraft.ru/image/single/mashina_seryj_mokryj_147750_3840x2160.jpg`
]

let indicators
for (let i = 0; i < 3; i++) {
    li = document.createElement(`li`)
    li.classList = `indicator`
    list.appendChild(li)

}

indicators = document.querySelectorAll(`.indicator`)

let i = 0
slider.src = `${images[0]}`
indicators[0].style.borderColor = `red`

left.addEventListener(`click`, (event) => {
    event.preventDefault();
    prev()

})


right.addEventListener(`click`, (event) => {
    event.preventDefault();
    next()
})

function prev() {
    i = i - 1
    if (i < 0) {
        i = images.length - 1;
    }
}
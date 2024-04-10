const calendar = document.getElementById('calendar')
let day = 8
let selected = 27

for(let i = 0; i < 7 * 4; i++) {
    if(day + i > 31) {
        day = -i + 1
    }

    const element = document.createElement("p")
    if(day + i == 27) {
        element.classList.add('bg-vert', 'text-white', 'font-bold')
    } else if(i > 9) {
        element.classList.add('bg-vertclair', 'text-vert', 'font-bold')
    } else {
        element.classList.add('text-gray-400', 'font-semibold')
    }
    element.classList.add('text-xl', 'w-12', 'h-12', 'p-[2rem]', 'rounded-full', 'flex', 'items-center', 'justify-center')
    const text = document.createTextNode(`${day + i}`)
    element.appendChild(text)
    calendar.appendChild(element)
}

//////////////////////////////////////

const hours = document.getElementById('hours')
let current = 18
let hovered = 17

for(let i = 10; i < 24; i++) {

    const element = document.createElement("p")
    if(i == current) {
        element.classList.add('bg-vert', 'text-white', 'border-gray-300')
    } else if(i == hovered) {
        element.classList.add('bg-vertclair', 'text-vert', 'border-white')
    } else {
        element.classList.add('text-black', 'border-gray-300')
    }
    element.classList.add('w-full', 'h-16', 'rounded-xl', 'border-[2px]', 'text-[1.5rem]', 'flex', 'items-center', 'justify-center')
    const text = document.createTextNode(`${i}:00`)
    element.appendChild(text)
    hours.appendChild(element)
}
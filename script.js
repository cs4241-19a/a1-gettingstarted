swal("Welcome!", "My name is Percy!", "success")

const nextBtn = document.querySelector('.nextBtn')
const container = document.querySelector('.images')
const text = document.querySelector('text')

nextBtn.addEventListener('click', nextSlide)

const sentences = [
    "Someday I'll wake up and become a chicken nugget.",
    "My favorite Pokemon is Psyduck.",
    "My favorite champion in League of Legends is Teemo."
]

let counter = 1

function nextSlide(){
    container.animate([{opacity:'0.1'}, {opacity:'1.0'}], {duration:1000, fill:'forwards'});
    if(counter < 3) counter++
    else counter = 1
    container.style.backgroundImage = `url(fun_facts/${counter}.jpg)`
    document.getElementById("text").innerHTML = sentences[counter-1]
}
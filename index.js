const imageContainer = document.querySelector('.img-container')
const counter = document.getElementById('count')

let heartClickCount = 0

imageContainer.addEventListener('click',function(e){
    heartClickCount++
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')
    heart.classList.add('heart-animation')

    const clientX = e.clientX
    const clientY = e.clientY

    const elementX = imageContainer.getBoundingClientRect().left
    const elementY = imageContainer.getBoundingClientRect().top

    const heartX = clientX - elementX
    const heartY = clientY - elementY

    heart.style.left = heartX + 'px'
    heart.style.top = heartY + 'px'
    // heart.style.transform = `scale(0) translate(0%,-50%)`
    this.appendChild(heart)
    counter.innerText = heartClickCount
    // setTimeout(()=> heart.remove(),1000)

})
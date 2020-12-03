let bg = document.getElementById('bg')
let moon = document.getElementById('moon')
let mountain = document.getElementById('mountain')
let road = document.getElementById('road')
let text = document.getElementById('text')

window.addEventListener('scroll', function () {
  let value = window.scrollY

  bg.style.top = value * 0.5 + 'px'
  moon.style.top = value * 1.5 + 'px'
  mountain.style.top = -value * 0.15 + 'px'
  road.style.top = value * 0.15 + 'px'
  text.style.top = value * 1 + 'px'
})

let i = 0
let about =
  "I'm a dedicated mother of a wonderful 4 year old boy. I love spending time with him and my lovely better half. I'm passionate and enjoy the many challenges that life brings along. I'm a full stack web developer leveraging healthcare and beauty and arts background to build a more intuitive user experience on the web. Currently earning a certificate in full stack development from Carleton University in Ottawa. Known as an innovative problem solver passionate about developing apps, with a focus on mobile-first design and development. With each project, my aim is to best engage my audience for an impactful user experience. I’m excited to leverage my skills as part of a fast-paced, quality-driven team to build better experiences on the web."
let characters = about.split('')
setInterval(function () {
  $('.anim-typewriter').append(characters[i])
  i++
  if (i === characters.length) {
    clearInterval(this)
  }
}, 50)

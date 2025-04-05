const config = document.querySelector('.config')
const texto = document.querySelector('.texto')
const sobre = document.querySelector('.sobre')
const contato = document.querySelector('.contato')
const settins = document.querySelector('.settins')
const x = document.querySelector('.x')
const menu = document.querySelector('#menu')

document.getElementById('menu').addEventListener('click', function() {
  texto.style.display = 'block'
  texto.style.background = 'rgb(46, 63, 110)'
  texto.style.padding = '30px'
  texto.style.borderRadius = '8px'
  texto.style.height = '100%'
  texto.style.width = '23%'
  texto.style.position = 'absolute'
  sobre.style.cursor = 'pointer'
  contato.style.cursor = 'pointer'
  settins.style.cursor = 'pointer'
  texto.style.top = '0'
  texto.style.right = '0'
  x.style.right = '15px'
  x.style.position = 'absolute'

  menu.style.display = 'none'
  config.style.display = 'none'
})

document.querySelector('.x').addEventListener('click', function(){
  document.querySelector('.texto').style.display = 'none'
  document.querySelector('#menu').style.display = 'flex'
  location.reload()
})

// Mudança de cor
document.getElementById("botao").addEventListener("click", function() {
  document.body.classList.toggle("tema-preto")

if (document.body.classList.contains("tema-preto")) {
  localStorage.setItem("theme", "dark")
} else {
  localStorage.setItem("theme", "light")
}
})

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("tema-preto")
}

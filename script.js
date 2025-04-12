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

// Pergunta para salvar as tarefas
document.querySelector('.botao').addEventListener('click', function(){
  document.body.classList.toggle("fazer-tarefa")
  document.body.classList.toggle("area-texto")
  document.body.classList.toggle("salvar")
})

// Menu hamburger
document.getElementById('menu').addEventListener('click', function() {
  document.body.classList.toggle("hamburger")
})

document.querySelector('.x').addEventListener('click', function(){
  document.querySelector('.texto').style.display = 'none'
  document.querySelector('#menu').style.display = 'flex'
})

// Cria o botão
const botao = document.createElement("button")
const texto = document.createElement("textarea")

botao.innerHTML = "Salvar"
botao.className = "salvar"
texto.className = "texto-tarefa"

botao.onclick = function () {
    alert("Tarefa salva com sucesso!")
}

const pergunta = document.querySelector(".pergunta")

pergunta.appendChild(texto)
pergunta.appendChild(botao)

// Salvar as tarefas
const tarefa = texto.value
document.querySelector('.salvar').addEventListener('click', function(){
  document.querySelector('.tarefa').innerHTML = tarefa
  tarefa.style.display = 'flex'
})

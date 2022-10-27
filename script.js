const hamb = document.querySelector('.hamb') // Escuchar y ejecutar evento
// console.log(hamb)
const nav = document.querySelector('nav') // Agregarle y quitar clase
// console.log(nav)

hamb.addEventListener('click', () => {
  nav.classList.toggle('open')
})

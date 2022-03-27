var btn = document.querySelector('div.btn')
var h1 = document.querySelector('h1')
var h12 = document.querySelectorAll('h1')[1]
const h13 = document.querySelectorAll('h1')[2]
btn.style.background = 'red'
btn.innerHTML = 'Dont click here anymore'
btn.style.top = '120%'

h1.style.fontSize = '5px'

h12.style.background = 'green'

h13.style.background = 'red'

h13.innerHTML = 'Testes Funcionando'



function Clicar() {

   var clic = document.querySelector('.btn')
   
   if (

    clic.style.background === 'blue'

   )

   clic.style.background = 'pink'
       
    else (

    clic.style.background = 'blue'

    )

}

var clic2 = document.querySelector('.btn2')
clic2.addEventListener('click', Clicar2)
clic2.addEventListener('mouseout', Mouze)
clic2.addEventListener('mouseenter',Enter)

function Clicar2() {
    
   if ( clic2.style.background === 'blue')
    clic2.style.background = 'yellow'
    else if (clic2.style.background === 'yellow')
    clic2.style.background = 'green'
    else (clic2.style.background = 'red')
}
function Mouze() {
    if (clic2.style.background != 'red')
    clic2.style.background = 'blue'
    else (clic2.style.background = 'green')
}
function Enter() {
    if (clic2.style.background === 'green')
       clic2.style.background = 'blue' 
}
const main = document.getElementById('main')
const btnGenerate = document.getElementById('btn-generate')
const URL= 'https:images.pexels.com/photos/325153/pexels-photo-325153.jpeg?auto=compress&cs=tinysrgb&w=1600' 

btnGenerate.addEventListener('click', createCard)

function createCard(){
    const card = document.createElement('div')
    card.classList.add('card')

    const btnPlus = document.createElement('button')  
    btnPlus.classList.add('plus')
    btnPlus.textContent = '+'

    const imgCard = document.createElement('img')
    imgCard.src = URL
    imgCard.alt = 'imagen de la card'
    imgCard.classList.add('img-card')

    const btnAdd = document.createElement('button')
    btnAdd.classList.add('btn-boton')
    btnAdd.textContent = 'Add To Cart'

    card.appendChild(btnPlus)
    card.appendChild(imgCard)
    card.appendChild(btnAdd)

    main.appendChild(card)
}
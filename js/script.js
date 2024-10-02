document.addEventListener('DOMContentLoaded', () => {
  //opções de cartão
  const cardArray = [
    {
      name: 'beijinho',
      img: './img/beijinho-de-coco.webp'
    },
    {
      name: 'brigadeiro',
      img: './img/brigadeiro.webp'
    },
    {
      name: 'cocada',
      img: './img/cocada-de-maracuja.jpg'
    },
    {
      name: 'casquinha de sorvete',
      img: './img/casquinha de sorvete.webp'
    },
    {
      name: 'doces',
      img: './img/docess.avif'
    },
    {
      name: 'bombom',
      img: './img/bombom.avif'
    },
    {
      name: 'doces',
      img: './img/docess.avif'
    },
    {
      name: 'casquinha de sorvete',
      img: './img/casquinha de sorvete.webp'
    },
    {
      name: 'bombom',
      img: './img/bombom.avif'
    },
    {
      name: 'brigadeiro',
      img: './img/brigadeiro.webp'
    },
    {
      name: 'beijinho',
      img: './img/beijinho-de-coco.webp'
    },
    {
      name: 'cocada',
      img: './img/cocada-de-maracuja.jpg'
    },
  ]
  cardArray.sort(() => 0.5 - Math.random())

  const grid = document.querySelector('.grid')
  const resultDisplay = document.querySelector('#acertos')
  const errorDisplay = document.querySelector('#erros')
  const errorTitle = document.querySelector('#erro')
  const acertoTitle = document.querySelector('#acerto')
  const btnreiniciar = document.querySelector('#btn-reiniciar')
  let erro = 0;
  let cardsChosen = []
  let cardsChosenId = []
  let cardsWon = []

  //create your board
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      const card = document.createElement('img')
      card.setAttribute('src', 'img/quadrado-azul.png')
      card.setAttribute('data-id', i)
      card.addEventListener('click', flipCard)
      grid.appendChild(card)
    }
  }

  //check for matches
  function checkForMatch() {
    const cards = document.querySelectorAll('img')
    const optionOneId = cardsChosenId[0]
    const optionTwoId = cardsChosenId[1]

    if (optionOneId == optionTwoId) {
      cards[optionOneId].setAttribute('src', 'img/quadrado-azul.png')
      cards[optionTwoId].setAttribute('src', 'img/quadrado-azul.png')
      alert('Você clicou na mesma imagem!')
      erro++
      errorDisplay.textContent = " " + erro
    }
    //mudar cor de acerto//
    else if (cardsChosen[0] === cardsChosen[1]) {
      alert('Você encontrou!')
      cards[optionOneId].setAttribute('src', 'img/white.png')
      cards[optionTwoId].setAttribute('src', 'img/white.png')
      cards[optionOneId].removeEventListener('click', flipCard)
      cards[optionTwoId].removeEventListener('click', flipCard)
      cardsWon.push(cardsChosen)
    } else {
      cards[optionOneId].setAttribute('src', 'img/quadrado-azul.png')
      cards[optionTwoId].setAttribute('src', 'img/quadrado-azul.png')
      alert('Desculpe, tente novamente!')
      erro++
      errorDisplay.textContent = " " + erro
    }
    cardsChosen = []
    cardsChosenId = []
    resultDisplay.textContent = " " + cardsWon.length
    if (cardsWon.length === cardArray.length / 2) {
      acertoTitle.style.textContent = " "
      errorDisplay.style.display = "none"
      errorTitle.style.display = "none"
      btnreiniciar.style.display = "flex"
      resultDisplay.textContent = ' Parabéns! Você encontrou todos eles!'
    }
  }

  //flip your card
  function flipCard() {
    let cardId = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenId.push(cardId)
    this.setAttribute('src', cardArray[cardId].img)
    if (cardsChosen.length === 2) {
      setTimeout(checkForMatch, 500)
    }
  }

  createBoard()
})
function reiniciar() {
  location.reload()
}

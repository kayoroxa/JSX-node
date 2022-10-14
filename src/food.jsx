// const fila = require('fila')

let quantidade = 0

// fila.add(_add)
function _add() {
  debugger
  quantidade++
  try {
    document.querySelector(
      '.quantidade'
    ).textContent = `Quantidade: ${quantidade}`
  } catch (error) {
    console.log()
  }
}

//

export default function food({ name }) {
  console.log(document.querySelector('button'))
  return (
    <div class="comida">
      <p class="name">Nome: {name}</p>
      <p class="length">{name.length} letras</p>
      <p class="quantidade">Quantidade: {quantidade}</p>
      <button>Adicionar quantidade</button>
    </div>
  )
}

//global

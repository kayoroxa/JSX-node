// const fila = require('fila')

let quantidade = 0

// fila.add(_add)

export default function food({ name }) {
  return (
    <div class="comida">
      <p class="name">Nome: {name}</p>
      <p class="length">{name.length} letras</p>
      <p class="quantidade">Quantidade: {quantidade}</p>
      <button onClick={_add}>Adicionar quantidade</button>
    </div>
  )
}

//global

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

function Fila() {
  const data = []
  return {
    add: _new => data.push(_new),
    get: () => data,
  }
}

const fila = 'oi'

module.exports = fila

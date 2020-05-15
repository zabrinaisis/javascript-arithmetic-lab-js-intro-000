function add(x, y) {
  return (x + y)
}

function subtract(x, y) {
  if (x <= y) {
    return (y - x)
  } else {
    return ((-1)*(y - x))
  }
}

function multiply(x, y) {
  return (x * y)
}

function divide(x, y) {
  return (x / y)
}

function increment(x) {
  return (x += 1)
}

function decrement(x) {
  return (x -= 1)
}

function makeInt(word) {
  return (parseInt(word, 10))
}

function preserveDecimal(word) {
  return (parseFloat(word))
}

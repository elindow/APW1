document.addEventListener('DOMContentLoaded', () => {
  const grid = document.querySelector('.grid')
  let squares = Array.from(document.querySelectorAll('.grid div'))
  const ScoreDisplay = document.querySelector('#score')
  const StartBtn = document.querySelector('#Start-button')
  const width = 10
  let nextRandom = 0
  let timerId

  // the tetrominos
  const ltetromino = [
    [1, width + 1, width * 2 + 1, 2],
    [width, width + 1, width + 2, width * 2 + 2],
    [1, width + 1, width * 2 + 1, width * 2],
    [width, width * 2, width * 2 + 1, width * 2 + 2]
  ]
  const zTetromino = [
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1],
    [0, width, width + 1, width * 2 + 1],
    [width + 1, width + 2, width * 2, width * 2 + 1]
  ]

  const tTetromino = [
    [1, width, width + 1, width + 2],
    [1, width + 1, width + 2, width * 2 + 1],
    [width, width + 1, width + 2, width * 2 + 1],
    [1, width, width + 1, width * 2 + 1]
  ]

  const oTetromino = [
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1],
    [0, 1, width, width + 1]
  ]

  const iTetromino = [
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3],
    [1, width + 1, width * 2 + 1, width * 3 + 1],
    [width, width + 1, width + 2, width + 3]
  ]

  const theTetrominos = [ltetromino, zTetromino, oTetromino, tTetromino, iTetromino]
  console.log(theTetrominos[0][0])

  let currentPosition = 4
  let currentRotation = 0
  let random = Math.floor(Math.random() * theTetrominos.length)
  console.log(random)
  let current = theTetrominos[random][0]

  function draw () {
    current.forEach(index => {
      squares[currentPosition + index].classList.add('tetromino')
    })
  }
  function undraw () {
    current.forEach(index => {
      squares[currentPosition + index].classList.remove('tetromino')
    })
  }
  timerId = setInterval(moveDown, 600)

  function control (e) {
    if (e.keyCode === 37) {
      moveLeft()
    } else if (e.keyCode === 38) {
      rotate()
    } else if (e.keyCode === 39) {
      moveRight()
    } else if (e.keyCode === 40) {
      moveDown()
    }
  }
  document.addEventListener('keyup', control)

  function moveDown () {
    undraw()
    currentPosition += width
    draw()
    freeze()
  }

  function freeze () {
    if (current.some(index => squares[currentPosition + index + width].classList.contains('taken'))) {
      current.forEach(index => squares[currentPosition + index].classList.add('taken'))
      random = nextRandom
      nextRandom = Math.floor(Math.random() * theTetrominos.length)
      current = theTetrominos[random][currentRotation]
      currentPosition = 4
      draw()
      displayShape()
    }
  }
  function moveLeft () {
    undraw()
    const isAtLeftEdge = current.some(index => (currentPosition + index) % width === 0)

    if (!isAtLeftEdge) currentPosition -= 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition += 1
    }
    draw()
  }
  function moveRight () {
    undraw()
    const isAtRightEdge = current.some(index => (currentPosition + index) % width === width - 1)
    if (!isAtRightEdge) currentPosition += 1
    if (current.some(index => squares[currentPosition + index].classList.contains('taken'))) {
      currentPosition -= 1
    }
    draw()
  }
  function rotate () {
    undraw()
    currentRotation++
    if (currentRotation === current.length) {
      currentRotation = 0
    }
    current = theTetrominos[random][currentRotation]
    draw()
  }
  const displaySquares = document.querySelectorAll('mini-grid div')
  const displayWidth = 4
  let displayIndex = 0

  const upNextTetrominos = [
    [1, displayWidth + 1, displayWidth * 2 + 1, 2],
    [0, displayWidth, displayWidth + 1, displayWidth * 2 + 1], // zTetromino
    [1, displayWidth, displayWidth + 1, displayWidth + 2], // tTetromino
    [0, 1, displayWidth, displayWidth + 1], // oTetromino
    [1, displayWidth + 1, displayWidth * 2 + 1, displayWidth * 3 + 1] // iTetromino
  ]
  function displayShape () {
    // remove any trace of a tetromino form the entire grid
    displaySquares.forEach(square => {
      square.classList.remove('tetromino')
      // square.style.backgroundColor = ''
    })
    upNextTetrominos[nextRandom].forEach(index => {
      displaySquares[displayIndex + index].classList.add('tetromino')
      // displaySquares[displayIndex + index].style.backgroundColor = colors[nextRandom]
    })
  }
  startBtn.addEventListener('click', () =>{
    if (timerId) {
      clearInterval(timerId)
      timerId = null
    } else {
      draw()
      timerId = setInterval(moveDown, 500)
      nextRandom = Math.floor(Math.random()*theTetrominos.length)
      displayShape()
    }
  })
})

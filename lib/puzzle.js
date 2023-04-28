// todo
// console.log('hello')

// 1. select the button element
const btn = document.querySelector('#show-hint')
console.log(btn)
// 2. attach a microphone - add event listener  - click
btn.addEventListener('click', (event) => {
  // 3. add the class active to the hint element
  const hint = document.querySelector('.hint')
  hint.classList.add('active')
})

const canMove = (clickedTile) => {
  // console.log(clickedTile.cellIndex);
  const tileColumn = clickedTile.cellIndex;
  // get the empty tile
  const emptyTile = document.querySelector('.empty');
  // console.log(emptyTile.cellIndex);
  const emptyTileColumn = emptyTile.cellIndex;

  // ARE THEY ON THE SAME ROW
  // #rowIndex
  // console.log(clickedTile.parentElement);
  const tileRowIndex = clickedTile.parentElement.rowIndex;
  const emptyRowIndex = rowIndex = emptyTile.parentElement.rowIndex;
  // console.log(tileRowIndex)
  // console.log(emptyRowIndex)

  return ((emptyTileColumn === tileColumn + 1 && tileRowIndex === emptyRowIndex) ||
    (emptyTileColumn === tileColumn - 1 && tileRowIndex === emptyRowIndex) ||
    (emptyTileColumn === tileColumn && tileRowIndex === emptyRowIndex + 1) ||
    (emptyTileColumn === tileColumn && tileRowIndex === emptyRowIndex - 1))
}

const moveTile = (clickedTile) => {
  const emptyTile = document.querySelector('.empty');
  // move the tile
  // 1. replace the content with the element content
  emptyTile.innerText = clickedTile.innerText
  clickedTile.innerText = ''
  // 2. change the empty class
  // 2.1 remove the empty
  emptyTile.classList.remove('empty')
  // 2.2 add the empty class to the clicked tile
  clickedTile.classList.add('empty')

}

// 1. Select all the tiles
const tiles = document.querySelectorAll('td');
console.log(tiles);
// 2.1 loop over collection
tiles.forEach((tile) => {
  // 2.2 to add event listener to every tile
  tile.addEventListener('click', (event) => {
    // 3. check if it suppose to move or not ->
    // if it has an empty neighbour
    // beign next
    clickedTile = event.currentTarget
    console.log(canMove(clickedTile))
    if (canMove(clickedTile)) {
      moveTile(clickedTile)
    }
  })

})

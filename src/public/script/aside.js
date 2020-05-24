const {
  ipcMain
} = require('electron')

// ipcMain.on('explorer', (event, value) => {
//   console.log(value)
// })

const btnClose = document.querySelector('#btn-close')
const searchElement = document.querySelector('button#get')
const searchInput = document.querySelector('input#search-input')

const getWiewContent = () => document.querySelector('div#content-group')

btnClose.addEventListener('click', () => {
  console.log('Fechando!')
  getWiewContent().classList.remove('window-actived')
})

searchElement.addEventListener('click', (event) => {
  if (searchInput.value) {
    const link = searchInput.value
    console.log(link)
  }
})

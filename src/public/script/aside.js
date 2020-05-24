// const {
//   ipcMain
// } = require('electron')

// ipcMain.on('explorer', (event, value) => {
//   console.log(value)
// })

const btnClose = document.querySelector('#btn-close')
const searchElement = document.querySelector('button#get')
const searchInput = document.querySelector('input#search-input')
const prevHistory = document.querySelector('button#prev-history')
const nextHistory = document.querySelector('button#next-history')

prevHistory.addEventListener('click', () => {
  window.history.back()
})
nextHistory.addEventListener('click', () => {
  window.history.forward()
})

const getWiewContent = () => document.querySelector('div#content-group')

// fecha a tab View
btnClose.addEventListener('click', () => {
  console.log('Fechando!')
  clear_history()
  getWiewContent().classList.remove('window-actived')
})

// destroy o elemento web atual
const destroyWebview = () => {
  const parent = document.querySelector('div#webview webview')
  if (parent) {
    parent.remove()
  }
}

// cria um webview e add ao seu parent
const createWebview = (url) => {
  destroyWebview()

  const parent = document.querySelector('div#webview')

  let element = document.createElement('webview')
  element.src = `https://www.${url}`;
  element.setAttribute('id', 'content')

  parent.appendChild(element)
}

// Pesquisa as urls
searchElement.addEventListener('click', (event) => {
  if (searchInput.value) {
    const link = searchInput.value

    createWebview(link)
    loadWeview()
  }
})

const loadWeview = () => {
  try {
    const title = document.querySelector('label#title')
    const webview = document.querySelector('webview')
    // const indicator = document.querySelector('.indicator')

    const loadstart = () => {
      title.innerHTML = '.......'
      // indicator.style.display = 'block'
      // indicator.innerText = 'loading...'
    }

    const loadstop = () => {
      const endereco = (webview.src) ? webview.src : 'https://'
      console.log(endereco)
      const getEndereco = () => endereco.replace('https://', '')

      title.innerHTML = getEndereco()
      // indicator.innerText = ''
      // indicator.style.display = 'none'
    }

    webview.addEventListener('did-start-loading', loadstart)
    webview.addEventListener('did-stop-loading', loadstop)
  } catch (err) {
    console.warn(err)
  }
}

const clear_history = () => {
  console.log('------------- History -------------')
  window.document.cookie = null
  window.localStorage = null
  window.history = null
}

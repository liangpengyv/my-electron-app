const information = document.getElementById('info')
information.innerText = `本应用正在使用 Chrome（v${versions.chrome()}）, Node.js（v${versions.node()}）, Electron （v${versions.electron()}）`

const titleInput = document.getElementById('title-input')
const setTitleButton = document.getElementById('set-title-btn')
setTitleButton.addEventListener('click', () => {
  const title = titleInput.value
  window.electronAPI.setTitle(title)
})

const openFileButton = document.getElementById('open-file-btn')
const filePathText = document.getElementById('file-path-text')
openFileButton.addEventListener('click', async () => {
  const filePath = await window.electronAPI.openFile()
  filePathText.innerText = filePath
})
console.log(document.getElementById('elem'))
document.getElementById('elem').innerHTML = '<div>hello</div>'
document.getElementById('elem').addEventListener('drop', (event) => {
  event.preventDefault()
  console.log(event)
})
document.getElementById('elem').addEventListener('dragover', (event) => {
  console.log(event)
})

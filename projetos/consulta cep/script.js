var submitButton = document.querySelector('#app form button')
var zipCodeField = document.querySelector('#app form input')
var content = document.querySelector('#app main')

submitButton.addEventListener('click', run)

function run(event) {
  event.preventDefault()

  var zipCode = zipCodeField.value

  // Remover espaços e pontos do CEP
  zipCode = zipCode.replace(/\s/g, '')
  zipCode = zipCode.replace('.', '')

  // Verificar se o CEP tem o número correto de caracteres (8)
  if (zipCode.length !== 8) {
    alert('CEP inválido. Digite um CEP com 8 caracteres.')
    return
  }

  axios
    .get('https://viacep.com.br/ws/' + zipCode + '/json/')
    .then(function (response) {
      content.innerHTML = ''

      createLine(response.data.logradouro)
      createLine(response.data.localidade + '/' + response.data.uf)
    })
    .catch(function (error) {
      console.log(error)
    })
}

function createLine(text) {
  var line = document.createElement('p')
  var texto = document.createTextNode(text)

  line.appendChild(texto)
  content.appendChild(line)
}

export default function () {
  // src
  // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < 15; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

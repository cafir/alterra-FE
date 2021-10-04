

function playingWithAsterik(n) {
  let string = ''
  for (let i = 0; i <= n; i++) {
    for (let j = 1; j <= n- i; j++) {
      string +=' '
    }
    for (let k = 1; k <= i ; k++) {
      string += '* '
    }
    string += '\n'
  }
  console.log(string)
}
playingWithAsterik(5);
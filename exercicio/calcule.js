function mdc(a, b) {
  if (b === 0) {
    return a
  }
  else {
    return mdc(b, a % b)
  }
}
console.log(mdc(70, 67))

const resultMdc = mdc(70, 67)
module.exports = resultMdc
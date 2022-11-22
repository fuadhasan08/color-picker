function componentToHex(c) {
  var hex = c.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}

function rgbToHex(r, g, b) {
  return componentToHex(r) + componentToHex(g) + componentToHex(b)
}

function hexToRgb(hex) {
  const rgbChar = ['r', 'g', 'b']

  const normal =
    hex.match(/([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i) ||
    hex.match(/^#([0-9a-f]{2})([0-9a-f]{2})([0-9a-f]{2})$/i)
  if (normal) {
    return normal.slice(1).reduce((a, e, i) => {
      a[rgbChar[i]] = parseInt(e, 16)
      return a
    }, {})
  }

  const shorthand =
    hex.match(/([0-9a-f])([0-9a-f])([0-9a-f])$/i) ||
    hex.match(/^#([0-9a-f])([0-9a-f])([0-9a-f])$/i)
  if (shorthand) {
    return shorthand.slice(1).reduce((a, e, i) => {
      a[rgbChar[i]] = 0x11 * parseInt(e, 16)
      return a
    }, {})
  }

  alert('Enter a Valid Format ex: fff or #fff')
}

function reduceRGBfrom255(minLimit, objKey) {
  let number = 255
  let i = 1
  let gap = number - minLimit
  let arr = []
  while (i <= 10) {
    arr.push({ [objKey]: Math.abs(Math.round(number)) })
    number -= gap / 10
    i++
  }
  return arr
}

function reduceRGBfromself(maxLimit, obkey) {
  let mainNum = 0
  let i = 1
  let gap = maxLimit - mainNum
  let arr = []
  while (i <= 11) {
    arr.push({ [obkey]: Math.abs(Math.round(maxLimit)) })
    maxLimit -= gap / 10
    i++
  }
  return arr
}

function sendRgb(val, key) {
  let thirdArr = [
    ...reduceRGBfrom255(val, `${key}`),
    ...reduceRGBfromself(val, `${key}`),
  ]
  return Object.assign({}, thirdArr)
}

const itertor = [
  0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
]

export { rgbToHex, hexToRgb, sendRgb, itertor }

import React, { useState } from 'react'
import { rgbToHex, hexToRgb, sendRgb, itertor } from './components/utils'

import SingleColor from './components/SingleColor'
import UI from './components/UI'

const App = () => {
  const [color, setColor] = useState(rgbToHex(241, 80, 37))

  const [rgbR, setRgbR] = useState(sendRgb(241, 'r'))

  const [rgbG, setRgbG] = useState(sendRgb(80, 'g'))

  const [rgbB, setRgbB] = useState(sendRgb(37, 'b'))

  const handleSubmit = (e) => {
    let newColor = hexToRgb(color)

    setRgbR(sendRgb(newColor.r, 'r'))
    setRgbG(sendRgb(newColor.g, 'g'))
    setRgbB(sendRgb(newColor.b, 'b'))

    e.preventDefault()
  }

  return (
    <>
      <UI handleSubmit={handleSubmit} color={color} setColor={setColor} />
      <SingleColor
        itertor={itertor}
        rgbR={rgbR}
        rgbG={rgbG}
        rgbB={rgbB}
        rgbToHex={rgbToHex}
      />
    </>
  )
}

export default App

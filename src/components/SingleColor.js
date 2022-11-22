import React from 'react'

const SingleColor = ({ itertor, rgbR, rgbG, rgbB, rgbToHex }) => {
  return (
    <>
      <section className='colors'>
        {itertor.map((item, index) => {
          let className = false
          let weight = 100
          weight -= index * 10
          if (index >= itertor.length / 2) {
            className = 'color-light'
          }
          return (
            <article
              className={`color ${className}`}
              style={{
                background: `rgb(${rgbR[index].r}, ${rgbG[index].g}, ${rgbB[index].b})`,
              }}
              key={index}
            >
              <p className='percent-value'>{Math.abs(weight)}%</p>
              <p className='color-value'>
                {rgbToHex(rgbR[index].r, rgbG[index].g, rgbB[index].b)}
              </p>
            </article>
          )
        })}
      </section>
    </>
  )
}

export default SingleColor

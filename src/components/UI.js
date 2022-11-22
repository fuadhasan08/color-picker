import React from 'react'

const UI = ({ handleSubmit, color, setColor }) => {
  return (
    <>
      <section className='container'>
        <h3>color generator</h3>
        <form>
          <input
            type='text'
            placeholder='Ex: ff3456'
            className='null'
            value={color}
            onChange={(e) => {
              setColor(e.target.value)
            }}
          />
          <button type='submit' className='btn' onClick={handleSubmit}>
            submit
          </button>
        </form>
      </section>
    </>
  )
}

export default UI

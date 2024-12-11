import React, { useState } from 'react'
import { Data } from './Data'

const Quiz = () => {
  const [data, setData] = useState(Data)
  const [index, setIndex] = useState(0)
  const [score, setScore] = useState(0)

  const next = () => {
    if (index < data.length - 1) setIndex(index + 1)
    else {
      document.querySelector('.score').innerHTML = `<p>Your Score is: ${score}/5`
      document.querySelector('.quiz').innerHTML = ""
      let nextBtn = document.querySelector("#next")
      nextBtn.innerHTML = "Play Again"
      nextBtn.addEventListener('click', () => {
        window.location.reload()
      })
    }

    const checked = document.querySelectorAll('.checkedValue')
    checked.forEach((curVal) => {
      curVal.checked = false
    })
  }


  const handleInput = (event) => {
    let chooseVal = event.target.value
    if (chooseVal === data[index].ans)
      setScore(score + 1)
    // console.log(chooseVal)
  }
  return (
    <div className="container">
      <div className="quiz">
        {/* question */}
        <div>
          <h1>{data[index].q}</h1>
        </div>
        {/* options */}
        <div className="option">
          <input name='select' type="radio" onChange={handleInput} className='checkedValue' value={data[index].a} />
          <p>A: {data[index].a}</p>
        </div>
        <div className="option">
          <input name='select' type="radio" onChange={handleInput} className='checkedValue' value={data[index].b} />
          <p>B: {data[index].b}</p>
        </div>
        <div className="option">
          <input name='select' type="radio" onChange={handleInput} className='checkedValue' value={data[index].c} />
          <p>C: {data[index].c}</p>
        </div>
        <div className="option">
          <input name='select' type="radio" onChange={handleInput} className='checkedValue' value={data[index].d} />
          <p>D: {data[index].d}</p>
        </div>

      </div>

      <div className="score"></div>
      <div className="btns">
        <button id="next" onClick={next}>Next</button>
      </div>
    </div> 
  )
}

export default Quiz

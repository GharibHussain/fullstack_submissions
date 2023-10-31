import { useState } from 'react'


const Button = (props) => {
  return(
    <button onClick={props.handleClick}>{props.text}</button>
  )
}

const StatisticLine = ({value, text}) => {
  return(
    <tr>
      <td>{text}</td>
      <td>{value}</td>
    </tr> 
  )
}

const Statistics = (props) => {
  if (props.total === 0){
    return (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
     
  }

  return (
    <div>
      <h2>statistics</h2>
      <table>
        <tbody>
          <StatisticLine value={props.good} text={'good'} />
          <StatisticLine value={props.neutral} text={'neutral'} />
          <StatisticLine value={props.bad} text={'bad'} />
          <StatisticLine value={props.total} text={'all'} />
          <StatisticLine value={props.average} text={'average'} />
        </tbody>
      </table>
      
    </div>
  )
}
  




const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const [total, setTotal] = useState(0)
  const [average, setAverage] = useState(0)



  const handleClickGood = () => {
    const newGood = good + 1
    setGood(newGood)
    const newTotal = newGood + bad + neutral
    setTotal(newTotal)
    
    const newAverage = (newGood + (-1*bad)) / newTotal
    setAverage(newAverage)
  }
  const handleClickNeutral = () => {
    const newNeutral = neutral + 1;
    setNeutral(newNeutral)
    const newTotal = good + bad + newNeutral
    setTotal(newTotal)

    const newAverage = (good + (-1*bad)) / newTotal
    setAverage(newAverage)
  }
  
  const handleClickBad = () => {
    const newBad = bad + 1
    setBad(newBad)
    const newTotal = good + newBad + neutral
    setTotal(newTotal)

    const newAverage = (good + (-1*newBad)) / newTotal
    setAverage(newAverage)
  }

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClick={handleClickGood} text='good' />
      <Button handleClick={handleClickNeutral} text='neutral' />
      <Button handleClick={handleClickBad} text='bad' />

      <Statistics good={good} bad={bad} neutral={neutral} total={total} average={average}/>
    </div>
  )
}

export default App
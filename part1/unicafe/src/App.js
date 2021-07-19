import React, { useState } from 'react'

const Header = ( { text }) => {
  return(
    <h1>{text}</h1>
  )
}

const Button = ({text, handleClick}) => (
  <button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => <tr>
  <td>{text}</td>
  <td>{value}</td>
</tr>

const Statistics = ({ good, neutral, bad }) => {

  const factor = {
    good: 1,
    neutral: 0,
    bad: -1
  }

  const total =  good + neutral + bad;

  const average = (good*factor.good + neutral*factor.neutral + bad*factor.bad) / total;

  const percentage = (number, factor) => number * factor * 100 / total;   

  return(
    <>
      <Header text="statistics" />
      {total !== 0 ? (
        <table>
          <tbody>
            <Statistic text="good" value={good} />
            <Statistic text="neutral" value={neutral} />
            <Statistic text="bad" value={bad} />
            <Statistic text="all" value={total} />
            <Statistic text="average" value={average} />
            <Statistic text="positive" value={percentage(good, factor.good)} />
          </tbody>
        </table>
      ) : (
        <div>No feedback given</div>
      )}
    </>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  
  return (
    <div>
      <Header text="give feedback" />
      <div>
        <Button text="good" handleClick={() => setGood(good + 1)} />
        <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
        <Button text="bad" handleClick={() => setBad(bad + 1)} />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  );
}

export default App

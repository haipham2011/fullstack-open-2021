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

const Feedback = ({ text, number }) => <p>{text} {number}</p>

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
        <div>
        <Feedback text="good" number={good} />
        <Feedback text="neutral" number={neutral} />
        <Feedback text="bad" number={bad} />
        <Feedback text="all" number={total} />
        <Feedback text="average" number={average} />
        <Feedback text="positive" number={percentage(good, factor.good)} />
      </div>
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

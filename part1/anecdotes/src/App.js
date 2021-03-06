import React, { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blod tests when dianosing patients'
  ]
   
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState([0, 0, 0, 0, 0, 0, 0])

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

  const handleClick = () => {
    setSelected(getRandomInt(0, anecdotes.length-1));
  }

  const handleVotes = () => {
    const newVotes = [...votes];
    newVotes[selected] += 1;
    setVotes(newVotes);
  }

  const handleMax = () => {
    let max = 0;
    votes.forEach((vote, index) => {
      if(vote > votes[max]){
        max = index;
      }
    });
    return max;
  }

  return (
    <div>
      <h1>Anecdotes of the day</h1>
      {anecdotes[selected]} <br/>
      has {votes[selected]} votes
      <div>
        <button onClick={handleVotes}>vote</button>
        <button onClick={handleClick}>next anecdotes</button>
      </div>
      <h1>Anecdotes with most votes</h1>
      {anecdotes[handleMax()]} <br/>
      has {votes[handleMax()]} votes
    </div>
  )
}

export default App
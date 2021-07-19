import React from 'react';

const Header = ({ course }) => {
    return (
      <h1>{course}</h1>
    )
  }
  
  const Part = ({ name, exercise }) => {
    return (
      <p>
        {name} {exercise}
      </p>
    )
  }
  
  const Content = ({ parts }) => {
    return (
      <div>
        {parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercises} />)}
      </div>
    )
  }
  
  const Total = ({ parts }) => {
    return (
      <p><b>total of {parts.reduce((accumulator, currentValue) => accumulator + currentValue.exercises, 0)} exercises</b></p>
    )
  }
  
  const Course = ({ course }) => {
    return (
      <div>
        <Header course="Web development curriculum" />
        <Header course={course.name} />
        <Content parts={course.parts} />
        <Total parts={course.parts} />
      </div>
    )
  }

export default Course;
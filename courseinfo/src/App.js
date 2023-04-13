const App = () => {

  const course = {
    id: 1,
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2,
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3,
      },
      {
        name: 'testing',
        exercises: 10,
        id: 4
      },
      {
        name : 'total test', 
        exercises: 12,
        id: 5
      }
    ],
  };

  return (
      <Course course={course} />
  );
};

const Course = ({course}) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
  );
}

const Header = ({course}) => {
  return (
    <>
      <h1>{course}</h1>
    </>
  );
};

const Content = ({parts}) => {
  return (
    <>
      {
        parts.map((part) => (
          <Part key={part.id} part={part.name} exercises={part.exercises} />))
      }
    </>
  );
};

const Part = ({part, exercises}) => {
  return (
    <>
      <p>
        {part} {exercises}
      </p>
    </>
  );
};

const Total = ({parts}) => {
  const total = parts.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.exercises;

  }, 0);
  console.log(total);
  return (
    <>
      <p>
        <b>Total of {total} exercises</b>
      </p>
    </>
  );
};

export default App;

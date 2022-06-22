import Header from "./components/Header";
import Content from './components/Content';
import Total from './components/Total';

export interface CourseParts {
  name: string,
  exerciseCount: number
}

const App = () => {
  const courseName = "Half Stack application development";
  const courseParts: CourseParts[] = [
    {
      name: "Fundamentals",
      exerciseCount: 10
    },
    {
      name: "Using props to pass data",
      exerciseCount: 7
    },
    {
      name: "Deeper type usage",
      exerciseCount: 14
    }
  ];

  return (
    <div>
      <Header title={courseName} />
      <Content courses={courseParts} />
      <Total courses={courseParts} />
    </div>
  );
};

export default App;

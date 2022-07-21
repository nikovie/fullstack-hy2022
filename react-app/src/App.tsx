import Header from "./components/Header";
import Content from './components/Content';
import Total from './components/Total';
import { courseName, courseParts, totalExercises } from "./data";

const App = () => {
  return (
    <div>
      <Header title={courseName} />
      <Content courses={courseParts} />
      <Total exercises={totalExercises} />
    </div>
  );
};

export default App;

import { CourseParts } from "../App";

const Course = ({ name, exerciseCount }: CourseParts) => {
  return <p>{name} {exerciseCount}</p>;
}

const Content = ({ courses }: { courses: CourseParts[] }): any => {
  return courses.map(({ name, exerciseCount }: CourseParts, index) => {
    return (
      <Course key={index} name={name} exerciseCount={exerciseCount} />
    )
  })
};

export default Content

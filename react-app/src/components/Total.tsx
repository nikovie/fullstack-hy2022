import { CourseParts } from "../App";

const Total = ({ courses }: { courses: CourseParts[] }) => {
  return (
    <p>
      Number of exercises{" "}
      { courses.reduce((carry, part) => carry + part.exerciseCount, 0) }
    </p>
  )
}

export default Total

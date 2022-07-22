import Part from "./Part";
import { CoursePart } from "../types"

const Content = ({ courses }: { courses: CoursePart[] }) => {
  return (
    <>
      {courses.map((course: CoursePart) => 
        <Part key={course.name} course={course} />
      )}
    </>
  )
};

export default Content

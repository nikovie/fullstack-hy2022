import { CoursePart } from "../types"

const Part = ({ course }: { course: CoursePart }) => {
  let content = <></>;

  const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
  };

  switch (course.type) {
    case "normal":
      content =
        <div>
          <strong>{course.name} {course.exerciseCount}</strong>
          <p>Type: {course.type}</p>
          <p>Description: {course.description}</p>
        </div>    
      break;
    case "groupProject":
      content =
        <div>
          <strong>{course.name} {course.exerciseCount}</strong>
          <p>Type: {course.type}</p>
          <p>Group project count: {course.groupProjectCount}</p>
        </div>
      break;
    case "submission":
      content =
        <div>
          <strong>{course.name} {course.exerciseCount}</strong>
          <p>Type: {course.type}</p>
          <p>Description: {course.description}</p>
          <p>Submission link: {course.exerciseSubmissionLink}</p>
        </div>
      break;
    case "special":
      content = 
        <div>
          <strong>{course.name} {course.exerciseCount}</strong>
          <p>Type: {course.type}</p>
          <p>Description: {course.description}</p>
          <p>Requirements: {course.requirements.join(", ")}</p>
        </div>
      break;
    default:
      assertNever(course)
      break;
  }

  return content
}

export default Part

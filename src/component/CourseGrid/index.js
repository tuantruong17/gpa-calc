import { useState } from "react";
import "./styles.css";
function CourseGrid(prop) {
  // shallow copy all courses
  const [state, setState] = useState({
    courses: prop.courses.map((element) => ({ ...element })),
  });

  const letterToPoints = {
    A: 4,
    "A-": 3.67,
    "B+": 3.33,
    B: 3,
    "B-": 2.67,
    "C+": 2.33,
    C: 2,
    "C-": 1.67,
    D: 1,
    F: 0,
  };

  const handleDeleteRow = (i) => {
    setState({ courses: state.courses.filter((_, idx) => i !== idx) });
  };

  const handleResetRow = (i) => {
    console.log(state.courses);
  };

  const handleCreditHourChange = (i, val) => {
    setState({
      courses: state.courses.map((course, idx) => {
        if (idx === i) {
          return { ...course, creditHour: val };
        }
        return course;
      }),
    });
  };

  const getGradePoints = (course) =>
    (course.grade * course.creditHour).toFixed(2);

  return (
    <>
      <div className="course-row">
        <div className="course-col title">Dept & Course</div>
        <div className="course-col title">Credit Hours</div>
        <div className="course-col title">Grade</div>
        <div className="course-col title">Major / Program GPA</div>
        <div className="course-col title">Grade Points</div>
        <div className="course-col"></div>
      </div>
      {state.courses.map((course, i) => (
        <div className="course-row" key={i}>
          <div className="course-col">
            <input type="text" />
          </div>
          <div className="course-col">
            <input
              type="number"
              value={course.creditHour}
              onChange={(e) => handleCreditHourChange(i, e.target.value)}
            />
          </div>
          <div className="course-col">
            <input type="text" />
          </div>
          <div className="course-col">
            <input type="checkbox" />
          </div>
          <div className="course-col">{getGradePoints(course)}</div>
          <div className="course-col">
            <button className="course-button" onClick={() => handleResetRow(i)}>
              Reset
            </button>
            <button
              className="course-button"
              onClick={() => handleDeleteRow(i)}
            >
              Delete
            </button>
          </div>
        </div>
      ))}
      <div className="course-footer">
        <button className="course-button">Reset Semester Info</button>
        <button className="course-button">Add New Row</button>
      </div>
    </>
  );
}

export default CourseGrid;

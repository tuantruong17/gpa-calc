import { useState } from "react";
import { FaTrash } from 'react-icons/fa';
import "./styles.css";


function CourseGrid(prop) {
  // shallow copy all courses
  const [state, setState] = useState({
    courses: prop.courses.map((element) => ({ ...element })),
  });

  const setCourses = (state) => {
    setState(state);
    prop.setCourses(state.courses);
  };

  const handleDeleteRow = (i) => {
    setCourses({ courses: state.courses.filter((_, idx) => i !== idx) });
  };

  const handleResetRow = (i) => {
    setCourses({
      courses: state.courses.map((course, idx) => {
        if (idx === i) {
          return { creditHour: "", letterGrade: "", isMajor: false };
        }
        return course;
      }),
    });
  };

  const handleCreditHourChange = (i, val) => {
    setCourses({
      courses: state.courses.map((course, idx) => {
        if (idx === i) {
          return { ...course, creditHour: val };
        }
        return course;
      }),
    });
  };

  const handleLetterGradeChange = (i, val) => {
    setCourses({
      courses: state.courses.map((course, idx) => {
        if (idx === i) {
          return { ...course, letterGrade: val.toUpperCase() };
        }
        return course;
      }),
    });
  };

  const getGradePoints = (course) => {
    const grade = prop.letterToPoints[course.letterGrade] ?? -1;
    if (grade === -1 || +course.creditHour === 0) {
      return "";
    }
    return (grade * course.creditHour).toFixed(2);
  };

  const handleResetSemester = () => {
    setCourses({
      courses: [
        { creditHour: "", letterGrade: "", isMajor: false },
        { creditHour: "", letterGrade: "", isMajor: false },
        { creditHour: "", letterGrade: "", isMajor: false },
        { creditHour: "", letterGrade: "", isMajor: false },
        { creditHour: "", letterGrade: "", isMajor: false },
      ],
    });
  };

  const handleAddNewRow = () => {
    setCourses({
      courses: [
        ...state.courses,
        { creditHour: "", letterGrade: "", isMajor: false },
      ],
    });
  };

  return (
    <>
      <div className="course-row">
        <div className="course-col title">Dept & Course</div>
        <div className="course-col title">Credit Hours</div>
        <div className="course-col title">Grade</div>
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
			<select value={course.letterGrade} onChange={(e) => handleLetterGradeChange(i, e.target.value)}>
				<option value=""></option>
			    {Object.keys(prop.letterToPoints).map((key, index) => (
					<option value={key}>{key}</option>
				))}
			</select>
            {/*<input
              style={{ textTransform: "uppercase" }}
              type="text"
              value={course.letterGrade}
              onChange={(e) => handleLetterGradeChange(i, e.target.value)}
            />*/}
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
              <FaTrash />
            </button>
          </div>
        </div>
      ))}
      <div className="course-footer">
        <button
          className="course-button"
          onClick={() => {
            handleResetSemester();
          }}
        >
          Reset Semester Info
        </button>
        <button
          className="course-button"
          onClick={() => {
            handleAddNewRow();
          }}
        >
          Add New Row
        </button>
      </div>
    </>
  );
}

export default CourseGrid;

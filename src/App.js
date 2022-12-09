import "./App.css";
import SectionDivider from "./component/SectionDivider";
import CumulativeGrid from "./component/CumulativeGrid";
import { useState } from "react";
import ReviewGrid from "./component/ReviewGrid";
import CourseGrid from "./component/CourseGrid";

function App() {
  const [cumulativeHour, setCumulativeHour] = useState(0);
  const [cumulativePoint, setCumulativePoint] = useState(0);

  const initCourses = [
    { creditHour: "", letterGrade: "", isMajor: false },
    { creditHour: "", letterGrade: "", isMajor: false },
    { creditHour: "", letterGrade: "", isMajor: false },
    { creditHour: "", letterGrade: "", isMajor: false },
    { creditHour: "", letterGrade: "", isMajor: false },
  ];
  const [courses, setCourses] = useState(initCourses);

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

  return (
    <div className="App-body">
      <h1>GPA Calculator</h1>
      <div className="App-container">
        <p>
          This GPA calculator was designed for Augustana College grading system.
          These calculations should not be considered your official GPA at
          Augustana College or any other institution.
        </p>
        <p>
          This GPA calculator should be used for undergraduate and graduate
          students only . This calculator does not take into consideration law
          GPA calculation.
        </p>
        <p>( * marks required fields )</p>
        <SectionDivider header={"Current Cumulative Information"} />
        <CumulativeGrid
          setHour={setCumulativeHour}
          setPoint={setCumulativePoint}
        ></CumulativeGrid>
        <SectionDivider header={"Semester Information"} />
        <CourseGrid
          courses={courses}
          setCourses={setCourses}
          letterToPoints={letterToPoints}
        ></CourseGrid>
        <SectionDivider header={"GPA Totals"} />
        <ReviewGrid
          cumulativeHour={cumulativeHour}
          cumulativePoint={cumulativePoint}
          courses={courses.filter(
            (course) =>
              course.creditHour > 0 &&
              letterToPoints[course.letterGrade] !== undefined
          )}
          letterToPoints={letterToPoints}
        />
      </div>
    </div>
  );
}

export default App;

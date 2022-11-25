import "./App.css";
import SectionDivider from "./component/SectionDivider";
import CumulativeGrid from "./component/CumulativeGrid";
import { useState } from "react";
import ReviewGrid from "./component/ReviewGrid";
import CourseGrid from "./component/CourseGrid";

function App() {
  const [cumulativeHour, setCumulativeHour] = useState(0);
  const initCourses = [
    { creditHour: "", grade: 4, isMajor: true },
    { creditHour: "", grade: 3, isMajor: false },
    { creditHour: "", grade: 2, isMajor: true },
    { creditHour: "", grade: 3, isMajor: false },
    { creditHour: "", grade: 2, isMajor: true },
  ];
  const [cumulativePoint, setCumulativePoint] = useState(0);
  const [courses, setCourses] = useState(initCourses);
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
        <CourseGrid courses={courses}></CourseGrid>
        <SectionDivider header={"GPA Totals"} />
        <ReviewGrid
          cumulativeHour={cumulativeHour}
          cumulativePoint={cumulativePoint}
        />
      </div>
    </div>
  );
}

export default App;

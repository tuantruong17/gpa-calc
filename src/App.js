import "./App.css";
import SectionDivider from "./component/SectionDivider";
import CumulativeGrid from "./component/CumulativeGrid";
import { useState } from "react";
import ReviewGrid from "./component/ReviewGrid";
import CourseGrid from "./component/CourseGrid";
import Header from "./component/Header";
import Footer from "./component/Footer";

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
    <>
      <Header />
      <div className="App-body">
        <h1>GPA Calculator</h1>
        <div className="App-container">
          <p>
            This GPA calculator is designed for the grading system at Augustana
            College in Rock Island, IL <br />
            Use your unofficial transcript, available in Arches, to enter
            current cumulative information. If you need assistance using this
            calculator, see your advisor or visit the Office of Advising in Olin
            320.
            <br />
            Helpful resources: Augustana's{" "}
            <a href="https://www.augustana.edu/academics/catalog/academic-policies/grading">
              Grading System
            </a>{" "}
            and{" "}
            <a href="https://www.augustana.edu/academics/catalog/academic-policies/academic-standing">
              Academic Standing Policy
            </a>
            .
          </p>
          <p>( * marks required fields )</p>
          <SectionDivider
            header={
              "Current Cumulative Information (Do not include courses in progress.)"
            }
          />
          <CumulativeGrid
            setHour={setCumulativeHour}
            setPoint={setCumulativePoint}
          ></CumulativeGrid>
          <SectionDivider header={"Current Semester Information"} />
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
      <Footer />
    </>
  );
}

export default App;

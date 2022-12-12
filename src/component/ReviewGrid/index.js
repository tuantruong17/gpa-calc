import "./styles.css";
function ReviewGrid(prop) {
  const sumSemesterCreditHour = prop.courses.reduce(
    (a, b) => a + +b.creditHour,
    0
  );

  const sumSemesterPoint = prop.courses.reduce(
    (a, b) => a + prop.letterToPoints[b.letterGrade] * b.creditHour,
    0
  );

  const sumCreditHour = sumSemesterCreditHour + prop.cumulativeHour;
  const sumPoint = sumSemesterPoint + prop.cumulativePoint;

  return (
    <>
      <div className="review-row header">
        <div className="review-col">GPA Type</div>
        <div className="review-col"># of Credits</div>
        <div className="review-col">Grade Points</div>
        <div className="review-col">GPA</div>
      </div>
      <div className="review-row">
        <div className="review-col">Semester</div>
        <div className="review-col">
          {sumSemesterCreditHour === 0 ? "" : sumSemesterCreditHour}
        </div>
        <div className="review-col">
          {sumSemesterPoint === 0 ? "" : sumSemesterPoint.toFixed(2)}
        </div>
        <div className="review-col">
          {sumSemesterCreditHour === 0 || sumSemesterPoint === 0
            ? ""
            : (sumSemesterPoint / sumSemesterCreditHour).toFixed(4)}
        </div>
      </div>
      <div className="review-row">
        <div className="review-col">Cumulative</div>
        <div className="review-col">
          {sumCreditHour === 0 ? "" : sumCreditHour}
        </div>
        <div className="review-col">
          {sumPoint === 0 ? "" : sumPoint.toFixed(2)}
        </div>
        <div className="review-col">
          {sumCreditHour === 0 || sumPoint === 0
            ? ""
            : (sumPoint / sumCreditHour).toFixed(4)}
        </div>
      </div>
    </>
  );
}

export default ReviewGrid;

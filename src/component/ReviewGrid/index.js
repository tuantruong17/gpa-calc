import "./styles.css";
function ReviewGrid(prop) {
  return (
    <>
      <div className="review-row header">
        <div className="review-col">GPA Type</div>
        <div className="review-col"># of Credits</div>
        <div className="review-col">Grade Points</div>
        <div className="review-col">GPA</div>
      </div>
      <div className="review-row">
        <div className="review-col">Cumulative</div>
        <div className="review-col">
          {prop.cumulativeHour === 0 ? "" : prop.cumulativeHour}
        </div>
        <div className="review-col">
          {prop.cumulativePoint === 0 ? "" : prop.cumulativePoint.toFixed(2)}
        </div>
        <div className="review-col">
          {prop.cumulativeHour === 0 || prop.cumulativePoint === 0
            ? ""
            : (prop.cumulativePoint / prop.cumulativeHour).toFixed(4)}
        </div>
      </div>
    </>
  );
}

export default ReviewGrid;

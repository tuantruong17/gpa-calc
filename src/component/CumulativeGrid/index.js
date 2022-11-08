import { useState } from "react";
import "./styles.css";

function CumulativeGrid(prop) {
  const [hourInput, setHourInput] = useState("");
  const [pointInput, setPointInput] = useState("");
  const handleHourChange = (e) => {
    const val = e.target.value;
    setHourInput(val);
    prop.setHour(+val);
  };

  const handleGpaChange = (e) => {
    const val = e.target.value;
    setPointInput(val);
    prop.setPoint(+val);
  };

  const handleReset = () => {
    setHourInput("");
    setPointInput("");
    prop.setPoint(0);
    prop.setHour(0);
  };

  return (
    <>
      <div className="cumulative-row">
        <div className="cumulative-col">
          <div className="title">Total GPA hours</div>
          <input value={hourInput} type="number" onChange={handleHourChange} />
        </div>
        <div className="cumulative-col">
          <div className="title">Total grade points</div>
          <input value={pointInput} type="number" onChange={handleGpaChange} />
        </div>
        <div className="cumulative-col"></div>
      </div>

      <div className="cumulative-row">
        <div className="cumulative-col">
          <button onClick={handleReset}>Reset Cumulative Info</button>
        </div>
      </div>
    </>
  );
}

export default CumulativeGrid;

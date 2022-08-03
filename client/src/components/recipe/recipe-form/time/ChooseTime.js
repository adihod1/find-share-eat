import { useState, useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";

// import { addCooktime } from "../../../redux/actions/forms";

export default function ChooseTime({ handleAddTime }) {
  const dispatch = useDispatch();

  const [hours, setHours] = useState("00");
  const [minutes, setMinutes] = useState("00");
  const [seconds, setSeconds] = useState("00");

  useCallback(() => {
    const cook_time = `${hours}:${minutes}:${seconds}`;
    handleAddTime(cook_time);
  }, [handleAddTime]);

  return (
    <div>
      <h1 className="title">Cooking Time</h1>
      {/* <p>How long is it going to take to cook?</p> */}
      <div>
        <div className="flex">
          <select name="hours" onChange={(e) => setHours(e.target.value)}>
            <option key={hours} value={hours}></option>
            {hours}
            {[...Array(50).keys()].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <span>:</span>
          <select name="minutes" onChange={(e) => setMinutes(e.target.value)}>
            <option key={minutes} value={minutes}>
              {minutes}
            </option>
            {[...Array(59).keys()].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <span>:</span>
          <select name="seconds" onChange={(e) => setSeconds(e.target.value)}>
            <option key={seconds} value={seconds}>
              {seconds}
            </option>
            {[...Array(60).keys()].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";

// import { addCooktime } from "../../../redux/actions/forms";

export default function ChooseTime({ editMode, recipe }) {
  const dispatch = useDispatch();

  let defaultCookTime;

  if (editMode) {
    defaultCookTime = recipe[0].cook_time.split(":");
  }

  const [hours, setHours] = useState(editMode ? defaultCookTime[0] : "00");
  const [minutes, setMinutes] = useState(editMode ? defaultCookTime[1] : "00");
  const [seconds, setSeconds] = useState(editMode ? defaultCookTime[2] : "00");

  // useEffect(() => {
  //   const cook_time = `${hours}:${minutes}:${seconds}`;
  //   dispatch(addCooktime(cook_time));
  // }, [hours, minutes, seconds]);

  return (
    <div>
      <h1 className="font">Cook Time</h1>
      <p>How long is it going to take to cook?</p>
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

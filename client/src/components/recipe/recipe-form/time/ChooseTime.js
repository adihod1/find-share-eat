export default function ChooseTime({
  handleAddHours,
  handleAddMinutes,
  handleAddSeconds,
  fullHour,
  fullMinutes,
  fullSeconds,
}) {
  return (
    <div>
      <h1 className="title">Cooking Time</h1>
      <div>
        <div className="flex">
          <select name="hours" onChange={(e) => handleAddHours(e.target.value)}>
            <option key={fullHour} value={fullHour}></option>
            {fullHour}
            {[...Array(50).keys()].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <span>:</span>
          <select
            name="minutes"
            onChange={(e) => handleAddMinutes(e.target.value)}
          >
            <option key={fullMinutes} value={fullMinutes}>
              {fullMinutes}
            </option>
            {[...Array(59).keys()].map((a) => (
              <option key={a} value={a}>
                {a}
              </option>
            ))}
          </select>
          <span>:</span>
          <select
            name="seconds"
            onChange={(e) => handleAddSeconds(e.target.value)}
          >
            <option key={fullSeconds} value={fullSeconds}>
              {fullSeconds}
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

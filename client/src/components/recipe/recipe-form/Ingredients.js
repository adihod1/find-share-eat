import { useState, useEffect, createRef } from "react";
import { useDispatch } from "react-redux";
// import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

// import { addProcedures } from "../../../redux/actions/forms";

export default function Ingredients({ editMode, recipe }) {
  let textInput = createRef();

  const dispatch = useDispatch();

  const [procedures, setProcedures] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    if (recipe && editMode === true) {
      const defaultProcedures = JSON.parse(recipe[0].procedure);

      defaultProcedures.map((defaultProcedure) =>
        setProcedures((e) => [...e, defaultProcedure])
      );
    }
  }, []);

  // useEffect(() => {
  //   dispatch(addProcedures(procedures));
  // }, [procedures]);

  const handleClick = () => {
    const value = textInput.current.value;
    if (!procedures.includes(value)) {
      setProcedures((e) => [...e, value]);
    } else {
      alert("Item already exists");
    }
    setInputValue("");
  };

  const handleXClick = (procedure) => {
    setProcedures(procedures.filter((x) => x !== procedure));
  };

  return (
    <>
      <main>
        <div className="containter">
          <div>
            <h1 className="font title">Ingredients</h1>
            <p>Fill in the ingredients to create your new recipe.</p>
          </div>

          <div>
            <div>
              <div className="flex">
                <div className="flex-grow">
                  <textarea
                    id="description"
                    name="description"
                    rows={1}
                    placeholder="sugar"
                    ref={textInput}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                  />
                </div>
                <div className="recipe-button">
                  <button type="button" onClick={handleClick}>
                    <span>Add</span>
                  </button>
                </div>
              </div>
            </div>
            <div>
              <ul>
                {procedures.map((procedure, idx) => (
                  <li key={procedure}>
                    <div>
                      <div>
                        <span>{idx + 1}) </span>
                        <span>{procedure}</span>
                      </div>

                      <div className="">
                        <button
                          type="button"
                          onClick={() => handleXClick(procedure)}
                        >
                          <span>Remove</span>
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

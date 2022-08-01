import { useState, useEffect, createRef, useCallback } from "react";
import { useDispatch } from "react-redux";
// import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

// import { addProcedures } from "../../../redux/actions/forms";

export default function Instructions({ addUserInstructions }) {
  let textInput = createRef();

  const [inputValue, setInputValue] = useState("");

  const onInputInstructionsChange = useCallback(
    (e) => {
      setInputValue(e.target.key);
    },
    [setInputValue]
  );

  const handleAddInstructions = useCallback(async () => {
    await addUserInstructions(inputValue);
    setInputValue("");
  }, [inputValue]);

  return (
    <>
      <main>
        <div className="containter">
          <div>
            <h1 className="title">Procedures</h1>
            <p>Fill in the procedures to create your new recipe.</p>
          </div>

          <div>
            <div>
              <div className="flex">
                <div className="flex-grow">
                  <textarea
                    id="description"
                    name="description"
                    rows={5}
                    placeholder="Add two spoons of sugar..."
                    ref={textInput}
                    value={inputValue}
                    onSubmit={handleAddInstructions}
                    onChange={onInputInstructionsChange}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

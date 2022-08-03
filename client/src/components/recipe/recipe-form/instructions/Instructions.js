import { useState, useEffect, createRef, useCallback } from "react";
import { useDispatch } from "react-redux";
// import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

// import { addProcedures } from "../../../redux/actions/forms";

export default function Instructions({ handleAddInstructions }) {
  let textInput = createRef();

  const dispatch = useDispatch();

  // const [procedures, setProcedures] = useState([]);

  const [inputValue, setInputValue] = useState("");

  useCallback(
    (e) => {
      handleAddInstructions(inputValue);
    },
    [handleAddInstructions]
  );

  // useEffect(() => {
  //   if (recipe && editMode === true) {
  //     const defaultProcedures = JSON.parse(recipe[0].procedure);

  //     defaultProcedures.map((defaultProcedure) =>
  //       setProcedures((e) => [...e, defaultProcedure])
  //     );
  //   }
  // }, []);

  // useEffect(() => {
  //   dispatch(addProcedures(procedures));
  // }, [procedures]);

  // const onInputInstructionsChange = useCallback(
  //   (e) => {
  //     setInputValue(e.target.key);
  //   },
  //   [setInputValue]
  // );

  // const handleAddInstructions = useCallback(async () => {
  //   await addCategory(inputValue);
  //   setSelectCategory("");
  // }, [inputValue]);

  return (
    <>
      <main>
        <div className="containter">
          <div>
            <h1 className="title">Procedures</h1>
            {/* <p>Fill in the procedures to create your new recipe.</p> */}
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
                    // onSubmit={handleAddInstructions}
                    // onChange={onInputInstructionsChange}
                    onChange={(e) => setInputValue(e.target.value)}
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

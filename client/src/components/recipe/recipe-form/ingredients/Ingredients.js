import { useState, useEffect, createRef } from "react";
import { useDispatch } from "react-redux";
import filterMeasurements from "./filterMeasurements";
// import { MinusIcon, PlusIcon } from "@heroicons/react/solid";

// import { addProcedures } from "../../../redux/actions/forms";

export default function Ingredients({
  quantityUserInput,
  chosenUserMeasurement,
  chosenUserIngredient,
}) {
  let quantityInput = createRef();
  let measurementInput = createRef();
  let ingredientInput = createRef();

  const [fullIngredientDetails, setFullIngredientDetails] = useState([]);
  const [procedures, setProcedures] = useState([]);
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputMeasurement, setInputMeasurement] = useState("");
  const [inputIngredient, setInputIngredient] = useState("");

  // useEffect(() => {
  //   dispatch(addProcedures(procedures));
  // }, [procedures]);

  const handleClick = () => {
    const quantity = quantityInput.current.value;
    const isNumber = !isNaN(Number(quantity));
    const quantityToNumber = parseFloat(quantity);
    const measurement = measurementInput.current.value;
    const ingredient = ingredientInput.current.value;
    const AllIngredient = quantity + " " + measurement + " " + ingredient;
    const IngredientsDictionary = {
      ingredientName: ingredient,
      amount: quantityToNumber,
      measurement: measurement,
    };
    if (!procedures.includes(AllIngredient)) {
      setProcedures((e) => [...e, AllIngredient]);
    } else {
      alert("Item already exists");
    }
    setInputQuantity("");
    setInputMeasurement("");
    setInputIngredient("");
    // setFullIngredientDetails((e) => [...e, IngredientsDictionary]);

    const isDuplicate = fullIngredientDetails.includes(IngredientsDictionary);

    if (!isDuplicate) {
      setFullIngredientDetails([
        ...fullIngredientDetails,
        IngredientsDictionary,
      ]);
    }

    // console.log("ff", fullIngredientDetails);
  };

  const handleXClick = (procedure) => {
    setProcedures(procedures.filter((x) => x !== procedure));
    const isDuplicate = fullIngredientDetails.includes(IngredientsDictionary);

    if (isDuplicate) {
      setFullIngredientDetails([
        ...fullIngredientDetails,
        IngredientsDictionary,
      ]);
    }

    // fullIngredientDetails.filter(
    //   (
    //     (s) => (o) =>
    //       ((k) => !s.has(k) && s.add(k))(keys.map((k) => o[k]).join("|"))
    //   )(new Set())
    // );
  };

  console.log("full", fullIngredientDetails);
  console.log("pro", procedures);

  return (
    <>
      <main>
        <div className="containter">
          <div>
            <h1 className="title">Ingredients</h1>
            <p>Fill in the ingredients to create your new recipe.</p>
          </div>

          <div>
            <div>
              <div className="flex">
                <div className="allIngredient">
                  <textarea
                    id="description"
                    name="description"
                    rows={1}
                    placeholder="Enter quantity"
                    ref={quantityInput}
                    value={inputQuantity}
                    onChange={(e) => setInputQuantity(e.target.value)}
                  />
                  <select
                    id="description"
                    name="description"
                    rows={1}
                    ref={measurementInput}
                    value={inputMeasurement}
                    onChange={(e) => setInputMeasurement(e.target.value)}
                  >
                    {filterMeasurements.map((measurement) => (
                      <option key={measurement.value} value={measurement.value}>
                        {measurement.value}
                      </option>
                    ))}
                  </select>
                  <textarea
                    id="description"
                    name="description"
                    rows={1}
                    placeholder="Enter ingredient"
                    ref={ingredientInput}
                    value={inputIngredient}
                    onChange={(e) => setInputIngredient(e.target.value)}
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

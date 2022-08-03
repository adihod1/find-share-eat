import { useState, createRef } from "react";
import filterMeasurements from "./filterMeasurements";

export default function Ingredients({
  handleAddIngredients,
  fullIngredientDetails,
}) {
  let quantityInput = createRef();
  let measurementInput = createRef();
  let ingredientInput = createRef();

  const [procedures, setProcedures] = useState([]);
  const [inputQuantity, setInputQuantity] = useState("");
  const [inputMeasurement, setInputMeasurement] = useState("");
  const [inputIngredient, setInputIngredient] = useState("");

  console.log("handle", typeof handleAddIngredients);
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

    const isDuplicate = fullIngredientDetails.includes(IngredientsDictionary);

    if (!isDuplicate) {
      handleAddIngredients([...fullIngredientDetails, IngredientsDictionary]);
    }
  };

  const handleXClick = (procedure) => {
    setProcedures(procedures.filter((x) => x !== procedure));
    const stringToArr = procedure.split(" ");
    const [amount, measurement, ingredientName] = stringToArr;
    const stringToObject = { amount, measurement, ingredientName };
    console.log(stringToObject);
    handleAddIngredients((current) =>
      current.filter((fullIngredient) => {
        return (
          fullIngredient.amount !== stringToObject.amount &&
          fullIngredient.measurement !== stringToObject.measurement &&
          fullIngredient.ingredientName !== stringToObject.ingredientName
        );
      })
    );
  };

  console.log("full", fullIngredientDetails);
  console.log("pro", procedures);

  return (
    <>
      <main>
        <div className="containter">
          <div>
            <h1 className="title">Ingredients</h1>
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
                  <button
                    className="button-recipe"
                    type="button"
                    onClick={handleClick}
                  >
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

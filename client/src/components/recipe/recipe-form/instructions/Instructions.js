import { createRef } from "react";

export default function Instructions({
  handleAddFullInstructions,
  fullInstructions,
}) {
  let textInput = createRef();
  return (
    <>
      <main>
        <div className="containter">
          <div>
            <h1 className="title">Procedures</h1>
          </div>
          <div>
            <div>
              <div className="flex">
                <div className="flex-grow">
                  <textarea
                    id="instructions"
                    name="instructions"
                    rows={5}
                    placeholder="Add two spoons of sugar..."
                    ref={textInput}
                    value={fullInstructions}
                    onChange={(e) => handleAddFullInstructions(e.target.value)}
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

import cupcakeIcon from "../../../images/cupcakeIcon.png";
import findShareEatLogo from "../../../images/findShareEatLogo.png";
import penguinIcon from "../../../images/penguinIcon.png";

import "./RecipeForm.scss";

export default function RecipeForm() {
  return (
    <div className="container">
      <div className="sideTitle">
        {/* <link
          href="https://fonts.googleapis.com/css?family=Potta One"
          rel="stylesheet"
        /> */}
        <img className="logo-img" src={findShareEatLogo} alt="logo" />
        <h1 className="font">TIME</h1>
        <h1 className="font">TO</h1>
        <h1 className="font">COOK</h1>
        <img className="penguin-img" src={penguinIcon} alt="logo" />
      </div>
      <div className="app-container">
        <form>hey</form>
      </div>
      <div className="cupcake-img">
        <img src={cupcakeIcon} alt="cupcake" />
      </div>
    </div>
  );
}

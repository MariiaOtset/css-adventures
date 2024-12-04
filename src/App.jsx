import "./App.scss";
import ButtonsWrapper from "./components/ButtonsWrapper.jsx";

function App() {
  return (
    <>
      <p className="variableText">My favorite color</p>
      <div className="circle">Mixin circle</div>
      <ButtonsWrapper />
      <p className="textHello">Hello world</p>
      <p className="variableFavoriteColor">My favorite color is lightgreen</p>
    </>
  );
}

export default App;

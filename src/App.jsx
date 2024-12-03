// import "./App.css";
// import "./scss/main.css";
// import "./scss/main.scss";
// import "./scss/components/_App.scss";

// function App() {
//   return (
//     <>
//       <p className="saasVariable">Hello world</p>
//       <p className="variableFavoriteColor">My favorite color is lightgreen</p>
//       <span className="circle">Mixin</span>
//       <span className="circle">Mixin</span>
//     </>
//   );
// }

// export default App;

import "./styles/main.scss";
import Buttons from "./components/Buttons/Buttons.jsx";

function App() {
  return (
    <div className="App">
      <Buttons>Click me</Buttons>
    </div>
  );
}

export default App;

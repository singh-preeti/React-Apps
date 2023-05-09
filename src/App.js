import "./App.css";
import DemoEmployee from "./Projects/demo-employee/DemoEmployee";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <DemoEmployee />
      </BrowserRouter>
    </div>
  );
}

export default App;

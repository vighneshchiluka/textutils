import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import {
  Routes,
  Route
} from "react-router-dom";


function App() {
  return (
    <>
    <div>
      <Navbar title="TextUtils" abouttext="About" />
      {/* <Navbar/> */}
      {/* <h2 className="h2v">im a boy</h2> */}
      <div className = "container my-3">
        <Routes>

          <Route
            path="/"
            element={<Textform title="Enter your text to Analyze" />}
          />

          <Route
            path="/about"
            element={<h2>About Page</h2>}
          />
          
        </Routes>
      </div>
      </div>
    </>
  );
}

export default App;


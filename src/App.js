import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";

function App() {
  return (
    <>
    <div>
      <Navbar title="TextUtils" abouttext="About" />
      {/* <Navbar/> */}
      {/* <h2 className="h2v">im a boy</h2> */}
      <div className = "container my-3">
        <Textform title ='Enter your text to Analyze'/>
      </div>
      </div>
    </>
  );
}

export default App;


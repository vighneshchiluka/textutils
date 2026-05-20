// import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import About from "./components/About";
import { useState } from "react";
import Alert from "./components/Alert";
import { Routes, Route } from 'react-router-dom';


function App(props) {
  const [mode, setmode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert =(message,type) =>{
  setAlert({
     msg: message,
     type: type
    })

    setTimeout(() => {
      setAlert();
    }, 1500);
  }

    //  {/* this is command pallete color changer u can use in future */}
     
  // const removeBodyClasses=()=>{
  //     document.body.classList.remove("bg-primary")
  //     document.body.classList.remove("bg-secondary")
  //     document.body.classList.remove("bg-danger")
  //     document.body.classList.remove("bg-success")
  //     document.body.classList.remove("bg-warning")
  //     document.body.classList.remove("bg-light")
  //     document.body.classList.remove("bg-dark")
  // }


  const toggleMode =(cls) =>{
      //  {/* this is command pallete color changer u can use in future */}
    // removeBodyClasses();
    // console.log(cls)
    // document.body.classList.add("bg-"+cls)

  if (mode==="light") {
     setmode("dark");
     document.body.style.backgroundColor = "#042743";
     showAlert("Dark mode has been enabled", "success");
     document.title = "TextUtils - Dark Mode";

     //virus scan message type

    //  setInterval(() =>{
    //   document.title = "TextUtils is Amazing Mode";
    //  },2000);

    //  setInterval(() =>{
    //   document.title = "Install TextUtils Now";
    //  },1500);

   }
  else {
     setmode("light");
     document.body.style.backgroundColor = "white";
     showAlert("Light mode has been enabled", "success");
     document.title = "TextUtils - Light Mode";
  }
  }
return (
  <>
    <Navbar
      title="TextUtils"
      home="Home"
      aboutus="About Us"
      search="Search"
      mode={mode}
      toggleMode={toggleMode}
    />

    <Alert alert={alert} />

    <div className="container">

      <Routes>

        <Route
          path="/"
          element={
            <Textform
              showAlert={showAlert}
              heading="Try TextUtils - Word Counter , Character Counter , Remove extra spaces"
              mode={mode}
            />
          }
        />

        <Route
          path="/about"
          element={<About mode={mode} />}
        />

      </Routes>

    </div>
  </>
);
}

export default App;


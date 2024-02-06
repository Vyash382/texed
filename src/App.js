import logo from "./logo.svg";
import "./Appa.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import { useState } from "react";
import Alert from "./components/Alert";
import About from "./components/About";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';

let name = "Yassh Sinha";
function App() {
  const [mode, setMode] = useState("light");
  document.title = "TEXED";
  const darkMode = () => {
    if (mode !== "dark") {
      setMode("dark");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
      showAlert("Success", "Dark Mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Success", "Light Mode has been enabled");
    }
  };
  const redMode = () => {
    if (mode !== "red") {
      setMode("red");
      document.body.style.backgroundColor = "red";
      document.body.style.color = "black";
      showAlert("Success", "Red Mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Success", "Light Mode has been enabled");
    }
  };
  const greenMode = () => {
    if (mode !== "green") {
      setMode("green");
      document.body.style.backgroundColor = "green";
      document.body.style.color = "black";
      showAlert("Success", "Green Mode has been enabled");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      showAlert("Success", "Light Mode has been enabled");
    }
  };
  const [alert, setAlert] = useState(null);
  const showAlert = (typee, messagee) => {
    setAlert({
      type: typee,
      message: messagee,
    });
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  };

  return (
    <>
      <Router>
        <Navbar
          mode={mode}
          darkMode={darkMode}
          redMode={redMode}
          greenMode={greenMode}
          alert={showAlert}
        />
        
        <div className="container youo2">
          <Alert alert={alert} />
          <Routes>
          <Route path="/" element={<TextForm Heading="Enter Text Here" mode={mode} darkMode = {darkMode} alert={showAlert} /> } />
            <Route path="/About" element={<About mode={mode} />} />
          </Routes>
          {/* <TextForm Heading="Enter Text Here" mode={mode} darkMode = {darkMode} alert={showAlert} /> */}
          
        </div>
      </Router>
    </>
  );
}

export default App;

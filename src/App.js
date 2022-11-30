// import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState("light")
  const [alert, setAlert] = useState(null)

  const modeToggle = () => {
    if (mode === "light") {
      setMode("dark")
      document.body.style.backgroundColor = "rgb(1, 12, 79)"
      document.body.style.color = "white"
      showAlert("Dark mode enable", "success")
    }
    else {
      setMode("light")
      document.body.style.backgroundColor = "white"
      document.body.style.color = "white"
      showAlert("Light mode enable", "success")
    }
  }

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => setAlert(null), 2000)
  }

  return (
    
      <div className="App">

        <NavBar mode={mode} modeToggle={modeToggle} title="TextAnalyzer" />
        <Alert alert={alert} />
        <TextForm showAlert={showAlert} mode={mode} heading="Enter the Text to analyze below" />
      </div>
    
  );
}

export default App;

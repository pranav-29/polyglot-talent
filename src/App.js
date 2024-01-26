import './App.css';
import Home from "./pages/Home.js";
import React, {useEffect} from 'react';

function App() {

  //Google Analyatic
  useEffect(() => {
    window.gtag('config', 'G-MPHHGKLFKS');

    return () => {};
  }, []);
//end

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;

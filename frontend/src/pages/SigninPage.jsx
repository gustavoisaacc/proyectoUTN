// src/App.js
import { useState } from "react";
import QrScanner from "react-qr-scanner";

function App() {
  const [data, setData] = useState("No result");

  const handleScan = (data) => {
    if (data) {
      setData(data.text);
    }
  };

  const handleError = (err) => {
    console.error(err);
  };

  return (
    <div className="App">
      <h1>QR Code Scanner</h1>
      <QrScanner
        delay={300}
        onError={handleError}
        onScan={handleScan}
        style={{ width: "100%" }}
      />
      <p>{data}</p>
    </div>
  );
}

export default App;

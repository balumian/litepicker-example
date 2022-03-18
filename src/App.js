import React, { useState } from "react";

import logo from "./logo.svg";
import "./App.css";
import LitePickerComponent from "litepicker-component";

const style = {
  width: "100%",
};

function App() {
  const [val, setVal] = useState();
  const handleChange = (e) => {
    const { value } = e.target;
    setVal(value);
  };
  return (
    <div className="App">
      <LitePickerComponent
        style={style}
        value={val}
        onChange={handleChange}
        id="fromtime"
        inputClass="input-sm"
        variant="standard-basic"
        placeholder="Select Date"
        singleMode={false}
        autoApply={false}
      />{" "}
      <br /><br />
      <LitePickerComponent
        style={style}
        id="totime"
        inputClass="input-sm"
        variant="filled-basic"
        placeholder="Select Date"
        
      />
       <br /><br />
      <LitePickerComponent
        style={style}
        id="date"
        inputClass="input-sm"
        variant="outlined-basic"
        placeholder="Select Date"
        
      />
    </div>
  );
}

export default App;

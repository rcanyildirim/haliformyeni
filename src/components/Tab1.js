import React, { useState } from "react";
import { Button } from "semantic-ui-react";

export default function Tab1() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const isButtonSelected = (buttonId) => {
    return selectedButton === buttonId;
  };

  return (
    <div>
      <label id="radioQuestion2">Halı nerede yıkanmalı?</label>
      <br />
      <br />
      <br />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("button1") ? "green" : "",
          color: isButtonSelected("button1") ? "white" : "",
        }}
        onClick={() => handleButtonClick("button1")}
      >
        Adresten alınıp teslim edilsin
      </Button>
      <p></p>
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("button2") ? "green" : "",
          color: isButtonSelected("button2") ? "white" : "",
        }}
        onClick={() => handleButtonClick("button2")}
      >
        Evde halı temizligi yapılsın
      </Button>
      <p></p>
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("button3") ? "green" : "",
          color: isButtonSelected("button3") ? "white" : "",
        }}
        onClick={() => handleButtonClick("button3")}
      >
        Ofiste halı temizligi yapılsın
      </Button>
    </div>
  );
}

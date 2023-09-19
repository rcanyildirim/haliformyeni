import React, { useState } from "react";
import { Button } from "semantic-ui-react";

export default function Tab1({ handleOptionChange }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    handleOptionChange(buttonId);
    if (buttonId === "Adresten alınıp teslim edilsin") {
      handleOptionChange(buttonId, "350TL - 500TL");
    } else if (buttonId === "Evde halı temizliği yapılsın") {
      handleOptionChange(buttonId, "500TL - 750TL");
    } else if (buttonId === "Ofiste halı temizliği yapılsın") {
      handleOptionChange(buttonId, "800TL - 1000TL");
    }
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
          background: isButtonSelected("Adresten alınıp teslim edilsin")
            ? "green"
            : "",
          color: isButtonSelected("Adresten alınıp teslim edilsin")
            ? "white"
            : "",
        }}
        onClick={() => handleButtonClick("Adresten alınıp teslim edilsin")}
      >
        Adresten alınıp teslim edilsin
      </Button>
      <p></p>
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("Evde halı temizliği yapılsın")
            ? "green"
            : "",
          color: isButtonSelected("Evde halı temizliği yapılsın")
            ? "white"
            : "",
        }}
        onClick={() => {
          handleButtonClick("Evde halı temizliği yapılsın");
        }}
      >
        Evde halı temizligi yapılsın
      </Button>
      <p></p>
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("Ofiste halı temizliği yapılsın")
            ? "green"
            : "",
          color: isButtonSelected("Ofiste halı temizliği yapılsın")
            ? "white"
            : "",
        }}
        onClick={() => handleButtonClick("Ofiste halı temizliği yapılsın")}
      >
        Ofiste halı temizligi yapılsın
      </Button>
    </div>
  );
}

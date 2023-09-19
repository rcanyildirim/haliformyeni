import React, {useState} from 'react'
import { Button } from "semantic-ui-react";

export default function Tab3({ handleOptionChange }) {
  const [selectedButton, setSelectedButton] = useState(null);
  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    handleOptionChange(buttonId);
    if (buttonId === "Evet, çıkması gereken lekeler var") {
      handleOptionChange(buttonId, "1200TL - 1500TL");
    } else if (buttonId === "Hayır, standart yıkama istiyorum") {
      handleOptionChange(buttonId, "500TL - 750TL");
    }
  };

  const isButtonSelected = (buttonId) => {
    return selectedButton === buttonId;
  };
  return (
    <div>
    <label id='radioQuestion2'>Çıkarılmasını istediğin lekeler varmı ?</label>
    <br/>
    <br/>
    <br/>
    <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("Evet, çıkması gereken lekeler var")
            ? "green"
            : "",
          color: isButtonSelected("Evet, çıkması gereken lekeler var")
            ? "white"
            : "",
        }}
        onClick={() => handleButtonClick("Evet, çıkması gereken lekeler var")}
      >
        Evet, çıkması gereken lekeler var
      </Button>
      <p></p>
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("Hayır, standart yıkama istiyorum")
            ? "green"
            : "",
          color: isButtonSelected("Hayır, standart yıkama istiyorum")
            ? "white"
            : "",
        }}
        onClick={() => handleButtonClick("Hayır, standart yıkama istiyorum")}
      >
        Hayır, standart yıkama istiyorum
      </Button>
    </div>
  )
}

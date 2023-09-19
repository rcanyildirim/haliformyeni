import React, { useState } from 'react'
import { Button } from 'semantic-ui-react';
import TarihDropdown from './TarihDropdown';

export default function Tab6({handleOptionChange, handleBelliBirZamanClick, handleDigerButon1, tarihDropdownGorunur}) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    handleOptionChange(buttonId);
    if (buttonId === "Belli bir zaman içinde") {
      handleOptionChange(buttonId, "350TL - 500TL");
    } else if (buttonId === "İki ay içinde") {
      handleOptionChange(buttonId, "500TL - 750TL");
    } else if (buttonId === "Altı ay içinde") {
      handleOptionChange(buttonId, "800TL - 1000TL");
    } else if (buttonId === "Sadece fiyat bakıyorum") {
      handleOptionChange(buttonId, "1200TL - 1300TL");
    }
  };

  const isButtonSelected = (buttonId) => {
    return selectedButton === buttonId;
  };
  return (
    <div>
        <label id='radioQuestion2'>Ne zaman?</label>
        <p/>
        <Button id="mainbutton2" style={{
          background: isButtonSelected("Belli bir zaman") ? "green" : "",
          color: isButtonSelected("Belli bir zaman") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("Belli bir zaman");
          handleBelliBirZamanClick();
        }}
        >Belli bir zaman(üç hafta içinde)</Button>
        <p/>
        {tarihDropdownGorunur && (
          <TarihDropdown/>
        )
        }
        <p/>
        <Button id="mainbutton2" style={{
          background: isButtonSelected("İki ay içinde") ? "green" : "",
          color: isButtonSelected("İki ay içinde") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("İki ay içinde");
          handleDigerButon1();
        }}
        >İki ay içinde</Button>
        <p/>
        <Button id="mainbutton2" style={{
          background: isButtonSelected("Altı ay içinde") ? "green" : "",
          color: isButtonSelected("Altı ay içinde") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("Altı ay içinde");
          handleDigerButon1();
        }}
        >Altı ay içinde</Button>
        <p/>
        <Button id="mainbutton2" style={{
          background: isButtonSelected("Sadece fiyat bakıyorum") ? "green" : "",
          color: isButtonSelected("Sadece fiyat bakıyorum") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("Sadece fiyat bakıyorum");
          handleDigerButon1();
        }}
        >Sadece fiyat bakıyorum</Button>
    </div>
  )
}

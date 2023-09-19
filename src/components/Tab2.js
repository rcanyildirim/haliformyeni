import React, { useState } from "react";
import { Button } from "semantic-ui-react";
export default function Tab2({ handleOptionChange }) {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
    handleOptionChange(buttonId);
    if (buttonId === "10") {
      handleOptionChange(buttonId, "350TL - 500TL");
    } else if (buttonId === "15") {
      handleOptionChange(buttonId, "500TL - 750TL");
    } else if (buttonId === "20") {
      handleOptionChange(buttonId, "800TL - 1000TL");
    } else if (buttonId === "25") {
      handleOptionChange(buttonId, "1200TL - 1300TL");
    } else if (buttonId === "30") {
      handleOptionChange(buttonId, "500TL - 750TL");
    } else if (buttonId === "40") {
      handleOptionChange(buttonId, "800TL - 1000TL");
    } else if (buttonId === "50") {
      handleOptionChange(buttonId, "1200TL - 1300TL");
    } else if (buttonId === "60") {
      handleOptionChange(buttonId, "800TL - 1000TL");
    } else if (buttonId === "80 veya daha fazla") {
      handleOptionChange(buttonId, "1200TL - 1300TL");
    }
  };

  const isButtonSelected = (buttonId) => {
    return selectedButton === buttonId;
  };

  return (
    <div>
      <label id="radioQuestion2">Kaç metrekare halı yıkanacak?</label>
      <br /> <br />
      <br />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("10") ? "green" : "",
          color: isButtonSelected("10") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("10");
        }}
      >
        10
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("15") ? "green" : "",
          color: isButtonSelected("15") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("15");
        }}
      >
        15
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("20") ? "green" : "",
          color: isButtonSelected("20") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("20");
        }}
      >
        20
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("25") ? "green" : "",
          color: isButtonSelected("25") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("25");
        }}
      >
        25
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("30") ? "green" : "",
          color: isButtonSelected("30") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("30");
        }}
      >
        30
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("40") ? "green" : "",
          color: isButtonSelected("40") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("40");
        }}
      >
        40
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("50") ? "green" : "",
          color: isButtonSelected("50") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("50");
        }}
      >
        50
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("60") ? "green" : "",
          color: isButtonSelected("60") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("60");
        }}
      >
        60
      </Button>
      <p />
      <Button
        id="mainbutton2"
        style={{
          background: isButtonSelected("80 veya daha fazla") ? "green" : "",
          color: isButtonSelected("80 veya daha fazla") ? "white" : "",
        }}
        onClick={() => {
          handleButtonClick("80 veya daha fazla");
        }}
      >
        80 veya daha fazla
      </Button>
      <p />
    </div>
  );
}

import React, { useState } from "react";

const App: React.FC = () => {
  const [temperature, setTemperature] = useState<number>();
  const [windVelocity, setWindVelocity] = useState<number>();
  const [windchill, setWindchill] = useState<number>();
  const [errorMessage, setErrorMessage] = useState("");

  function onClickHandler() {
    if (validate()) {
      calculate();
    } else {
      console.log("error: 温度と風速を入力してください");
    }
  }

  function validate() {
    if (
      typeof temperature === "number" &&
      typeof windVelocity === "number" &&
      !Number.isNaN(temperature) &&
      !Number.isNaN(windVelocity)
    ) {
      setErrorMessage("");
      return true;
    } else {
      setErrorMessage("温度と風速を入力してください");
      return false;
    }
  }

  function calculate() {
    if (temperature !== undefined && windVelocity !== undefined) {
      const result =
        13.12 + 0.6125 * temperature - 11.37 * windVelocity ** 0.16 + 0.3965 * temperature * windVelocity ** 0.16;
      setWindchill(Math.round(result));
    }
  }

  return (
    <>
      <p>
        温度: <input onChange={(e) => setTemperature(Number(e.target.value))} type="number"></input>℃
      </p>
      <p>
        風速:<input onChange={(e) => setWindVelocity(Number(e.target.value))} type="number"></input>km/h
      </p>
      <p>{errorMessage}</p>
      <button onClick={() => onClickHandler()}>計算する</button>
      <p>結果: {windchill}</p>
    </>
  );
};

export default App;

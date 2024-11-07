// import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MedalList from "./components/MedalList";
import HeaderForm from "./components/HeaderForm";

const App = () => {
  const [countries, setCountries] = useState(JSON.parse(localStorage.getItem("countries")) || []);

  useEffect(() => {
    localStorage.setItem("countries", JSON.stringify(countries));
  }, [countries]);

  return (
    <>
      <HeaderForm countries={countries} setCountries={setCountries} />
      <MedalList countries={countries} setCountries={setCountries} />
    </>
  );
};

export default App;

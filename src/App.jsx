// import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import MedalList from "./components/MedalList";
import HeaderForm from "./components/HeaderForm";

const App = () => {
  const [countries, setCountries] = useState(() => {
    try {
      return localStorage.getItem("countries")
        ? JSON.parse(localStorage.getItem("countries"))
        : [];
    } catch (err) {
      console.error(err);
      return [];
    }
  });

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

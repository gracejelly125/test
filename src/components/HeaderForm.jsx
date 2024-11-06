import React, { useState } from "react";
import StyledHeaderForm from "../styles/styled-HeaderForm";


const HeaderForm = ({ countries, setCountries }) => {
    // 왜 자꾸 빨간줄이 뜨는거죠?!!!!
    const [countryName, setCountryName] = useState("");
    const [gold, setGold] = useState(0);
    const [silver, setSilver] = useState(0);
    const [bronze, setBronze] = useState(0);

    const addCountryHandler = (e) => {
        e.preventDefault();
        if (countries.some((country) => country.countryName == countryName)) {
          alert("이미 등록된 국가입니다.");
          return;
        }
        const newcountry = {
          countryName,
          gold: +gold,
          silver: +silver,
          bronze: +bronze,
        };
    
        setCountries([...countries, newcountry]);
        resetForm();
      };

      const updateCountryHandler = (e) => {
        e.preventDefault();
        const existingCountry = countries.find(
          (country) => country.countryName === countryName
        );
        if (!existingCountry) {
          alert("등록되지 않은 국가입니다.");
          return;
        }
    
        const updatedCountries = countries.map((country) =>
          country.countryName === countryName
            ? { ...country, gold: +gold, silver: +silver, bronze: +bronze }
            : country
        );
        setCountries(updatedCountries);
        resetForm();
      };

      const resetForm = () => {
        setCountryName("");
        setGold(0);
        setSilver(0);
        setBronze(0);
      };

  return (
    <>
      <StyledHeaderForm>
        <div>
        <h1>올림픽 메달 추적기</h1>
      </div>
      <form onSubmit={addCountryHandler}>
        <div>
          <p>국가명</p>
          <input
            type="text" required
            value={countryName}
            onChange={(e) => setCountryName(e.target.value.trim())}
          />
        </div>
        <div>
          <p>금메달</p>
          <input
            type="number" min="0" max="99" required
            value={gold}
            onChange={(e) => setGold(e.target.value)}
          />
        </div>
        <div>
          <p>은메달</p>
          <input
            type="number" min="0" max="99" required
            value={silver}
            onChange={(e) => setSilver(e.target.value)}
          />
        </div>
        <div>
          <p>동메달</p>
          <input
            type="number" min="0" max="99" required
            value={bronze}
            onChange={(e) => setBronze(e.target.value)}
          />
        </div>
        <button type="submit">국가추가</button>
        <button type="button" onClick={updateCountryHandler}>
          업데이트
        </button>
      </form>
      </StyledHeaderForm>
    </>
  );
};

export default HeaderForm;

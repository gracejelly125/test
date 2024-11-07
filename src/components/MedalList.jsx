
import StyleMedalList, { DivMedalList } from "../styles/styled-MedalList";

const MedalList = ({ countries, setCountries }) => {
  const deleteCountryHandler = (countryToDelete) => {
    const deletedCountry = countries.filter(
      (country) => country.countryName !== countryToDelete
    );
    setCountries(deletedCountry);
  };

  const sortedCountries = [...countries].sort(
    (a, b) => b.gold - a.gold || b.silver - a.silver || b.bronze - a.bronze
  );

  return (
    <>
      <StyleMedalList>
        {countries.length === 0 ? (
          <p>아직 등록된 국가가 없습니다.</p>
        ) : (
          <div>
            {sortedCountries.map((country) => {
              return (
                <>
                  <DivMedalList key={country.id}>
                    <p>{country.countryName}</p>
                    <p>{country.gold}</p>
                    <p>{country.silver}</p>
                    <p>{country.bronze}</p>
                    <button
                      type="button"
                      onClick={() => deleteCountryHandler(country.countryName)}
                    >
                      삭제
                    </button>
                  </DivMedalList>
                </>
              );
            })}
          </div>
        )}
      </StyleMedalList>
    </>
  );
};

export default MedalList;

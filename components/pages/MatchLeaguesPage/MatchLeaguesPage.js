import { useEffect, useState } from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { CountryRow } from "./CountryRow/CountryRow";
import apiAxios from "utils/apiAxios";

const Map = styled(Grid)(() => ({
  marginBottom: "20px",
}));

export const MatchLeaguesPage = ({ elo }) => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const data = await apiAxios("/countries");
        setCountries(data.data.data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCountries();
  }, []);

  return (
    <Map item container direction="column">
      {countries.length ? (
        <>
          {countries.map((country, i) => (
            <CountryRow key={i} country={country} elo={elo} />
          ))}
        </>
      ) : (
        <></>
      )}
    </Map>
  );
};

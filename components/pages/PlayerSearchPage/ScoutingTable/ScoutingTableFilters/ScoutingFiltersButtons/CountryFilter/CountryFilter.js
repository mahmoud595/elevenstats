import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useState } from "react";
import Image from "next/image";
import { useSelector, shallowEqual } from "react-redux";

import { Btn } from "components";
import { ScoutingFilterButton } from "../ScoutingFilterButton/ScoutingFilterButton";

const Country = styled(Grid)(({ theme }) => ({
  padding: "14px 2.6em 24px 2.6em",
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "8px 8px 100px rgba(2, 42, 84, 0.1)",
  height: "206px",
  overflowY: "auto",
  "& .countryText": {
    fontSize: "12px",
    lineHeight: "10px",
    fontWeight: 600,
    textTransform: "capitalize",
    marginLeft: "1.3em",
  },
  "& > button:not(:first-of-type)": {
    marginTop: "10px",
  },
}));

export const CountryFilter = () => {
  const [selectedCountry, setSelectedCountry] = useState("Select Country");
  const [close, setClose] = useState(false);
  const countries = useSelector(({ playerSearch }) => {
    const { counteries } = playerSearch;
    return counteries;
  }, shallowEqual);

  const clickHandler = (country) => {
    setSelectedCountry(country);
    setClose(true);
  };
  return (
    <ScoutingFilterButton
      pointerRight="10px"
      dropDownTop="45px"
      text={selectedCountry?.name ?? selectedCountry}
      type="country"
      img={
        (selectedCountry !== "Select Country" && selectedCountry?.imagePath) ??
        "https://cdn.sportmonks.com/images/countries/png/short/af.png"
      }
      dropDownLeft={30}
      close={close}
      setClose={setClose}
    >
      <Country item container direction="column" wrap="nowrap">
        {countries?.length ? (
          countries.map((country, i) => (
            <Btn
              padding="0"
              key={i}
              fullwidth
              onClick={() => clickHandler(country)}
            >
              <Grid item container alignItems="center" wrap="nowrap">
                <Image
                  src={
                    country?.imagePath ??
                    "https://cdn.sportmonks.com/images/countries/png/short/af.png"
                  }
                  width={20}
                  height={20}
                  alt={country?.name}
                  key={i}
                  layout="fixed"
                />
                <Typography variant="h2" className="countryText">
                  {country?.name}
                </Typography>
              </Grid>
            </Btn>
          ))
        ) : (
          <>No Countries </>
        )}
      </Country>
    </ScoutingFilterButton>
  );
};

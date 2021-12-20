import { useState } from "react";
import { Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "components";
import Image from "next/image";
import { Polygon } from "public";
import { LeaguesTable } from "./LeaguesTable/LeaguesTable";
import apiAxios from "utils/apiAxios";
const Country = styled(Grid)(() => ({
  padding: "10px 30px",
  background: "#022A54",
  borderRadius: "20px",
  marginTop: "10px",
  "& .leagueName": {
    fontSize: "14px",
    fontWeight: 600,
    marginLeft: "10px",
    color: "#fff",
  },
  "& .img": {
    borderRadius: "50%",
  },
}));

export const CountryRow = ({ country, elo }) => {
  const [clicked, setClicked] = useState(false);
  const [leagues, setLeagues] = useState([]);
  const clickHandler = async () => {
    setClicked(!clicked);
    try {
      const res = await apiAxios.get(`/countries/${country?.slug}/leagues`);
      if (elo) {
        const domesticLeagues = res?.data?.data?.filter((league) => {
          return league?.type === "domestic" && league?.wyId;
        });
        setLeagues(domesticLeagues);
      } else {
        setLeagues(res?.data?.data);
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <Country
        item
        container
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item container alignItems="center">
          {country?.imagePath ? (
            <Image
              src={country?.imagePath}
              width={30}
              height={30}
              className="img"
            />
          ) : (
            <></>
          )}

          <Typography className="leagueName">{country?.name}</Typography>
        </Grid>
        <Btn padding="0" onClick={clickHandler}>
          <Grid
            item
            sx={{
              transform: clicked ? "rotate(0deg)" : "rotate(180deg)",
              "& >svg": {
                fill: clicked ? "#EB5757" : "#1BD47B",
              },
            }}
          >
            <Polygon />
          </Grid>
        </Btn>
      </Country>
      {clicked ? (
        <LeaguesTable leagues={leagues} countrySlug={country?.slug} elo={elo} />
      ) : (
        <></>
      )}
    </>
  );
};

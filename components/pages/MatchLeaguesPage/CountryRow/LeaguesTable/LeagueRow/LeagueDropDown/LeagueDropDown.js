import { useEffect, useState, memo } from "react";
import { styled } from "@mui/material/styles";
import { Typography, Grid } from "@mui/material";
import apiAxios from "utils/apiAxios";
import { Btn, Search } from "components";
const Leagues = styled(Grid)(() => ({
  position: "absolute",
  top: "40px",
  right: "0",
  background: "#fff",
  borderRadius: "10px",
  zIndex: 10,
  padding: "0 10px 10px 10px",
  boxShadow: "0px 0px 10px rgba(2, 42, 84, 0.1) ",
  height: "200px",
  width: "250px",
  overflowY: "auto",

  "& .leagueName": {
    fontSize: "12px",
    fontWeight: 600,
    width: 200,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
  },
  poisition: "relative",
}));
export const LeagueDropDown = memo(({ clickHandler, wyLeagues }) => {
  const [search, setSearch] = useState("");
  const [leagues, setLeagues] = useState(wyLeagues);
  const onChange = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search) {
      const filteredLeagues = wyLeagues.filter((league) => {
        return league.name
          .toLocaleLowerCase()
          .startsWith(search.toLocaleLowerCase());
      });
      setLeagues(filteredLeagues);
    } else {
      setLeagues(wyLeagues);
    }
  }, [search]);


  return (
    <Leagues item container direction="column" wrap="nowrap">
      <Grid
        item
        container
        justifyContent="center"
        sx={{
          position: "sticky",
          left: 0,
          top: 0,
          background: "#fff",
          zIndex: 4,
          padding: "10px",
        }}
      >
        <Search
          width="90%"
          margin="7px auto 70"
          title="search"
          // color="red"
          border="2px solid #022A54"
          borderRadius="12px"
          padding="3px"
          onChange={onChange}
        />
      </Grid>

      {leagues.length ? (
        <>
          {leagues.map((league, i) => (
            <Btn
              padding="0"
              key={i}
              margin="10px 0"
              onClick={() => clickHandler(league)}
            >
              <Typography className="leagueName">{league?.name}</Typography>
            </Btn>
          ))}
        </>
      ) : (
        <></>
      )}
    </Leagues>
  );
});

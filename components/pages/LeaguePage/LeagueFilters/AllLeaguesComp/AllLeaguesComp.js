import { useState, useCallback, useMemo, useEffect } from "react";
import { Grid } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';

import { LettersComp } from "./LettersComp/LettersComp";
import { BottomFiltersComp } from "../BottomFiltersComp/BottomFiltersComp";

const useStyles = makeStyles(({ palette }) => ({
  countriesContainer: {
    marginTop: 16,
  },
  leaguesContainer: {
    padding: "22px 0 12px 14px",
    borderTop: "0.711458px solid #EFF1F5",
    marginTop: 20,
  },
  lettersContainer: {
    marginTop: 6,
  },
}));

const data1 = [
  {
    name: "albania",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "algeria",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "canada",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "egypt",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "france",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "brazil",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "saudan",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "palasteine",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
  {
    name: "russia",
    logoPath: "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
  },
];

export const AllLeaguesComp = () => {
  const classes = useStyles();
  const [selectedLetter, setSelectedLetter] = useState("a");
  const [selectedCountry, setCountry] = useState(null);
  const [selectedLeague, setLeague] = useState(null);

  const filterCounteries = useCallback(() => {
    const newData = data1.filter((country) =>
      country.name.startsWith(selectedLetter)
    );

    return newData;
  }, [data1, selectedLetter]);

  const filteredCounteries = useMemo(
    () => filterCounteries(),
    [selectedLetter, data1]
  );

  useEffect(() => {
    setCountry(null);
    setLeague(null);
  }, [selectedLetter]);

  const onClick = (name) => {
    setCountry(name);
  };

  const onSelectCountry = (name) => {
    setLeague(name);
  };
  return (
    <Grid container direction="column">
      <Grid
        item
        container
        justifyContent="space-between"
        className={classes.lettersContainer}
        wrap="nowrap"
      >
        <LettersComp
          selectedLetter={selectedLetter}
          setSelectedLetter={setSelectedLetter}
        />
      </Grid>
      <Grid item container className={classes.countriesContainer}>
        <BottomFiltersComp
          data={filteredCounteries}
          onClick={onClick}
          selectedItem={selectedCountry}
        />
      </Grid>
      {selectedCountry && (
        <Grid item container className={classes.leaguesContainer}>
          <BottomFiltersComp
            data={[
              {
                name: "Premier league",
                logoPath:
                  "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
              },
              {
                name: "champions league",
                logoPath:
                  "https://cdn.sportmonks.com/images/soccer/leagues/8/8.png",
              },
            ]}
            onClick={onSelectCountry}
            selectedItem={selectedLeague}
          />
        </Grid>
      )}
    </Grid>
  );
};

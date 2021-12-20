import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import { Btn } from "components";

const useStyles = makeStyles(({ palette }) => ({
  container: {
    width: 30,
    height: 30,
    // border: "0.7px solid #EAEDF2",
    borderRadius: "50%",
    "@media (max-width: 960px)": {
      width: 25,
      height: 25,
    },
  },
  text: {
    fontSize: 11,
    fontWeight: 600,
    // color: "rgba(2, 42, 84, 0.5)",
  },
}));

const letters = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "r",
  "q",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

export const LettersComp = ({ selectedLetter, setSelectedLetter }) => {
  const classes = useStyles();

  return (
    <>
      {letters.map((l, i) => (
        <Btn
          key={i}
          padding="0px"
          borderRadius="50%"
          onClick={() => setSelectedLetter(l)}
        >
          <Grid
            item
            container
            justifyContent="center"
            alignItems="center"
            className={classes.container}
            style={{
              background:
                selectedLetter === l
                  ? "rgba(36, 107, 253, 0.08)"
                  : "transparent",
              border: selectedLetter === l ? "none" : "0.7px solid #EAEDF2",
            }}
          >
            <Typography
              className={classes.text}
              style={{
                color:
                  selectedLetter === l ? "#246BFD" : "rgba(2, 42, 84, 0.5)",
              }}
            >
              {l}
            </Typography>
          </Grid>
        </Btn>
      ))}
    </>
  );
};

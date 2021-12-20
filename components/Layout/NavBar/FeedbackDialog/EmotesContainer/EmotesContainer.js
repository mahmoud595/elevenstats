import { memo } from "react";
import makeStyles from '@mui/styles/makeStyles';
import { Grid } from "@mui/material";

import {
  AngryEmote,
  SadEmote,
  NormalEmote,
  HappyEmote,
  LoveEmote,
} from "public";
const emotes = [
  { emote: <AngryEmote />, type: "angry" },
  { emote: <SadEmote />, type: "sad" },
  { emote: <NormalEmote />, type: "normal" },
  { emote: <HappyEmote />, type: "good" },
  { emote: <LoveEmote />, type: "love" },
];

const useStyles = makeStyles(({ palette }) => ({
  emotesContainer: {
    padding: "43px 12.5em",
    borderBottom: "1px solid #EAEDF2",
    "&>div": {
      margin: "0 2.5em",
    },
    "&>div:first-child": {
      margin: "0 2.5em 0 0",
    },
    "&>div:last-child": {
      margin: "0 0 0 2.5em",
    },
    "@media (max-width:600px)": {
      padding: "37px 14px",
    },
  },
  emote: {
    cursor: "pointer",
    transition: "all ease-in-out 0.2s",
    borderRadius: "50%",
    padding: "0.8em 1em",
    "@media (max-width:600px)": {
      padding: "0",
    },
    "&:hover": {
      transform: "scale(1.3,1.3)",
    },
  },
}));
export const EmotesContainer = memo(({ setEmoteSelected, emoteSelected }) => {
  const classes = useStyles();
  const emoteHandler = (type) => {
    setEmoteSelected(emoteSelected === type ? null : type);
  };
  return (
    <Grid
      item
      container
      justifyContent="space-around"
      alignItems="center"
      className={classes.emotesContainer}
      wrap="nowrap"
    >
      {emotes.map(({ emote, type }, i) => (
        <Grid
          item
          key={i}
          onClick={() => emoteHandler(type)}
          className={classes.emote}
          style={{
            opacity: `${
              emoteSelected ? (type === emoteSelected ? "1" : "0.3") : "1"
            }`,
            transform: `${type === emoteSelected ? "scale(1.3,1.3)" : "none"}`,
            background: `${
              type === emoteSelected
                ? "rgba(255, 217, 59, 0.18)"
                : "transparent"
            }`,
          }}
        >
          {emote}
        </Grid>
      ))}
    </Grid>
  );
});

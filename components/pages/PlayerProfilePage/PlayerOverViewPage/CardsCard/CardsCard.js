import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { PlayerCardWrapper } from "../PlayerCardWrapper/PlayerCardWrapper";

const Cards = styled(Grid)(() => ({
  marginTop: "11px",
  "& .cardYellowRed": {
    "clip-path": "polygon(0 0, 100% 6%, 100% 89%, 5% 100%)",
    width: "13px",
    height: "19px",
  },
  "& .cardText": {
    fontSize: "11px",
    fontWeight: 600,

    color: "#fff",
    textAlign: "center",
  },
  "& .cardsContainer": {
    marginRight: "10px",
  },
  "& .cardYellow": {
    marginLeft: "auto",
    background: "linear-gradient(180deg, #FFE067 0%, #ECB200 89.47%)",
  },
  "& .cardLeagueText": {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "30px",
    color: "#022A54",
    textTransform: "capitalize",
  },
  "& .cardRed": {
    background: "linear-gradient(180deg, #FF8B99 0%, #EA2C42 100%)",
  },
}));
const data = [
  { red: 0, yellow: 1, league: "premier league" },
  { red: 1, yellow: 2, league: "english fa cup" },
  { red: 1, yellow: 0, league: "carabao cup" },
];
export const CardsCard = () => {
  return (
    <PlayerCardWrapper
      title="Cards"
      gridArea="cards"
      svgbgColor="rgba(252, 125, 88, 0.1)"
      icon={
        <Grid
          sx={{
            width: "12px",
            height: "16px",
            background: "#FC7D58",
            borderRadius: "1px",
            transform: "rotate(21.65deg)",
          }}
        ></Grid>
      }
    >
      <Cards item container direction="column">
        {data.map(({ red, yellow, league }, i) => (
          <Grid item container alignItems="center" wrap="nowrap" key={i}>
            <Grid
              item
              container
              xs={2}
              className="cardsContainer"
              wrap="nowrap"
            >
              {red ? (
                <Grid item className={`cardYellowRed ${red && `cardRed`}`}>
                  <Typography className="cardText">{red}</Typography>
                </Grid>
              ) : (
                <></>
              )}
              {yellow ? (
                <Grid
                  item
                  className={`cardYellowRed ${yellow && `cardYellow`}`}
                >
                  <Typography className="cardText">{yellow}</Typography>
                </Grid>
              ) : (
                <></>
              )}
            </Grid>
            <Grid item>
              <Typography className="cardLeagueText">{league}</Typography>
            </Grid>
          </Grid>
        ))}
      </Cards>
    </PlayerCardWrapper>
  );
};

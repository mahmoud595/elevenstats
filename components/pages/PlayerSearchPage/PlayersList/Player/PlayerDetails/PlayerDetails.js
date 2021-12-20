import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const PlayerDetailsContainer = styled(Grid)(({}) => ({
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  width: 200,
  position: "sticky",
  background: "#F6F7FA",
  left: -8,
  zIndex: 2,
  paddingLeft: 17,

  "& > div:first-of-type": {
    marginBottom: 7,
  },
  "& .text": {
    fontSize: 12,
    fontWeight: 600,
  },
  "& .imageContainer": {
    marginRight: 12,
    display: "flex",
    alignItems: "center",
  },
  "& .blueColor": {
    color: "#022A54",
  },
}));

export const PlayerDetails = ({
  playerName = "-",
  PlayerImageUrl,
  teamName = "-",
  teamImageUrl,
}) => {
  return (
    <PlayerDetailsContainer>
      {/* <Grid container direction="column" justifyContent="center" wrap="nowrap"> */}
      {[0, 1].map((i) => (
        <Grid
          key={i}
          item
          container
          alignItems="center"
          // justifyContent="center"
          wrap="nowrap"
        >
          <Grid item className="imageContainer" key={i}>
            <Image
              width={16}
              height={16}
              layout="fixed"
              src={
                i === 0
                  ? PlayerImageUrl ??
                    "https://cdn.sportmonks.com/images/soccer/placeholder.png"
                  : teamImageUrl ??
                    "https://cdn.sportmonks.com/images/soccer/placeholder.png"
              }
              alt={i === 0 ? playerName : teamName}
            />
          </Grid>
          <Grid item>
            <Typography
              className={i === 1 ? "text" : "text blueColor"}
              variant="h2"
              noWrap
            >
              {i === 0 ? playerName : teamName}
            </Typography>
          </Grid>
        </Grid>
      ))}
      {/* </Grid> */}
    </PlayerDetailsContainer>
  );
};

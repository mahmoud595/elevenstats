import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";

const PlayerNationContainer = styled(Grid)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: 100,
  "& .imageContainer": {
    position: "relative",
    width: 24,
    height: 24,

    "& >div": {
      borderRadius: "50%",
    },
  },
}));

export const PlayerNation = ({ countryImage, countryName = "-" }) => {
  return (
    <PlayerNationContainer>
      <Grid item className="imageContainer">
        <Image
          //   width={24}
          //   height={24}
          layout="fill"
          src={
            countryImage ??
            "https://cdn.sportmonks.com/images/soccer/placeholder.png"
          }
          alt={countryName}
        />
      </Grid>
    </PlayerNationContainer>
  );
};

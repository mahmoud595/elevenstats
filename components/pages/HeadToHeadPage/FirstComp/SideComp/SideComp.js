import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { StatsRow } from "./StatsRow/StatsRow";
import { WinLoseComp } from "./WinLoseComp/WinLoseComp";

const SideComponent = styled(Grid)(({ theme }) => ({
  height: "100%",
  "& .sideCompTextContainer": {
    height: "100%",
    textAlign: "center",
    color: "#022A54",
  },

  "& .sideCompText": {
    lineHeight: "14px",
  },
}));

export const SideComp = ({
  small,
  type,
  form,
  PPG,
  goalsScoredPerMatch,
  goalsConcededPerMatch,
}) => {
  return (
    <SideComponent
      container
      direction="column"
      justifyContent="space-between"
      wrap="nowrap"
      sx={{
        "& > div:not(:last-child)": {
          marginBottom: small ? "5 px" : "1em",
          "@media (max-width: 960px)": {
            marginBottom: small ? "5 px" : "1em",
          },
        },
      }}
    >
      <StatsRow
        color="#38580A"
        number={PPG}
        name="Excellent Form"
        small={small}
        type={type}
      >
        <WinLoseComp
          size={small ? 22 : 18}
          firstComp={true}
          form={form}
          type={type}
          midFontSize="1.6em"
        />
      </StatsRow>

      <StatsRow
        color="#FFF"
        number={goalsScoredPerMatch}
        name="Excellent"
        small={small}
        type={type}
      >
        <Grid
          container
          justifyContent={type === "left" ? "flex-end" : "flex-start"}
          alignItems="center"
          className="sideCompTextContainer"
        >
          <Typography
            variant={small ? "subtitle1" : "h5"}
            className="sideCompText"
            sx={{
              "@media (max-width: 17650px)": {
                fontSize: !small && "1.2rem",
              },
              "@media (max-width: 1555px)": {
                fontSize: !small && "1.1rem",
              },
              "@media (max-width: 1435px)": {
                fontSize: !small && "1.6em",
              },
              "@media (max-width: 960px)": {
                fontSize: !small && "0.7rem",
                lineHeight: "10px",
              },
            }}
          >
            GOALS SCORED / MATCH
          </Typography>
        </Grid>
      </StatsRow>

      <StatsRow
        color="#38580A"
        number={goalsConcededPerMatch}
        name="Very Good"
        small={small}
        type={type}
      >
        <Grid
          container
          // justifyContent="flex-start"
          justifyContent={type === "left" ? "flex-end" : "flex-start"}
          alignItems="center"
          className="sideCompTextContainer"
        >
          <Typography
            variant={small ? "subtitle1" : "h5"}
            className="sideCompText"
            sx={{
              "@media (max-width: 17650px)": {
                fontSize: !small && "1.2rem",
              },
              "@media (max-width: 1555px)": {
                fontSize: !small && "1.1rem",
              },
              "@media (max-width: 1435px)": {
                fontSize: !small && "1rem",
              },
              "@media (max-width: 960px)": {
                fontSize: !small && "0.7rem",
                lineHeight: "10px",
              },
            }}
          >
            GOALS CONCEEDED / MATCH
          </Typography>
        </Grid>
      </StatsRow>
    </SideComponent>
  );
};

import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const PlayerCardWrapperContainer = styled(Box)(() => ({
  gridArea: "seasonStats",
  overflow: "hidden",
  background: "#FFF",
  color: "#022A54",
  display: "flex",
  flexDirection: "column",
  padding: "16px",

  "& .svgConatiner": {
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "5px 7px",
    marginRight: "12px",

    "&>svg": {
      width: 18,
      height: 18,
    },
  },
  "& .title": {
    fontSize: 12,
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));
export const PlayerCardWrapper = ({
  gridArea,
  title,
  icon,
  children,
  svgbgColor = "rgba(36, 107, 253, 0.08)",
  color = "inherit",
  rightHeaderComp,
}) => {
  return (
    <PlayerCardWrapperContainer sx={{ gridArea }}>
      <Grid container alignItems="center">
        <Grid
          item
          className="svgConatiner"
          sx={{ background: svgbgColor, color }}
        >
          {/* <playerSeasonStats /> */}
          {icon}
        </Grid>
        <Grid item>
          <Typography variant="h2" className="title">
            {title}
          </Typography>
        </Grid>
        {rightHeaderComp ? rightHeaderComp() : null}
      </Grid>
      {children}
    </PlayerCardWrapperContainer>
  );
};

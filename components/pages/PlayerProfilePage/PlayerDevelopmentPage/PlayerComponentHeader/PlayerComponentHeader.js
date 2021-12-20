import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Header = styled(Grid)(() => ({
  "& .headerTitle": {
    fontSize: "14px",
    lineHeight: "12px",
    fontWeight: 700,
    color: "rgba(2, 42, 84, 0.6)",
  },
  "& .headerSeasonGrid": {
    padding: "7px 9px 7px 8px",
    backgroundColor: "#EFF1F5",
    borderRadius: "7px",
    marginLeft: "10px",
  },
}));

export const PlayerComponentHeader = memo(
  ({ title, seasonText, margin, children }) => {
    return (
      <Header item container direction="column" sx={{ margin }}>
        <Grid item container alignItems="center">
          <Typography
            className="headerTitle"
            variant=" "
            sx={{ color: "#022A54 !important" }}
          >
            {title}
          </Typography>
          <Grid item className="headerSeasonGrid">
            <Typography className="headerTitle" variant="h2">
              {seasonText}
            </Typography>
          </Grid>
        </Grid>
        {children}
      </Header>
    );
  }
);

import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const PREFIX = "playerList";

const classes = {
  row: `${PREFIX}-row`,
  rowsContainer: `${PREFIX}-rowsContainer`,
  container: `${PREFIX}-container`,
  // rightSidecontainer: `${PREFIX}-rightSidecontainer`,
  // rightSide: `${PREFIX}-rightSide`,
  header: `${PREFIX}-header`,
  overAllHeader: `${PREFIX}-overAllHeader`,
  headerText: `${PREFIX}-headerText`,
};

const HeaderContainer = styled("div")(({}) => ({
  height: 72,
  display: "flex",
  paddingLeft: 5,
  flexWrap: "nowrap",

  "& > div": {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  [`& .${classes.headerText}`]: {
    fontSize: 14,
    fontWeight: 600,
    textAlign: "center",
    textTransform: "capitalize",
  },
  [`& .${classes.overAllHeader}`]: {
    width: 124,
    position: "sticky",
    right: 0,
    background: "#FFF",
  },
}));

export const PlayerListHeader = ({ header }) => {
  return (
    <HeaderContainer wrap="nowrap">
      {header.map(({ name, width = 130 }, i) => (
        <Grid
          item
          key={i}
          sx={{
            width,
            ...(i === 0 && {
              position: "sticky",
              left: -8,
              background: "#FFF",
            }),
          }}
        >
          <Typography className={classes.headerText}>{name}</Typography>
        </Grid>
      ))}

      <Grid item className={classes.overAllHeader}>
        <Typography className={classes.headerText}>Overall</Typography>
      </Grid>
    </HeaderContainer>
  );
};

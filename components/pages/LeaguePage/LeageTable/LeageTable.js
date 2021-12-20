import { Grid, Typography } from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import Image from "next/image";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    background: "#FFF",
    borderRadius: 14,
    padding: "0 20px",
    position: "relative",
  },
  headerText: {
    fontSize: 11,
    fontWeight: 600,
    textTransform: "uppercase",
  },
  imageContainer: {
    // marginRight: 14,
    display: "flex",
    alignItems: "center",
  },
  rowContainer: {
    borderBottom: "0.711653px solid #EFF1F5",
    padding: "18px 0",
    // position: "relative",
    "&:before": {
      content: '""',
      width: 3,
      height: 30,
      position: "absolute",
      left: 0,
      background: "red",
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
    },
  },
  playerProfileRowContainer: {
    padding: "8px 0",
  },
  rowText: {
    fontWeight: 400,
    fontSize: 13,
  },
  playerProfileRowText: {
    fontWeight: 500,
    fontSize: 12,
  },
  headerRow: {
    margin: "24px 0 10px 0",
  },
}));

const data1 = [
  {
    col0: "1",
    col1: {
      name: "liverpool",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "19",
    col3: "4",
    col4: "1",
    col5: "1",
    col6: "13-5",
    col7: "8",
    col8: "13",
  },
  {
    col0: "2",
    col1: {
      name: "liverpool",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "19",
    col3: "4",
    col4: "1",
    col5: "1",
    col6: "13-5",
    col7: "8",
    col8: "13",
  },
  {
    col0: "3",
    col1: {
      name: "liverpool",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "19",
    col3: "4",
    col4: "1",
    col5: "1",
    col6: "13-5",
    col7: "8",
    col8: "13",
  },
  {
    col0: "4",
    col1: {
      name: "liverpool",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "19",
    col3: "4",
    col4: "1",
    col5: "1",
    col6: "13-5",
    col7: "8",
    col8: "13",
  },
];
const header1 = [
  { name: "#", width: "2%" },
  { name: "Team", width: "30%" },
  { name: "PL" },
  { name: "W" },
  { name: "d" },
  { name: "l" },
  { name: "+/-" },
  { name: "gd" },
  { name: "pts" },
];

export const LeagueTable = ({
  data = data1,
  header = header1,
  playerProfile,
}) => {
  const classes = useStyles();
  return (
    <Grid container direction="column" className={classes.root}>
      <Grid
        container
        justifyContent="space-between"
        wrap="nowrap"
        className={classes.headerRow}
      >
        {header.map(({ name, width = "7%" }, i) => (
          <Grid
            item
            key={i}
            style={{
              maxWidth: width,
              flexBasis: width,
              textAlign: i === 1 ? "start" : "center",
            }}
          >
            <Typography
              color={playerProfile ? "secondary" : "primary"}
              className={classes.headerText}
            >
              {name}
            </Typography>
          </Grid>
        ))}
      </Grid>
      {data.map((row, index) => (
        <Grid
          container
          key={index}
          justifyContent="space-between"
          alignItems="center"
          wrap="nowrap"
          className={
            playerProfile
              ? classes.playerProfileRowContainer
              : classes.rowContainer
          }
        >
          {Object.keys(row).map((col, i) => (
            <Grid
              item
              key={i}
              style={{
                maxWidth: header[i].width || "7%",
                flexBasis: header[i].width || "7%",
                textAlign: i === 1 ? "start" : "center",
              }}
            >
              {col === "col1" ? (
                <Grid container alignItems="center" wrap="nowrap">
                  <Grid
                    item
                    className={classes.imageContainer}
                    marginRight={playerProfile ? "8px" : "14px"}
                  >
                    <Image
                      src={row[col].img}
                      width={playerProfile ? 11 : 24}
                      height={playerProfile ? 14 : 24}
                      layout="fixed"
                      alt={`image for ${row[col].name}`}
                    />
                  </Grid>
                  <Grid item>
                    {" "}
                    <Typography color="primary" className={classes.headerText}>
                      {row[col].name}
                    </Typography>
                  </Grid>
                </Grid>
              ) : (
                <Typography
                  color="primary"
                  className={
                    playerProfile
                      ? classes.playerProfileRowText
                      : classes.rowText
                  }
                >
                  {row[col]}
                </Typography>
              )}
            </Grid>
          ))}
        </Grid>
      ))}
    </Grid>
  );
};

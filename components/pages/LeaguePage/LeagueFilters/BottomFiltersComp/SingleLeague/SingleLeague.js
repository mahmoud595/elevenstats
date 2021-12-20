import { Grid, Typography } from "@mui/material";
import makeStyles from '@mui/styles/makeStyles';
import Image from "next/dist/client/image";

import { Btn } from "components";

const useStyles = makeStyles(({ palette }) => ({
  root: {
    maxWidth: "20%",
    flexBasis: "20%",
    padding: "1.3em 0",
    minWidth: 145,
  },
  imageContainer: {
    display: "flex",
    alignItems: "center",
    marginRight: 8,
  },
  league: {
    fontSize: 12,
    whiteSpace: "nowrap",
  },
}));

export const SingleLeague = ({
  item,
  index,
  onClick = () => console.log("pass"),
  selectedItem,
}) => {
  const classes = useStyles();
  return (
    <Grid
      key={index}
      item
      className={classes.root}
      style={{
        opacity: selectedItem ? (item.name === selectedItem ? 1 : 0.5) : 1,
      }}
    >
      <Btn onClick={() => onClick(item.name)} padding={0}>
        <Grid container alignItems="center" wrap="nowrap">
          <Grid item className={classes.imageContainer}>
            <Image
              src={item.logoPath}
              width={15}
              height={15}
              layout="fixed"
              alt={`image for ${item.name}`}
            />
          </Grid>
          <Grid item>
            <Typography className={classes.league} color="primary">
              {item.name}
            </Typography>
          </Grid>
        </Grid>
      </Btn>
    </Grid>
  );
};

import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { Btn } from "../../../../..";
import { RightArrow } from "public/";

const useStyles = makeStyles((theme) => ({
  //   root: {
  //     background: "linear-gradient(to bottom,#38580A , #0B1202)",
  //     padding: "3em 2em",
  //     borderRadius: "0px 0px 10px 10px",
  //     color: "#FFF",
  //   },
  btnText: {
    color: "#1F3006",
    textTransform: "capitalize",
    "@media (max-width: 1620px)": {
      fontSize: "1rem",
    },
  },
}));

export const BecomePremiumBtn = () => {
  const classes = useStyles();
  return (
    <Btn
      fullWidth
      backgroundColor="#fff"
      borderRadius="6px"
      className={classes.btn}
      padding="0.9vh"
      width="100%"
    >
      <Grid
        container
        alignItems="center"
        justifyContent="space-between"
        wrap="nowrap"
      >
        <Grid item>
          <Typography variant="h5" className={classes.btnText} xs={11}>
            Become A Premium Member
          </Typography>
        </Grid>
        <Grid
          item
          className={classes.btnArrow}
          container
          justifyContent="center"
          xs={1}
        >
          {/* <RightArrow /> */}
          <Typography>&#62;</Typography>
        </Grid>
      </Grid>
    </Btn>
  );
};

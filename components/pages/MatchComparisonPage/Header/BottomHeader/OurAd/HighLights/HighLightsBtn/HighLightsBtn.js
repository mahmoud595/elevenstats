import { Grid } from "@mui/material";
import Image from "next/image";
import makeStyles from "@mui/styles/makeStyles";

import { Btn } from "../../../../../../..";

const useStyles = makeStyles((theme) => ({
  highlightbtn: {
    marginTop: "1em",
  },
}));
const HighLightsBtn = () => {
  const classes = useStyles();

  return (
    <Grid item className={classes.highlightbtn}>
      <Btn
        padding="1em"
        borderColor="#BF8FBA"
        backgroundColor="#43093C"
        fontSize="1.1em"
        color="#fff"
        margin="0 1em 0 0"
        fontWeight="600"
        textTransform="capitalize"
        text="view highlights"
      >
        <Image src="/forwardArrow.svg" width={6} height={6} />
      </Btn>
    </Grid>
  );
};

export default HighLightsBtn;

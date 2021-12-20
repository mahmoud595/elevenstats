import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "components";
import { FirstPositionSelection } from "./FirstPositionSelection/FirstPositionSelection";
import { SecondPositionSelection } from "./SecondPositionSelection/SecondPositionSelection";

const PositionSection = styled(Grid)(({ theme }) => ({
  "& .headerTitle": {
    fontSize: "1.8em",
    lineHeight: "30px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "rgba(2, 42, 84, 0.6)",
    "@media (max-width:960px)": {
      fontSize: "1.3em",
    },
  },
  "& .btnText": {
    lineHeight: "15px",
  },
  "& .headerLeftGrid": {
    maxWidth: "68.4%",
    flexBasis: "68.4%",
  },

  "& .btnsGrid": {
    display: "flex",
    "& div:last-child": {
      marginLeft: "1.6em",
    },
  },
  "& .positionSelections": {
    padding: "9px 0 18px 0",
    borderBottom: "1px solid #EAEDF2",
    "&>div:last-child": {
      marginTop: "12px",
    },
  },
  "& .frequencyGrid": {
    maxWidth: "31.6%",
    flexBasis: "31.6%",
    paddingLeft: "4em",
    "@media (max-width:960px)": {
      paddingLeft: "2em",
    },
  },
}));
export const AdvancedPositionSection = () => {
  const [selected, setSelected] = useState(0);
  const clickHandler = (i) => {
    setSelected(i);
  };
  return (
    <PositionSection>
      <Grid
        item
        container
        className="header"
        justifyContent="space-between"
        alignItems="center"
        wrap="nowrap"
      >
        <Grid
          item
          container
          alignItems="center"
          wrap="nowrap"
          className="headerLeftGrid"
          justifyContent="space-between"
        >
          <Grid item>
            <Typography variant="h2" className="headerTitle">
              position
            </Typography>
          </Grid>
          <Grid item className="btnsGrid">
            {["or", "and"].map((val, i) => (
              <Grid item key={i}>
                <Btn
                  padding="7px 2.1em 7px 1.8em"
                  borderColor={selected === i ? "#fff" : "#A1B5C9"}
                  borderRadius="35px"
                  onClick={() => clickHandler(i)}
                  lowSizePadding="3px 1em 3px 1em"
                  backgroundColor={
                    selected === i ? "rgba(36, 107, 253, 0.2)" : "transparent"
                  }
                >
                  <Typography
                    variant="h2"
                    className="headerTitle btnText"
                    style={{
                      color: `${selected === i ? "#3B8BFF" : "#A1B5C9"}`,
                    }}
                  >
                    {val}
                  </Typography>
                </Btn>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item className="frequencyGrid">
          <Typography variant="h2" className="headerTitle frequencyText">
            frequency
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className="positionSelections">
        <FirstPositionSelection />
        <SecondPositionSelection />
      </Grid>
    </PositionSection>
  );
};

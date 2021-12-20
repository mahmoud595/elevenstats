import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { ChartTypeWrapper } from "../ChartTypeWrapper/ChartTypeWrapper";
import { Btn } from "components";
import { ChartSelectionWrapper } from "../ChartSelectionWrapper/ChartSelectionWrapper";

const Stats = styled(Grid)(({ theme }) => ({
  marginTop: "24px",
  "& .statsText": {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "16px",
    textTransform: "capitalize",
  },
  "& .statsContainer": {
    padding: "21px 0",
    background: "rgba(161, 181, 201, 0.08)",
    borderRadius: "14px",
    margin: "24px 0 0 0",
  },
}));

const stats = [
  "Save %",
  "Expected save %",
  "Exits",
  "Exit success %",
  "GK aerial duels won",
  "GK aerial duels %",
];
export const StatsSelection = ({ data }) => {
  const [selectedBtn, setSelectedBtn] = useState(data[0]);

  const clickHandler = (val) => {
    setSelectedBtn(val);
  };
  return (
    <ChartTypeWrapper title="Select stats">
      <Stats
        item
        container
        alignItems="center"
        justifyContent="center"
        direction="column"
      >
        <Grid item container alignItems="center" justifyContent="center">
          {data.map((val, i) => (
            <Btn
              padding="5px 12px"
              borderColor={val === selectedBtn ? "#fff" : "#A1B5C9"}
              borderRadius="22px"
              margin="0 24px 0 0"
              key={i}
              onClick={() => clickHandler(val)}
              backgroundColor={val === selectedBtn ? "#E5EDFF" : "#fff"}
            >
              <Typography
                className="statsText"
                sx={{
                  color:
                    val === selectedBtn ? "#246BFD" : "rgba(2, 42, 84, 0.6)",
                }}
              >
                {val}
              </Typography>
            </Btn>
          ))}
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          justifyContent="center"
          className="statsContainer"
        >
          <ChartSelectionWrapper data={stats} checkbox justify="center" />
        </Grid>
      </Stats>
    </ChartTypeWrapper>
  );
};

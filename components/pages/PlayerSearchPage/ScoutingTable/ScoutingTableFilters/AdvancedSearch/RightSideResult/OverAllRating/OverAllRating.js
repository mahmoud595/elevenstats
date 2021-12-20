import { Grid, Typography, Input } from "@mui/material";
import { styled } from "@mui/material/styles";

import { ResultWrapper } from "../ResultWrapper/ResultWrapper";

const Container = styled(Grid)(({ theme }) => ({
  "& > *": {
    marginBottom: "24px",
  },
  "& .root": {
    width: "165px",
    height: "32px",
    borderRadius: "8px",
    border: "1px solid #A1B5C9",
    padding: "0px",
    fontSize: "11px",
    fontWeight: 500,
    color: "#677F98",
    marginRight: "8px",
    marginTop: "10px",
    // background: "#F6F7FA",
  },
  "& .focused": {
    border: "1px solid #A1B5C9",
  },
  "& .input": {
    padding: "0px 0px 0px 5px",
  },
  "& .text": {
    fontSize: 10,
    fontWeight: 600,
  },
  "& .infoContainer": {
    background: "#F6F7FA",
    borderRadius: "8px",
    padding: "9px",
    width: "80%",
  },
  "& .infoText": {
    color: "#677F98",
    fontSize: "11px",
    fontWeight: 500,
  },
}));

export const OverAllRating = () => {
  return (
    <ResultWrapper title="Overall Rating">
      <Container container direction="column" marginTop="22px">
        <Grid item className="infoContainer">
          <Typography variant="h2" className="infoText">
            Enter values from 0 to 100 or drag the chart head.
          </Typography>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={6} container direction="column">
            <Typography
              className="infoText"
              sx={{ textTransform: "uppercase" }}
            >
              from
            </Typography>
            <Input
              disableUnderline={true}
              classes={{ root: "root", focused: "focused", input: "input" }}
              placeholder="Enter Value"
            />
          </Grid>
          <Grid item xs={12} md={6} container direction="column">
            <Typography
              className="infoText"
              sx={{ textTransform: "uppercase" }}
            >
              to
            </Typography>
            <Input
              disableUnderline={true}
              classes={{ root: "root", focused: "focused", input: "input" }}
              placeholder="Enter Value"
            />
          </Grid>
        </Grid>
      </Container>
    </ResultWrapper>
  );
};

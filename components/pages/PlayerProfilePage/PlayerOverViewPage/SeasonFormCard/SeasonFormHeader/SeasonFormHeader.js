import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { Goal, Form, Expand, Question } from "public";

import { SwitchComp, Btn } from "components";

export const SeasonFormHeader = ({ active, setActive }) => {
  // const [active, setActive] = useState("form");

  return (
    <Grid container alignItems="center">
      <Btn
        width="58px"
        margin="0px 12px 0px 0px"
        onClick={() => setActive("form")}
        backgroundColor={
          active === "form" ? "rgba(36, 107, 253, 0.08)" : "#F6F7FA"
        }
      >
        <Goal
          style={{
            fill: active === "form" ? "#246BFD" : " #A1B5C9",
            marginRight: "6px",
          }}
        />
        <Typography className="text">From</Typography>
      </Btn>

      <Btn
        width="71px"
        onClick={() => setActive("season")}
        backgroundColor={
          active !== "form" ? "rgba(36, 107, 253, 0.08)" : "#F6F7FA"
        }
      >
        <Form
          style={{
            fill: active !== "form" ? "#246BFD" : " #A1B5C9",
            marginRight: "6px",
          }}
        />
        <Typography className="text">Season</Typography>
      </Btn>

      <Grid
        item
        sx={{ marginLeft: "auto", display: "flex", alignItems: "center" }}
      >
        <SwitchComp
          rootHeight={16}
          thumbHeight={10}
          thumbWidth={10}
          width={31}
          translate={14}
          checkHandler={() => console.log("pass")}
        />
        <Typography className="text" marginLeft="8px">
          PER 90
        </Typography>
      </Grid>

      <Btn
        width="24px"
        height="24px"
        margin="0px 0px 0px 18px"
        onClick={() => {}}
        backgroundColor="rgba(36, 107, 253, 0.08)"
      >
        <Expand />
      </Btn>

      <Btn
        width="24px"
        height="24px"
        margin="0px 0px 0px 18px"
        onClick={() => {}}
        backgroundColor="rgba(36, 107, 253, 0.08)"
      >
        <Question />
      </Btn>
    </Grid>
  );
};

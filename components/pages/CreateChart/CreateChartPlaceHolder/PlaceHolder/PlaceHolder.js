import { Fragment } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import Image from "next/image";

import chartPlaceholder from "public/chartPlaceholder.png";
import { Btn } from "components";

const PlaceHolderContainer = styled(Grid)(({ theme }) => ({
  "& .placeHolderText": {
    fontSize: "16px",
    lineHeight: "16px",
    color: "#022A54",
    marginTop: "20px",
    fontWeight: 600,
  },
  "& .placeHolderBtnText": {
    fontSize: "14px",
    lineHeight: "10px",
    color: "#FFFFFF",
    fontWeight: 600,
  },
}));

import React from "react";

export const PlaceHolder = ({ setCreateChart }) => {
  const btnHandler = () => {
    setCreateChart(true);
  };
  return (
    <PlaceHolderContainer
      alignItems="center"
      justifyContent="center"
      direction="column"
      container
      item
    >
      <Image src={chartPlaceholder} alt="chart placeholder" />
      <Typography className="placeHolderText">
        You hadn’t created any charts yet
      </Typography>
      <Btn
        padding="12px 22px 11px 20px"
        backgroundColor="#022A54"
        borderRadius="8px"
        margin="30px 0 0 0"
        onClick={btnHandler}
      >
        <Typography className="placeHolderBtnText">Create Chart</Typography>
      </Btn>
    </PlaceHolderContainer>
  );
};

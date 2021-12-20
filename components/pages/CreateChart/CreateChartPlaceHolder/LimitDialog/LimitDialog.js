import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, ClickAwayListener, Dialog } from "@mui/material";

import Image from "next/image";
import { Btn } from "components";
import {
  Download,
  WatermarkAdd,
  WatermarkRemove,
  Chart,
  Rename,
  Upload,
  Link,
  Field,
  Folder,
  Share,
  UpgradeLock,
} from "public";

const perks = [
  { icon: <WatermarkRemove />, text: "Remove Eleven Stats watermark." },
  { icon: <Folder />, text: "Organize charts in Folders." },
  { icon: <WatermarkAdd />, text: "Add your own custom watermark." },
  { icon: <Share />, text: "Share your charts and folders easily." },
  { icon: <Chart />, text: "Unlimited charts." },
  { icon: <Link />, text: "Get a custom link to your profile." },
  { icon: <Rename />, text: "Rename your custom charts." },
  { icon: <Field />, text: "Access to over 500 leagues." },
  { icon: <Upload />, text: "Upload data from .xls or .csv files." },
];
const Limit = styled(Dialog)(({ theme }) => ({
  "& .dialogPaper": {
    padding: "49px 49px 32px 48px",
    borderRadius: "24px",
    display: "flex",
    flexWrap: "nowrap",
    flexDirection: "row",
    width: "70%",
    maxWidth: "none",
  },
  "& .btnText": {
    color: "#246BFD",
    fontSize: "12px",
    lineHeight: "10px",
    fontWeight: 500,
    whiteSpace: "nowrap",
    marginLeft: "10px",
  },
  "& .rightContainer": {
    marginLeft: "55px",
  },
  "& .title": {
    fontSize: "20px",
    fontWeight: 700,
    lineHeight: "24px",
    color: "#022A54",
    whiteSpace: "nowrap",
  },
  "& .instructions": {
    lineHeight: "24px",
    fontWeight: 500,
    fontSize: "13px",
    color: "rgba(2, 42, 84, 0.6)",
    margin: "16px 0 40px 0",
  },
  "& .upgradeTitle": {
    fontSize: "16px",
    fontWeight: "700",
    lineHeight: "24px",
    color: "#022A54",
    whiteSpace: "nowrap",
    marginBottom: "6px",
  },
  "& .perk": {
    marginTop: "20px",
    display: "flex",
    alignItems: "center",
  },
  "& .iconGrid": {
    width: "30px",
    height: "30px",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    borderRadius: "7px",
    backgroundColor: "#F6F7FA",
  },
  "& .perkText": {
    fontSize: "12px",
    fontWeight: "600",
    lineHeight: "24px",
    color: "#022A54",
    whiteSpace: "nowrap",
    marginLeft: "11px",
  },
  "& .upgradeText": {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "10px",
    letterSpace: "1.5px",
    color: "#fff",
    marginLeft: "9px",
  },
  "& .btns": {
    marginTop: "32px",
  },
  "& .noUpgradeText": {
    fontSize: "14px",
    fontWeight: 500,
    lineHeight: "10px",
    color: "rgba(2, 42, 84, 0.6)",
  },
}));

export const LimitDialog = ({ limitDialog, setLimitDialog }) => {
  const dialogHandler = () => {
    setLimitDialog(!limitDialog);
  };

  return (
    <Limit
      onClose={dialogHandler}
      open={limitDialog}
      classes={{
        paper: "dialogPaper",
        root: "dialogRoot",
      }}
    >
      <Grid container direction="column" alignItems="center">
        <Image
          src="/chartPlaceholder.png"
          width={300}
          height={259}
          alt="chart placeholder"
        />
        <Grid item>
          <Btn
            padding="11px 14px 8px 15px"
            backgroundColor="#F8FAFF"
            borderRadius="8px"
          >
            <Grid item container alignItems="center">
              <Download />
            </Grid>

            <Typography className="btnText">Download Chart</Typography>
          </Btn>
        </Grid>
      </Grid>
      <Grid item container className="rightContainer" direction="column">
        <Typography className="title">
          You have reached the limit for number of saved charts
        </Typography>
        <Typography className="instructions">
          To proceed, either delete a chart, or upgrade your membership{" "}
        </Typography>
        <Grid item container direction="column">
          <Typography className="upgradeTitle">
            Upgrading gets you the following perks:
          </Typography>
          <Grid item container>
            {perks.map(({ icon, text }, i) => (
              <Grid
                item
                key={i}
                xs={6}
                className="perk"
                alignItems="center"
                wrap="nowrap"
              >
                <Grid
                  item
                  className="iconGrid"
                  sx={{
                    stroke: i === 1 || i === 3 ? "#246BFD" : "inherit",
                  }}
                >
                  {icon}
                </Grid>
                <Grid item>
                  <Typography className="perkText">{text}</Typography>
                </Grid>
              </Grid>
            ))}
          </Grid>
        </Grid>
        <Grid item container alignItems="center" className="btns">
          <Btn
            padding="10px 23px 10px 23px"
            backgroundColor="#022A54"
            borderRadius="8px"
            onClick={dialogHandler}
          >
            <Grid item container alignItems="center">
              <UpgradeLock />
              <Typography className="upgradeText">UPGRADE TO PRO</Typography>
            </Grid>
          </Btn>
          <Btn padding="0" margin="0 0 0 40px" onClick={dialogHandler}>
            <Typography className="noUpgradeText">No, Thanks</Typography>
          </Btn>
        </Grid>
      </Grid>
    </Limit>
  );
};

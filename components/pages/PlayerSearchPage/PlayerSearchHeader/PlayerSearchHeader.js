import React, { memo, useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { Btn } from "components";
const Header = styled(Grid)(({ theme }) => ({
  background: "#fff",
  borderRadius: 18,
  padding: "17px 0 0 3.3em",
  position: "relative",
  marginBottom: "20px",

  "& .searchPayerPlaceHolder": {
    background: "#EAEDF2",
    width: 33,
    height: 33,
    borderRadius: "50%",
  },
  "& .playerSearchText": {
    fontSize: "2em",
    lineHeight: "17px",
    fontWeight: 700,
    color: "#022A54",
  },
  "& .playerSearchGrid": {
    marginLeft: "2em",
  },
  "& .tab": {
    paddingBottom: "7px",
  },
  "& .tabText": {
    fontSize: "2.1em",
    fontWeight: 600,
    lineHeight: "19px",
  },
  "& .tabsContainer": {
    marginTop: "18px",
    "&>h2:not(:first-of-type)": {
      marginLeft: "40px",
    },
    "&>p:last-of-type": {
      marginLeft: "9.1em",
    },
  },
  "& .imageContainer": {
    right: 0,
    bottom: 0,
    position: "absolute",
  },
}));

export const PlayerSearchHeader = ({ tabs }) => {
  const [tab, setTab] = useState(tabs[0].text);
  const router = useRouter();
  const changeTab = (text) => {
    console.log(text);
    setTab(text);
  };
  const pathname = router.pathname;
  return (
    <Header item container direction="column">
      <Grid item container alignItems="center">
        <Grid item className="searchPayerPlaceHolder"></Grid>
        <Grid item className="playerSearchGrid">
          <Typography className="playerSearchText" variant="h2">
            PLAYER SEARCH
          </Typography>
        </Grid>
      </Grid>
      <Grid item container className="tabsContainer" alignItems="center">
        {tabs.map(({ text, link }, i) => (
          <React.Fragment key={i}>
            {link ? (
              <Link href={link}>
                <Typography
                  className="tabText"
                  variant="h2"
                  sx={{
                    color: pathname === link ? "#022A54" : "#C6CFD8",
                    padding: "7px",
                    borderBottom: pathname === link ? "2px solid #022A54" : "0",
                    cursor: "pointer",
                  }}
                >
                  {text}
                </Typography>
              </Link>
            ) : (
              <Btn onClick={() => changeTab(text)}>
                <Typography
                  className="tabText"
                  variant="h2"
                  sx={{
                    color: text === tab ? "#022A54" : "#C6CFD8",
                    padding: "7px",
                    borderBottom: text === tab ? "2px solid #022A54" : "0",
                    cursor: "pointer",
                  }}
                >
                  {text}
                </Typography>
              </Btn>
            )}
          </React.Fragment>
        ))}
      </Grid>
      <Grid item className="imageContainer">
        <Image src="/logoLeague.png" width={107} height={78} alt="logo" />
      </Grid>
    </Header>
  );
};

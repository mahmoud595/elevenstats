import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

// import { PlayerCardWrapper } from "../PlayerCardWrapper/PlayerCardWrapper";
// import { Goal, Form } from "public";
// import { CareerStatsFormWrapper } from "../CareerStatsFormWrapper/CareerStatsFormWrapper";
// import { SwitchComp, Btn } from "components";
import { SeasonFormHeader } from "./SeasonFormHeader/SeasonFormHeader";
import { LeagueTable } from "../../../LeaguePage/LeageTable/LeageTable";

const SeasonFormContainer = styled(Grid)(() => ({
  gridArea: "careerResults",
  background: "#FFF",
  color: "#022A54",
  "& >div": {
    padding: 0,
  },
  padding: "16px",
  "& .text": {
    fontSize: "10px",
    fontWeight: 600,
  },
}));

const seasonData = [
  {
    col1: {
      name: "Liverpool f.c.",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "26 Mar ‘20",
    col3: "29",
    col4: "3000",
    col5: "1",
    col6: "13",
    col7: "8",
    col8: "13",
    col9: "13",
    col10: "13",
    col11: "13",
  },
  {
    col1: {
      name: "Manchester uTD",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "26 Mar ‘20",
    col3: "29",
    col4: "3000",
    col5: "1",
    col6: "13",
    col7: "8",
    col8: "13",
    col9: "13",
    col10: "13",
    col11: "13",
  },
];

const formData = [
  {
    col1: {
      name: "Liverpool f.c.",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "20",
    col3: "29",
    col4: "3000",
    col5: "1",
    col6: "13",
    col7: "8",
    col8: "13",
    col9: "13",
    col10: "13",
    col11: "13",
    col12: "13",
  },
  {
    col1: {
      name: "Manchester uTD",
      img: "https://cdn.sportmonks.com/images/soccer/team_placeholder.png",
    },
    col2: "20",
    col3: "29",
    col4: "3000",
    col5: "1",
    col6: "13",
    col7: "8",
    col8: "13",
    col9: "13",
    col10: "13",
    col11: "13",
    col12: "13",
  },
];

const seasonHeader = [
  { name: "", width: "30%" },
  { name: "Date", width: "15%" },
  { name: "MP" },
  { name: "Mins" },
  { name: "G" },
  { name: "npG" },
  { name: "xG" },
  { name: "npxG" },
  { name: "A" },
  { name: "KP" },
  { name: "Crs" },
];

const formHeader = [
  { name: "", width: "30%" },
  { name: "MP" },
  { name: "Mins" },
  { name: "G" },
  { name: "npG" },
  { name: "xG" },
  { name: "npxG" },
  { name: "A" },
  { name: "KP" },
  { name: "Crs" },
  { name: "Drb" },
  { name: "Crs" },
];

export const SeasonFormCard = () => {
  const [active, setActive] = useState("form");

  // const rightHeaderComp = () => (
  //   <Grid item sx={{ marginLeft: "auto" }}>
  //     <Typography></Typography>
  //     <SwitchComp
  //       rootHeight={22}
  //       thumbHeight={15}
  //       thumbWidth={15}
  //       width={44}
  //       translate={21}
  //       checkHandler={() => console.log("pass")}
  //     />
  //   </Grid>
  // ); // <PlayerCardWrapper
  //   title="career stats"
  //   icon={<Goal style={{ fill: "#246BFD" }} />}
  //   gridArea="careerResults"
  //   rightHeaderComp={rightHeaderComp}
  // >
  //   <CareerStatsFormWrapper header={header} data={data} margin="14px 0 0 0" />
  // </PlayerCardWrapper>

  return (
    <SeasonFormContainer container direction="column">
      <SeasonFormHeader active={active} setActive={setActive} />

      <LeagueTable
        data={active === "form" ? formData : seasonData}
        header={active === "form" ? formHeader : seasonHeader}
        playerProfile
      />
    </SeasonFormContainer>
  );
};

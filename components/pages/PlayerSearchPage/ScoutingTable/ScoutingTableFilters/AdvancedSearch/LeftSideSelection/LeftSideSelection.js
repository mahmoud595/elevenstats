import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

import { TopSelection } from "./TopSelection/TopSelection";
import { BottomPhysicalSection } from "./BottomPhysicalSection/BottomPhysicalSection";

const LeftSideSelectionContainer = styled(Grid)(({ theme }) => ({
  borderRight: "1px solid #EAEDF2",
  //   borderBottom: '1px solid #EAEDF2',
  paddingRight: "24px",
  "@media (max-width:950px)": {
    paddingRight: "5px",
  },
}));

export const LeftSideSelection = ({ setSelected, selected }) => {
  return (
    <LeftSideSelectionContainer item xs={6} container direction="column">
      <TopSelection setSelected={setSelected} selected={selected} />
      <BottomPhysicalSection />
    </LeftSideSelectionContainer>
  );
};

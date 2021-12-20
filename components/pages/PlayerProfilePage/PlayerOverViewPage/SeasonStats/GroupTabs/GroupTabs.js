import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { Btn } from "components";

const GroupTabsContainer = styled(Grid)(() => ({
  display: "flex",
  // paddingTop: '20px',
  overflowX: "auto",
  "& >button": {
    borderRadius: "22px",
    marginRight: "16px",
    "@media (max-width: 825px)": {
      marginRight: "8px",
    },
    padding: "7.5px 15px",
    "@media (max-width: 825px)": {
      padding: "7.5px 7.5px",
    },
  },

  "& .groupText": {
    lineHeight: "11.39px",
    fontSize: "12px",
    textTransform: "capitalize",
    fontWeight: 600,
    whiteSpace: "nowrap",
    "@media (max-width: 750px)": {
      fontSize: "10px",
    },
  },
}));

const groups = [
  "Dribbling",
  "Shooting",
  "Passing",
  "Defending",
  "Set Pieces",
  "Goalkeeping",
];
export const GroupTabs = ({
  btnWidth = "auto",
  paddingTop = "20px",
  height = "100%",
  containerWidth = "auto",
}) => {
  const [active, setActive] = useState("Shooting");
  return (
    <GroupTabsContainer sx={{ paddingTop, width: containerWidth }}>
      {groups.map((name, i) => (
        <Btn
          key={i}
          height={height}
          borderRadius="22px"
          width={btnWidth}
          minWidth="80px"
          onClick={() => setActive(name)}
          color={active === name ? "#246BFD" : "rgba(2, 42, 84, 0.6)"}
          borderColor={active === name ? "transparent" : "#A1B5C9"}
          backgroundColor={
            active === name ? "rgba(36, 107, 253, 0.12)" : "transparent"
          }
        >
          <Typography
            variant="h2"
            className="groupText"
            sx={{
              color: active === name ? "#246BFD" : "rgba(2, 42, 84, 0.6)",
            }}
          >
            {name}
          </Typography>
        </Btn>
      ))}
    </GroupTabsContainer>
  );
};

import { useState, memo } from "react";
import { styled } from "@mui/material/styles";
import { Button } from "@mui/material";

import { SelectedArrow } from "public";

const PositionComponent = styled(Button)(({ theme }) => ({
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  padding: 0,
  minWidth: "inherit",
}));
export const Position = memo(({ size, showOnly, color }) => {
  const [selected, setSelected] = useState(false);
  const selectHandler = () => {
    setSelected(!selected);
  };
  return (
    <PositionComponent
      onClick={selectHandler}
      sx={{
        backgroundColor: showOnly
          ? color
          : selected
          ? "#fff !important"
          : " #235828 !important",
        border: selected && "1px solid #F6C205",
        width: size,
        height: size,
      }}
      disabled={showOnly}
    >
      {selected ? <SelectedArrow className="arrow" /> : <></>}
    </PositionComponent>
  );
});

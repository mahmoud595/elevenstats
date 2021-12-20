import { useState } from "react";
import { Grid, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { styled } from "@mui/material/styles";

import { shallowEqual, useSelector } from "react-redux";

import { ScoutingFilterButton } from "../ScoutingFilterButton/ScoutingFilterButton";

const Position = styled(RadioGroup)(({ theme }) => ({
  background: "#fff",
  borderRadius: "12px",
  boxShadow: "8px 8px 100px rgba(2, 42, 84, 0.1)",
  padding: "28px 4.6em",
  justifyContent: "space-between",
  alignItems: "center",
  display: "flex",
  width: "67.6em",
  flexDirection: "row",
  height: "206px",
  overflowY: "auto",
  "& .radio": {
    color: "#246BFD !important",
  },
  "& .position": {
    flexBasis: "44.5%",
    maxWidth: "44.5%",
    marginTop: "5px",
  },

  "& .positionText": {
    fontSize: "2em",
    lineHeight: "20px",
    color: "#022A54",
  },
}));

const attributes = [
  "Left Wingback (LWB)",
  "Striker (CF)",
  "Right Back (RB)",
  "Left Back (LB)",
  "Left Centre Midfielder (LCMF)",
  "Attacking Midfielder (AMF)",
  "Left Attacking Midfielder (LAMF)",
  "Right Attacking Midfielder (RAMF)",
  "Centre Back (CB)",
  "Right Wingback (RWB)",
  "Left Centre Back (LCB)",
  "Left Winger (LW)",
  "Right Winger (RW)",
  "Left Centre Back (3 at the back) (LCB3)",
  "Right Centre Back (3 at the back) (RCB3)",
  "Right Centre Midfielder (RCMF)",
  "Right Attacking Midfielder (RAMF)",
  "Centre Back (CB)",
  "Right Wingback (RWB)",
  "Left Centre Back (LCB)",
  "Left Winger (LW)",
  "Right Winger (RW)",
  "Left Centre Back (3 at the back) (LCB3)",
  "Right Centre Back (3 at the back) (RCB3)",
  "Right Centre Midfielder (RCMF)",
];
export const PositionsFilter = () => {
  const positions = useSelector(({ playerSearch }) => {
    const { positions } = playerSearch;
    return positions;
  }, shallowEqual);
  const [value, setValue] = useState(positions[0]?.name);

  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <ScoutingFilterButton
      text="Positions"
      type="Positions"
      pointerRight="297px"
      dropDownTop="45px"
    >
      <Position
        aria-label="attributes"
        name="radio-buttons-group"
        onChange={handleChange}
      >
        {positions?.length ? (
          positions.map((val, i) => (
            <FormControlLabel
              key={i}
              value={val?.name}
              checked={val?.name === value}
              control={
                <Radio
                  classes={{
                    colorSecondary: "radio",
                  }}
                />
              }
              label={`${val?.name}[${val?.code}]`}
              className="position"
              classes={{
                label: "positionText",
              }}
            />
          ))
        ) : (
          <>No Positions</>
        )}
      </Position>
    </ScoutingFilterButton>
  );
};

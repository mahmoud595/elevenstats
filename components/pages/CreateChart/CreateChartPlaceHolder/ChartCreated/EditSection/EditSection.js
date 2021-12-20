import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";

import { Btn } from "components";
import { EditPencil } from "public";

const Edit = styled(Grid)(({ theme }) => ({
  marginRight: "40px",
  "@media (max-width:1142px)": {
    marginRight: "0",
  },
  "& .text": {
    fontSize: "12px",
    lineHeight: "15px",

    whiteSpace: "nowrap",
  },
}));

export const EditSection = ({ label, value }) => {
  const md = useMediaQuery("(max-width:1142px)");

  return (
    <Edit item container alignItems="center" wrap="nowrap">
      <Typography className="text" sx={{ color: "rgba(2, 42, 84, 0.6)" }}>
        {label}:
      </Typography>
      <Typography
        className="text"
        sx={{ color: "rgba(2, 42, 84, 1)", margin: "0 8px 0 6px" }}
      >
        {value}
      </Typography>
      <Btn
        padding={md ? "5px" : "8px"}
        borderRadius="6px"
        backgroundColor="#F6F7FA"
      >
        <EditPencil />
      </Btn>
    </Edit>
  );
};

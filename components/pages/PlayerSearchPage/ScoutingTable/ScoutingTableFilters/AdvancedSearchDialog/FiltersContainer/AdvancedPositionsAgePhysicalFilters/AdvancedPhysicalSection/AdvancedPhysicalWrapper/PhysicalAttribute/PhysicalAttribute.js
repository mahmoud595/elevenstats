import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Physical = styled(Grid)(({ theme }) => ({
  maxWidth: "32.1%",
  flexBasis: "32.1%",
  borderRadius: "8px",
  borderColor: "rgba(161, 181, 201, 0.5)",
  border: "1px solid #A1B5C9",
  height: "32px",
  width: "100%",

  display: "flex",
  alignItems: "center",
  padding: "0 2.3em 0 2em",
  "@media (max-width:1144px)": {
    padding: "0 1em ",
  },
  "@media (max-width:960px)": {
    height: "24px",
  },
  "@media (max-width:704px)": {
    padding: "0 0.6em",
  },
  minWidth: 32,
  "& .text": {
    fontSize: "2em",
    lineHeight: "10px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    color: "#022A54",
    textTransform: "capitalize",
    "@media (max-width:1144px)": {
      fontSize: "1.6em",
    },
    "@media (max-width:960px)": {
      fontSize: "1.2em",
    },
  },
}));
export const PhysicalAttribute = memo(({ text }) => {
  return (
    <Physical>
      <Typography variant="h4" className="text">
        {text}
      </Typography>
    </Physical>
  );
});

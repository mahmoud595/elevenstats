import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { Btn } from "components";

const Buttons = styled(Grid)(({ theme }) => ({
  marginTop: "34px",
  "& .btnText": {
    fontSize: "14px",
    lineHeight: "10px",
    fontWeight: "600",
  },
  "& >button:last-of-type": {
    marginLeft: "25px",
  },
}));
export const SettingsButtons = ({ setCreated, setCreateChart }) => {
  const clickHandler = (i) => {
    i === 1 && setCreated(true);
    i === 0 && setCreateChart(false);
  };
  return (
    <Buttons item container alignItems="center" justifyContent="center">
      {["Close", "Create"].map((val, i) => (
        <Btn
          width="112px"
          height="40px"
          borderRadius="8px"
          backgroundColor={i === 0 ? "#EAEDF2" : "#022A54"}
          padding="0"
          onClick={() => clickHandler(i)}
          key={i}
        >
          <Typography
            variant="h4"
            className="btnText"
            sx={{
              color: i === 0 ? "#022A54" : "#fff",
            }}
          >
            {val}
          </Typography>
        </Btn>
      ))}
    </Buttons>
  );
};

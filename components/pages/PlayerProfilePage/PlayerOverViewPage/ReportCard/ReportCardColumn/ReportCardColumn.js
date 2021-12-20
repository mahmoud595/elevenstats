import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const Report = styled(Grid)(() => ({
  "&>p": {
    marginTop: "12px",
  },

  "& .reportProsCons": {
    borderRadius: "22px",
    padding: "7px 0",
  },
  "& .reportProsConsText": {
    fontSize: "12px",
    lineHeight: "18px",
    fontWeight: 600,
  },
  "& .prosConsText": {
    fontSize: "11px",
    lineHeight: "30px",
    fontWeight: 600,
    color: "#022A54",
  },
}));
const truncate = (text) => {
  return text.length >= 20 ? `${text.slice(0, 17)}...` : text;
};
export const ReportCardColumn = ({ data, pros }) => {
  return (
    <Report
      item
      container
      direction="column"
      xs={6}
      wrap="nowrap"
      sx={{ marginLeft: pros ? "0" : "15px" }}
      alignItems="center"
    >
      <Grid
        item
        container
        alignItems="center"
        justifyContent="center"
        className="reportProsCons"
        sx={{
          background: pros ? "#E4FAEF" : "rgba(251, 82, 102, 0.12)",
        }}
      >
        <Typography
          className="reportProsConsText"
          sx={{
            color: pros ? "#00AC53" : " #FB5266",
          }}
        >
          {pros ? "pros" : "cons"}
        </Typography>
      </Grid>
      {data.map((val, i) => (
        <Typography key={i} className="prosConsText">
          {truncate(val)}
        </Typography>
      ))}
    </Report>
  );
};

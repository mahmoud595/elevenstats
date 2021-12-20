import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const StatsRowComponent = styled(Grid)(({ theme }) => ({
  borderRadius: 10,
  backgroundColor: "#F6F7FA",

  "& .statsRowLeftComp": {
    // backgroundColor: "#ADD666",
    color: "#022A54",
    // color: "#38580A",
    borderBottomLeftRadius: 10,
    borderTopLeftRadius: 10,
  },

  "& .statsRowNumber": {
    // fontSize: 33,
    fontWeight: 700,
    // lineHeight: "41.74px",
  },
  "& .statsRowText": {
    fontSize: 8,
    lineHeight: "10px",
    textAlign: "center",
    fontWeight: 500,
    textTransform: "uppercase",
    "@media (max-width: 640px)": {
      fontSize: 6,
      lineHeight: "8px",
    },
  },
}));

export const StatsRow = ({ children, number, type, name, small, ...props }) => {
  return (
    <StatsRowComponent
      container
      direction={type === "left" ? "row" : "row-reverse"}
    >
      <Grid
        item
        xs={4}
        container
        direction="column"
        alignItems="center"
        className="statsRowLeftComp"
        sx={{
          padding: small ? 0 : "7px 0",

          "@media (max-width: 960px)": {
            padding: small ? 0 : "0 0 0.3rem 0",
          },
        }}
      >
        <Grid item>
          <Typography
            className="statsRowNumber"
            sx={{
              // fontSize: small ? 25 : 20,

              fontSize: "16px !important",
              lineHeight: "15px",
              marginBottom: "9px",

              "@media (max-width: 752px)": {
                fontSize: "15px !important",
                lineHeight: "18px",
              },
            }}
          >
            {number}
          </Typography>
        </Grid>
        <Grid item container justifyContent="center">
          <Typography className="statsRowText">{name}</Typography>
        </Grid>
      </Grid>
      <Grid
        item
        xs={8}
        className="statsRowRightComp"
        sx={{
          padding: small ? 0 : "0 2em 0 0",
          padding: type === "left" ? "0 2em 0 0" : "0 0 0 2em",
        }}
      >
        {children}
      </Grid>
    </StatsRowComponent>
  );
};

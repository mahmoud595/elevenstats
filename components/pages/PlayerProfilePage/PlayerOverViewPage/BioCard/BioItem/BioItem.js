import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const BioGrid = styled(Grid)(() => ({
  marginBottom: "32px",
  "& .bioIconGrid": {
    width: "20px",
    height: "20px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#355576",
    borderRadius: "50%",
  },
  "& .bioTextGrid": {
    marginLeft: "8px",
  },
}));
export const BioItem = ({ icon, children }) => {
  return (
    <BioGrid item container xs={6} alignItems="center" wrap="nowrap">
      <Grid item className="bioIconGrid">
        {icon}
      </Grid>
      <Grid item className="bioTextGrid">
        {children}
      </Grid>
    </BioGrid>
  );
};

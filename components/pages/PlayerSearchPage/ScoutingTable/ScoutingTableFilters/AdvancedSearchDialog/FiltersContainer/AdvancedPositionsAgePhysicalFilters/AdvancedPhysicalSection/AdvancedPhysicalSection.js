import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HeightContainer } from "./HeightContainer/HeightContainer";
import { WidthContainer } from "./WidthContainer/WidthContainer";

const PhysicalSection = styled(Grid)(({ theme }) => ({
  "& .headerTitle": {
    fontSize: "1.8em",
    lineHeight: "30px",
    fontWeight: 600,
    textTransform: "uppercase",
    color: "rgba(2, 42, 84, 0.6)",
    "@media (max-width:960px)": {
      fontSize: "1.3em",
    },
  },
}));

export const AdvancedPhysicalSection = () => {
  return (
    <PhysicalSection item container direction="column">
      <Grid item>
        <Typography variant="h4" className="headerTitle">
          physical
        </Typography>
      </Grid>
      <HeightContainer />
      <WidthContainer />
    </PhysicalSection>
  );
};

import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

import { SingleAttributeItem } from "./SingleAttributeItem/SingleAttributeItem";

const AttributesColumnContainer = styled(Grid)(({ theme }) => ({
  "& .attributesText": {
    color: "#022A54",
    fontSize: "11px",
    fontWeight: "600",
    textTransform: "uppercase",
  },
  "& .spanText": {
    color: "#677F98",
  },
  "& .headerContainer": {
    marginBottom: "22px",
  },
}));

export const AttributesColumn = ({ attributes }) => {
  return (
    <AttributesColumnContainer item xs={12} md={5} container direction="column">
      <Grid
        item
        container
        justifyContent="space-between"
        className="headerContainer"
      >
        <Typography variant="h2" className="attributesText">
          attributes
        </Typography>
        <Typography variant="h2" className="attributesText">
          value <span className="spanText">/100</span>
        </Typography>
      </Grid>
      {attributes.map((attribute, i) => (
        <SingleAttributeItem key={i} attribute={attribute} />
      ))}
    </AttributesColumnContainer>
  );
};

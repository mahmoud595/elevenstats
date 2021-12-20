import { useState } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AttributesFilterContainer } from "./AttributesFilterContainer/AttributesFilterContainer";
import { PickHeader } from "./PickHeader/PickHeader";

const attributes = [
  "Finishing",
  "Dribbling",
  "Defensive duels",
  "Build up passing",
  "Finishing",
  "Dribbling",
  "Defensive duels",
  "Build up passing",
];
const Attributes = styled(Grid)(({ theme }) => ({
  padding: "0 0 0 3.3em",
  //   maxWidth: "42.9%",
  //   flexBasis: "42.9%",
  flex: 1,
  "@media (max-width:1200px)": {
    padding: "0  0 0 2em",
  },
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
export const AdvancedAttributes = () => {
  const [data, setData] = useState(attributes);
  return (
    <Attributes item container direction="column">
      <Grid item>
        <Typography variant="h4" className="headerTitle">
          Attributes
        </Typography>
      </Grid>
      <PickHeader
        matchedDataLength={data.length}
        fullDataLength={attributes.length}
      />
      <AttributesFilterContainer data={data} setData={setData} />
    </Attributes>
  );
};

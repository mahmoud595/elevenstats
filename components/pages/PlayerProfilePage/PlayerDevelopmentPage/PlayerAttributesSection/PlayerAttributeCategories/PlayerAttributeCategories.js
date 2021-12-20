import { Grid } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CategoriesColumn } from "./CategoriesColumn/CategoriesColumn";

const Categories = styled(Grid)(() => ({
  marginTop: "13px",
  "& > div:nth-of-type(2)": {
    marginLeft: "62px",
  },
}));

const data1 = [
  { name: "Crossing", value: 10 },
  { name: "Dribbling", value: 12 },
  { name: "Off the ball movement", value: 18 },
  { name: "Build up passing", value: 14 },
  { name: "Final third passing", value: 7 },
  { name: "Passing efficiency", value: 12 },
  { name: "Penalties", value: 12 },
];

const data2 = [
  { name: "Crossing", value: 10 },
  { name: "Dribbling", value: 12 },
  { name: "Off the ball movement", value: 18 },
  { name: "Build up passing", value: 14 },
  { name: "Final third passing", value: 7 },
  { name: "Passing efficiency", value: 12 },
  { name: "Penalties", value: 12 },
];

export const PlayerAttributeCategories = () => {
  return (
    <Categories item container wrap="nowrap">
      <CategoriesColumn data={data1} color="#1BD47B" />
      <CategoriesColumn data={data2} color="#FC7D58" />
    </Categories>
  );
};

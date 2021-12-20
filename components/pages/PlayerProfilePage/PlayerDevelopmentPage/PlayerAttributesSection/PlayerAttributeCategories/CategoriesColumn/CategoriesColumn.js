import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { CategoryRow } from "./CategoryRow/CategoryRow";

const Column = styled(Grid)(() => ({
  "& >div:nth-of-type(odd)": {
    background:
      "linear-gradient(270deg, rgba(54, 84, 220, 0) 0%, rgba(54, 84, 220, 0.03) 100%)",
  },
  "& .columnText": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    color: "#022A54",
  },
  "& >div:nth-of-type(1)": {
    marginTop: "16px",
  },
}));

export const CategoriesColumn = ({ data, color }) => {
  return (
    <Column item container xs={6} direction="column">
      <Typography className="columnText">Category name</Typography>
      {data.map(({ name, value }, i) => (
        <CategoryRow name={name} value={value} color={color} />
      ))}
    </Column>
  );
};

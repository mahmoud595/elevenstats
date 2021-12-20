import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { AttributeFilter } from "./AttributeFilter/AttributeFilter";

const AttributesContainer = styled(Grid)(({ theme }) => ({
  borderTop: "1px solid #EAEDF2",
  borderBottom: "1px solid #EAEDF2",
  padding: "18px 4.3em 18px 0",
  height: "212px",
  overflowY: "auto",
  "&>div:not(:first-of-type)": {
    marginTop: "12px",
  },
}));

export const AttributesFilterContainer = ({ data, setData }) => {
  const customDeleteHandler = (index) => {
    const filteredData = data.filter((attribute, i) => {
      return i !== index;
    });

    setData(filteredData);
  };
  return (
    <AttributesContainer item container direction="column" wrap="nowrap">
      {data.map((val, i) => (
        <AttributeFilter
          key={i}
          value={val}
          index={i}
          deleteHandler={customDeleteHandler}
        />
      ))}
    </AttributesContainer>
  );
};

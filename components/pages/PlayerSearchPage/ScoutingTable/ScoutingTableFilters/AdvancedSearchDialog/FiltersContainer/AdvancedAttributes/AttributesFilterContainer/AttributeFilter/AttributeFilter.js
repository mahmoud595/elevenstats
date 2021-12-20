import { useState } from "react";
import { Grid, Typography, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "components";
import { ScoutingFilterButton } from "components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton";
import { AdvancedInput } from "../../../../AdvancedInput/AdvancedInput";

const Attribute = styled(Grid)(({ theme }) => ({
  "& .btnGrid": {
    maxWidth: "42.9%",
    flexBasis: "42.9%",
  },
  "& .attributeText": {
    fontSize: "2em",
    lineHeight: "10px",
    fontWeight: 600,
    whiteSpace: "nowrap",
    textTransform: "capitalize",
    color: "#022A54",
    "@media (max-width:1144px)": {
      fontSize: "1.6em",
    },
    "@media (max-width:960px)": {
      fontSize: "1.2em",
    },
  },
  "& .type": {
    maxWidth: "27.4%",
    flexBasis: "27.4%",
  },
  "& .value": {
    maxWidth: "15.6%",
    flexBasis: "15.6%",
  },
}));
export const AttributeFilter = ({ value, index, deleteHandler }) => {
  const [number, setNumber] = useState(14);
  const deleteAttribute = () => {
    deleteHandler(index);
  };
  return (
    <Attribute
      item
      container
      alignItems="center"
      justifyContent="space-between"
    >
      <Grid item className="btnGrid">
        <Btn
          padding="10px 0 9px 2em"
          borderColor="rgba(161, 181, 201, 0.5)"
          borderRadius="8px"
          fullWidth
          justify="flex-start"
        >
          <Typography className="attributeText">{value}</Typography>
        </Btn>
      </Grid>
      <Grid item className="type">
        <ScoutingFilterButton text="is at least" color="rgba(2, 42, 84, 0.6)" />
      </Grid>
      <Grid item className="value">
        <AdvancedInput placeHolder="14" setValue={setNumber} />
      </Grid>
      <Grid item>
        <Btn
          width={18}
          height={18}
          borderRadius="50%"
          backgroundColor="#FB5266"
          padding="0"
          onClick={deleteAttribute}
        >
          <Divider
            sx={{ width: "7.5px", borderWidth: "1px", borderColor: "#fff" }}
          />
        </Btn>
      </Grid>
    </Attribute>
  );
};

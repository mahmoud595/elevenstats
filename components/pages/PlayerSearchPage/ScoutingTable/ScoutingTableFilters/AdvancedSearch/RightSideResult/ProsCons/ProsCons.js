import { Typography } from "@mui/material";

import { ResultWrapper } from "../ResultWrapper/ResultWrapper";
import { SelectionItem } from "../../SelectionItem/SelectionItem";

export const ProsCons = () => {
  return (
    <ResultWrapper title="Pros & Cons">
      <Typography
        variant="h2"
        fontWeight="500"
        marginTop="22px"
        fontSize="11px"
        color="#677F98"
        marginLeft="10px"
        sx={{ textTransform: "uppercase" }}
      >
        pros
      </Typography>
      {[0, 1, 2, 3, 4, 5, 6].map((item) => (
        <SelectionItem key={item} item={"world class"} noArrow image />
      ))}
    </ResultWrapper>
  );
};

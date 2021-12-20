import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import { PlayerSearchHeader } from "../PlayerSearchPage/PlayerSearchHeader/PlayerSearchHeader";
import { CreateChartPlaceHolder } from "./CreateChartPlaceHolder/CreateChartPlaceHolder";

const Create = styled(Grid)(({ theme }) => ({}));
const tabs = [{ text: "Create" }, { text: "History" }];
export const CreateChart = () => {
  return (
    <Create item container direction="column" wrap="nowrap">
      <PlayerSearchHeader tabs={tabs} />
      <CreateChartPlaceHolder />
    </Create>
  );
};

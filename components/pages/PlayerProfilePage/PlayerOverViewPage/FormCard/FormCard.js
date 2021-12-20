import { styled } from "@mui/material/styles";
import { Grid } from "@mui/material";

import { PlayerCardWrapper } from "../PlayerCardWrapper/PlayerCardWrapper";
import { CareerStatsFormWrapper } from "../CareerStatsFormWrapper/CareerStatsFormWrapper";
import { Form } from "public";

const FormContainer = styled(Grid)(() => ({
  marginTop: "14px",
}));

const header = ["Opponent ", "Goals", "Assists", "KP"];
const data = [
  { 0: "Arsenal", 1: "1", 2: "0", 3: "1.4" },
  { 0: "Chelsea", 1: "0", 2: "0", 3: "2.3" },
];

export const FormCard = () => {
  return (
    <PlayerCardWrapper
      title="Form"
      icon={<Form />}
      gridArea="form"
      svgbgColor="#F0F2F5"
    >
      <FormContainer item container>
        <CareerStatsFormWrapper header={header} data={data} form />
      </FormContainer>
    </PlayerCardWrapper>
  );
};

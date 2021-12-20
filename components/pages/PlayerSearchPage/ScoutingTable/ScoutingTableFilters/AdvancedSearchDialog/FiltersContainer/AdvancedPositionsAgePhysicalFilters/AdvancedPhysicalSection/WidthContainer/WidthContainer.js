import { useState } from "react";

import { AdvancedPhysicalWrapper } from "../AdvancedPhysicalWrapper/AdvancedPhysicalWrapper";

export const WidthContainer = () => {
  const [value, setValue] = useState();

  return (
    <AdvancedPhysicalWrapper text="Weight" unit={`78 kg`} setValue={setValue} />
  );
};

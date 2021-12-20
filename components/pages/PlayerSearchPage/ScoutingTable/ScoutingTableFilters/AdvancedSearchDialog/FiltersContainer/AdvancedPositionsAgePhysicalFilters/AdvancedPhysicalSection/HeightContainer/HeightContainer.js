import { useState } from "react";

import { AdvancedPhysicalWrapper } from "../AdvancedPhysicalWrapper/AdvancedPhysicalWrapper";

export const HeightContainer = () => {
  const [value, setValue] = useState();
  return (
    <AdvancedPhysicalWrapper
      text="Height"
      unit={`178 cm`}
      setValue={setValue}
    />
  );
};

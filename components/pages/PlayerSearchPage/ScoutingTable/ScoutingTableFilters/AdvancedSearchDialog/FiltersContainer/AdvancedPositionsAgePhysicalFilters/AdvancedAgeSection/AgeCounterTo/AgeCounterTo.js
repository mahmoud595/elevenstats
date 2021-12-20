import { useState } from "react";

import { AgeCounterWrapper } from "../AgeCounterWrapper/AgeCounterWrapper";

export const AgeCounterTo = () => {
  const [age, setAge] = useState(35);
  return <AgeCounterWrapper age={age} setAge={setAge} type="ageCounterTo" />;
};

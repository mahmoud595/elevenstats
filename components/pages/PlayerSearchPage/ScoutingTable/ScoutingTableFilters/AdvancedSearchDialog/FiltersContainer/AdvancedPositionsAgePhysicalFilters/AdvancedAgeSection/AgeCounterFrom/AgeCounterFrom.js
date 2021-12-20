import { useState } from "react";

import { AgeCounterWrapper } from "../AgeCounterWrapper/AgeCounterWrapper";

export const AgeCounterFrom = () => {
  const [age, setAge] = useState(18);
  return <AgeCounterWrapper age={age} setAge={setAge} />;
};

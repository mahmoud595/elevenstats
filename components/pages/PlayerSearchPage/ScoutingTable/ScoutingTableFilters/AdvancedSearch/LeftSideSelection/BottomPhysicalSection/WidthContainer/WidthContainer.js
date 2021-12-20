import { useState } from 'react';

import { AdvancedPhysicalWrapper } from '../AdvancedPhysicalWrapper/AdvancedPhysicalWrapper';

export const WidthContainer = () => {
  const [value, setValue] = useState();

  return (
    <AdvancedPhysicalWrapper text="Weight" unit="kg" setValue={setValue} />
  );
};

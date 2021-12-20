import { memo } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { PhysicalAttribute } from './PhysicalAttribute/PhysicalAttribute';
import { PhysicalType } from './PhysicalType/PhysicalType';
import { PhysicalUnit } from './PhysicalUnit/PhysicalUnit';

const Wrapper = styled(Grid)(({ theme }) => ({
  marginTop: 12,
}));

export const AdvancedPhysicalWrapper = memo(({ text, unit, setValue }) => {
  return (
    <Wrapper
      item
      container
      alignItems="center"
      // justifyContent="space-between"
      wrap="nowrap"
      className="physicalContainer"
    >
      <PhysicalAttribute text={text} />
      <PhysicalType />
      <PhysicalUnit unit={unit} setValue={setValue} />
    </Wrapper>
  );
});

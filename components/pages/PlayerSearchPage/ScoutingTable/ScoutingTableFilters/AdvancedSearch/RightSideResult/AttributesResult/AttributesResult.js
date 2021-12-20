import { Grid } from '@mui/material';

import { AttributesColumn } from './AttributesColumn/AttributesColumn';

const leftSideAtrributes = [
  'crossing',
  'dribbling',
  'finishing',
  'Off the ball movement',
  'Build up passing',
  'Final third passing',
  'Passing efficiency',
  'Penalites',
];
const rightSideAtrributes = [
  'Aerial ability',
  'Defensive intensity',
  'Recovery',
  'Box defending',
  'Foul winning',
  'Set pieces',
  'Offensive duels',
  'Defensive duels',
];
export const AttributesResult = () => {
  return (
    <Grid container justifyContent="space-around">
      <AttributesColumn attributes={leftSideAtrributes} />
      <AttributesColumn attributes={rightSideAtrributes} />
    </Grid>
  );
};

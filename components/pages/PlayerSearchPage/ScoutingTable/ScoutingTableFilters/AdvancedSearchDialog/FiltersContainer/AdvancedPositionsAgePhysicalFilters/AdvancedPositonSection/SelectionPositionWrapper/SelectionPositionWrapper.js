import { memo, useState } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ScoutingFilterButton } from '../../../../../ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton';
import { AdvancedInput } from '../../../../AdvancedInput/AdvancedInput';

const Selection = styled(Grid)(({ theme }) => ({
  '& .positionType': {
    maxWidth: '51.8%',
    flexBasis: '51.8%',
    marginLeft: '1.1em',
  },
  '& .positionFrequency': {
    paddingLeft: '4em',
    maxWidth: '31.6%',
    flexBasis: '31.6%',
    '@media (max-width:960px)': {
      paddingLeft: '2em',
    },
  },
  '& .positionDirection': {
    maxWidth: '13.4%',
    flexBasis: '13.4%',
  },
}));
export const SelectionPositionWrapper = memo(
  ({ positionLabel, positionType, frequencyLabel, directionLabel }) => {
    const [value, setValue] = useState(frequencyLabel);
    return (
      <Selection item container alignItems="center" wrap="nowrap">
        <Grid item className="positionDirection">
          <ScoutingFilterButton
            text={directionLabel}
            padding="0 1.5em 0 2em"
          ></ScoutingFilterButton>
        </Grid>
        <Grid item className="positionType">
          <ScoutingFilterButton
            text={positionLabel}
            type={positionType}
          ></ScoutingFilterButton>
        </Grid>

        <Grid item className="positionFrequency">
          <AdvancedInput
            placeHolder={`> ${frequencyLabel}`}
            setValue={setValue}
          />
        </Grid>
      </Selection>
    );
  }
);

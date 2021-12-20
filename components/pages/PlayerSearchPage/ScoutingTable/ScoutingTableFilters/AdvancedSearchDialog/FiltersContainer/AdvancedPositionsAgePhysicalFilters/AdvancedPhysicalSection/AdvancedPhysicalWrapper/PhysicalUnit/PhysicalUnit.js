import { memo } from 'react';
import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import { AdvancedInput } from 'components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/AdvancedSearchDialog/AdvancedInput/AdvancedInput';

const Physical = styled(Grid)(({ theme }) => ({
  maxWidth: '27.5%',
  flexBasis: '27.5%',
}));
export const PhysicalUnit = memo(({ unit, setValue }) => {
  return (
    <Physical>
      <AdvancedInput placeHolder={unit} setValue={setValue} />
    </Physical>
  );
});

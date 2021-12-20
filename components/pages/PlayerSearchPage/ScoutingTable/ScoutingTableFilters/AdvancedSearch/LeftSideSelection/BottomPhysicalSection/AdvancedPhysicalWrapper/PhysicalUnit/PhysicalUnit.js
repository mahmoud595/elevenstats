import { memo } from 'react';
import { Grid, Input, OutlinedInput } from '@mui/material';
import { styled } from '@mui/material/styles';
// import { AdvancedInput } from 'components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/AdvancedSearchDialog/AdvancedInput/AdvancedInput';

const Physical = styled(Grid)(({ theme }) => ({
  '& .root': {
    width: '40px',
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #A1B5C9',
    padding: '0px',
    fontSize: '11px',
    fontWeight: 500,
    color: '#677F98',
    marginLeft: '12px',
  },
  '& .focused': {
    border: '1px solid #A1B5C9',
  },
  '& .input': {
    padding: '0px 0px 0px 5px',
    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
}));
export const PhysicalUnit = memo(({ unit, setValue }) => {
  return (
    <Physical>
      <Input
        disableUnderline={true}
        classes={{ root: 'root', focused: 'focused', input: 'input' }}
        type="number"
        placeholder={unit}
      />
    </Physical>
  );
});

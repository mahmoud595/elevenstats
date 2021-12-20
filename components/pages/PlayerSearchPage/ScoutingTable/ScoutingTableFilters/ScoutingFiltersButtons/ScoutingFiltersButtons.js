import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { AgeFilter } from './AgeFilter/AgeFilter';
import { AttributesFilter } from './AttributesFilter/AttributesFilter';
import { CountryFilter } from './CountryFilter/CountryFilter';
import { PositionsFilter } from './PositionsFilter/PositionsFilter';
import { SortByFilter } from './SortByFilter/SortByFilter';

const FiltersButtons = styled(Grid)(({ theme }) => ({
  maxWidth: '65.4%',
  flexBasis: '65.4%',
  '&>div': {
    maxWidth: '17%',
    flexBasis: '17%',
  },
  '&>div:nth-child(3),& > div:nth-child(1)': {
    maxWidth: '19.7%',
    flexBasis: '19.7%',
  },
}));

export const ScoutingFiltersButtons = () => {
  return (
    <FiltersButtons
      item
      container
      justifyContent="space-between"
      alignItems="center"
    >
      <AgeFilter />
      <AttributesFilter />
      <CountryFilter />
      <PositionsFilter />
      <SortByFilter />
    </FiltersButtons>
  );
};

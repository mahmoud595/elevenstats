import { useState } from 'react';
import { Grid } from '@mui/material';

import { ResultWrapper } from '../ResultWrapper/ResultWrapper';
import { Search } from 'components';
import { LettersComp } from 'components/pages/LeaguePage/LeagueFilters/AllLeaguesComp/LettersComp/LettersComp';
import { SelectionItem } from '../../SelectionItem/SelectionItem';

const data = ['Algeria', 'Egypt', 'Canada', 'france'];

export const CountrySelection = ({ title = '' }) => {
  const [selectedLetter, setSelectedLetter] = useState('a');

  return (
    <>
      <ResultWrapper title={title}>
        <Search
          title="Search for a country"
          backgroundColor="#F6F7FA"
          borderRadius="40px"
          rowReverse
          padding="0 2em"
          color="#A1B5C9"
          width="212px"
          height="32px"
          margin="20px 0px 0px 0px"
        />
        <Grid
          container
          wrap="nowrap"
          sx={{
            marginTop: '20px',
            paddingBottom: '3px',
            overflowX: 'auto',
            '& > button': {
              minWidth: '40px',
            },
          }}
        >
          <LettersComp
            selectedLetter={selectedLetter}
            setSelectedLetter={setSelectedLetter}
          />
        </Grid>
        <Grid container marginTop="20px">
          {data.map((item, i) => (
            <Grid key={i} item container xs={6} direction="column">
              <SelectionItem item={item} noArrow />
            </Grid>
          ))}
        </Grid>
      </ResultWrapper>
    </>
  );
};

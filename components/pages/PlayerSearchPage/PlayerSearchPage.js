import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { Grid } from '@mui/material';

import { PlayerSearchHeader } from './PlayerSearchHeader/PlayerSearchHeader';
import { ScoutingTable } from './ScoutingTable/ScoutingTable';
import { PlayersList } from './PlayersList/PlayersList';

const Container = styled(Grid)(() => ({
  overflow: 'hidden',
}));
const tabs = [
  { text: 'Scouting', link: '/playerSearch' },
  { text: 'Shortlist', link: '' },
];
export const PlayerSearchPage = () => {
  const [advancedSearch, setAdvancedSearch] = useState(false);

  const toggleAdvancedSearch = () => {
    setAdvancedSearch(!advancedSearch);
  };
  return (
    <Container item container direction="column">
      <PlayerSearchHeader tabs={tabs} />
      <ScoutingTable
        setAdvancedSearch={toggleAdvancedSearch}
        advancedSearch={advancedSearch}
      />

      <Grid
        container
        sx={{
          maxHeight: advancedSearch ? '0px' : '10000px',
          transition: 'max-height .7s ease-in-out',
        }}
      >
        <PlayersList />
      </Grid>
    </Container>
  );
};

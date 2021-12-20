import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

import { ScoutingTableFilters } from './ScoutingTableFilters/ScoutingTableFilters';

const Table = styled(Grid)(({ theme }) => ({
  background: '#fff',
  borderTopRightRadius: '18px',
  borderTopLeftRadius: '18px',

  padding: '18px 18px 0 18px',

  '& .title': {
    fontSize: '2.6em',
    fontWeight: 600,
    lineHeight: '16px',
    color: '#022A54',
  },
}));
export const ScoutingTable = ({ setAdvancedSearch, advancedSearch }) => {
  return (
    <Table item container direction="column">
      <Grid item>
        <Typography className="title">Scouting</Typography>
      </Grid>
      <ScoutingTableFilters
        setAdvancedSearch={setAdvancedSearch}
        advancedSearch={advancedSearch}
      />
      {/* {!advancedSearch ? <ScoutingTableGroups /> : null} */}
    </Table>
  );
};

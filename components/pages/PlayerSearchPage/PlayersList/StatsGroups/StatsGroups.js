import { useState } from 'react';

import { styled } from '@mui/material/styles';
import { Grid, Typography } from '@mui/material';

import { GroupTabs } from '../../../PlayerProfilePage/PlayerOverViewPage/SeasonStats/GroupTabs/GroupTabs';

const TableAdvanced = styled(Grid)(({ theme }) => ({
  padding: '24px 30px',
  background: '#FFF',
  borderBottom: '1px solid #EAEDF2',
  '& .recommendations': {
    fontSize: '2.3em',
    color: '#022A54',
    lineHeight: '16px',
    fontWeight: 600,
    '@media (max-width:960px)': {
      fontSize: '1.6em',
    },
  },
  '& .recommendationsSpan': {
    color: 'rgba(2, 42, 84, 0.6)',
  },
}));

export const StatsGroups = () => {
  const [open, setOpen] = useState(false);
  const advancedSearchDialog = () => {
    setOpen(true);
  };
  return (
    <TableAdvanced container justifyContent="space-between" alignItems="center">
      <GroupTabs width="100px" paddingTop="0px" height="32px" />

      <Grid item>
        <Typography className="recommendations">
          35 <span className="recommendationsSpan">Recommendations</span>
        </Typography>
      </Grid>
    </TableAdvanced>
  );
};

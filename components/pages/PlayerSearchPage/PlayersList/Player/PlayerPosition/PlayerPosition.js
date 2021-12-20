import { styled } from '@mui/system';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { PositionPlayGround } from 'components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/AdvancedSearchDialog/FiltersContainer/AdvancedPositionsLeftGrid/PositionPlayGround/PositionPlayGround';

const PlayerPositionContainer = styled(Grid)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: 150,
  flexWrap: 'nowrap',
  color: theme.palette.primary.main,
  '& .imageContainer': {
    marginRight: 13,
  },
  '& .position': {
    fontSize: 14,
    fontWeight: 600,
  },
}));

export const PlayerPosition = () => {
  return (
    <PlayerPositionContainer>
      <Grid
        item
        sx={{
          position: 'relative',
          width: 32,
          height: 44,
          marginRight: '13px',
        }}
      >
        <Image src="/selectPositionsPlayground.png" layout="fill" />
        <PositionPlayGround size={5} padding="3px" />
      </Grid>

      <Grid item>
        <Typography variant="h2" className="position">
          AM ( L )
        </Typography>
      </Grid>
    </PlayerPositionContainer>
  );
};

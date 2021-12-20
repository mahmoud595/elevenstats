import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

import { CompWrapper } from 'components/pages/HeadToHeadPage/ScorePredictionLeagueComps/CompWrapper/CompWrapper';
import { PositionPlayGround } from 'components/pages/PlayerSearchPage/ScoutingTable/ScoutingTableFilters/AdvancedSearchDialog/FiltersContainer/AdvancedPositionsLeftGrid/PositionPlayGround/PositionPlayGround';
import { PositionAttribute } from './PositionAttribute/PositionAttribute';

const Positions = styled(Grid)(() => ({
  padding: '22px 13px 21px 14px',
}));
const positions = [
  { color: '#1BD47B', position: 'Center Forward', percentage: '50' },
  { color: '#00A249', position: 'Attacking Midfield', percentage: '35' },
  { color: '#FF9374', position: 'Left Wing', percentage: '50' },
  { color: '#F6C205', position: 'Right Wing', percentage: '50' },
];
export const PositionsCard = () => {
  return (
    <CompWrapper
      title="positions"
      titleLetterspace="1.5px"
      backgroundColor="#fff"
      titleBackgroundColor="#022A54"
      gridArea="positions"
    >
      <Positions
        item
        container
        direction="column"
        //   justifyContent="center"
        alignItems="center"
      >
        <Grid
          item
          sx={{
            transform: 'rotate(90deg)',
            position: 'relative',
            width: 140,
            height: 247,
            marginTop: '-55px',
          }}
        >
          <Image
            src="/selectPositionsPlayground.png"
            layout="fill"
            alt="playground"
          />
          <PositionPlayGround padding="3px" positions={positions} showOnly />
        </Grid>
        <Grid item container sx={{ marginTop: '-55px' }}>
          {positions.map(({ color, position, percentage }, i) => (
            <PositionAttribute
              key={i}
              color={color}
              percentage={percentage}
              position={position}
            />
          ))}
        </Grid>
      </Positions>
    </CompWrapper>
  );
};

import { Grid, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

import Image from 'next/image';
const PlayerNameDetailsContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginLeft: '30px',
  justifyContent: 'space-between',
  '& .PlayerName': {
    fontSize: '16px',
    fontWeight: 800,
    textTransform: 'uppercase',
    fontSize: '16px',
  },
  '& .PlayerNameContainer': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .PlayerNumberContainer': {
    padding: '0px 5px',
    background: 'rgba(255, 255, 255, 0.3)',
    borderRadius: '11.5px',
    marginLeft: '8px',
  },
  '& .PlayerPositiontext': {
    color: 'rgba(255, 255, 255, 0.7)',
    fontSize: '12px',
    fontWeight: 600,
  },
  '& .PlayerAge': {
    fontSize: '11px',
    fontWeight: 400,
    color: '#FFF',
  },
  '& .PlayerType': {
    color: '#1BD47B',
    fontSize: '11px',
    fontWeight: 600,
    lineHeight: '12px',
  },
  '& .PlayerTypeContainer': {
    background: 'rgba(255, 255, 255, .16)',
    alignSelf: 'baseline',
    borderRadius: '13px',
    padding: '8px',
  },
  '& .teamContainer': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .TeamName': {
    fontSize: '11px',
    fontWeight: 600,
  },
  '& .teamImageContainer': {
    marginRight: '8px',
    display: 'flex',
  },
}));

export const PlayerNameDetails = () => {
  return (
    <PlayerNameDetailsContainer>
      <Grid item className="PlayerNameContainer">
        <Grid item>
          <Typography variant="h2" className="PlayerName" noWrap>
            Mohamed salah
          </Typography>
        </Grid>
        <Grid item className="PlayerNumberContainer">
          <Typography variant="h2" className="PlayerPositiontext" noWrap>
            10
          </Typography>
        </Grid>
      </Grid>
      <Grid item>
        <Typography variant="h2" className="PlayerPositiontext" noWrap>
          Attacking, Midfielder (left), Striker (Center)
        </Typography>
      </Grid>
      <Grid item>
        <Typography variant="h2" className="PlayerAge" noWrap>
          28 years old (26/11/1990)
        </Typography>
      </Grid>
      <Grid item className="PlayerTypeContainer">
        <Typography variant="h2" className="PlayerType" noWrap>
          Important Player
        </Typography>
      </Grid>
      <Grid item className="teamContainer">
        <Grid item className="teamImageContainer">
          <Image
            src="https://cdn.sportmonks.com/images/soccer/teams/12/460.png"
            layout="fixed"
            width={17}
            height={22}
          />
        </Grid>
        <Grid item variant="h2" className="TeamName" noWrap>
          Liverpool FC
        </Grid>
      </Grid>
    </PlayerNameDetailsContainer>
  );
};

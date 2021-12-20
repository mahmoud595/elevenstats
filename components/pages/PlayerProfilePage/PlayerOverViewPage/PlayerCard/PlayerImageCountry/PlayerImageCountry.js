import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import Image from 'next/image';

const PlayerImageCountryContainer = styled(Grid)(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  '& .playerImageContainer': {
    marginBottom: '14px',
  },
  '& .countryContainer': {
    background: 'rgba(255, 255, 255, 0.14)',
    display: 'flex',
    alignItems: 'center',
    padding: '6px 10px 6px 6px',
    borderRadius: '20px',
  },
  '& .countryImageContainer': {
    position: 'relative',
    width: 20,
    height: 20,
    marginRight: '6px',
    '& >div': {
      borderRadius: '50%',
    },
  },
  '& .countryName': {
    fontSize: '11px',
    fontWeight: 600,
  },
  '& .countryTextContainer': {
    maxWidth: '40px',
  },
}));

export const PlayerImageCountry = () => {
  return (
    <PlayerImageCountryContainer>
      <Grid item className="playerImageContainer">
        <Image
          width={88}
          height={88}
          layout="fixed"
          //  layout="fill"
          src="https://cdn.sportmonks.com/images/soccer/placeholder.png"
          alt="player name"
        />
      </Grid>
      <Grid item className="countryContainer">
        <Grid item className="countryImageContainer">
          <Image
            //   width={24}
            //   height={24}
            layout="fill"
            src={'https://cdn.sportmonks.com/images/countries/png/short/br.png'}
            alt="player positions"
          />
        </Grid>
        <Grid item className="countryTextContainer">
          <Typography variant="h4" className="countryName" noWrap>
            Brazil
          </Typography>
        </Grid>
      </Grid>
    </PlayerImageCountryContainer>
  );
};

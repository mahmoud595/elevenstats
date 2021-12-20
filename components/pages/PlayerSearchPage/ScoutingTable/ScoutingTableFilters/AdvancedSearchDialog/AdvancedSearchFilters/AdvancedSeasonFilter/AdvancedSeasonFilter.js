import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Btn } from 'components';
import { useState, useEffect } from 'react';

import { ScoutingFilterButton } from '../../../ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton';
import apiAxios from 'utils/apiAxios';

const SeasonFilter = styled(Grid)(({ theme }) => ({
  '& .btnGrid': {
    width: '19.5em',
    marginLeft: '2.7em',
    '@media (max-width:960px)': {
      width: '10em',
      marginLeft: '1em',
    },
  },
  '& .label': {
    fontSize: '1.8em',
    lineHeight: '30px',
    fontWeight: 600,
    // color: "rgba(2, 42, 84, 0.6)",
    whiteSpace: 'nowrap',
    '@media (max-width:960px)': {
      fontSize: '1.4em',
    },
  },
  '& .dropDown': {
    backgroundColor: '#fff',
    padding: '24px 5.6em',
    zIndex: 1,
    boxShadow: '8px 8px 100px rgba(2, 42, 84, 0.1)',
    borderRadius: '12px',
    '&>button:not(:first-of-type)': {
      marginTop: '24px',
    },
  },
  '& .seasonText': {
    fontSize: '2em',
    fontWeight: 600,
    lineHeight: '16px',
    color: '#022A54',
    whiteSpace: 'nowrap',
  },
}));
export const AdvancedSeasonFilter = () => {
  const [season, setSeason] = useState();
  const [seasons, setSeasons] = useState([]);
  const [close, setClose] = useState(false);
  const seasonSelected = (val) => {
    setSeason(val);
    setClose(true);
  };
  useEffect(() => {
    const fetchSeasons = async () => {
      try {
        const res = await apiAxios.get('/playersStatsSeasons');
        const data = res?.data?.data;
        setSeasons(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchSeasons();
  }, []);
  return (
    <SeasonFilter xs={3} item container alignItems="center" wrap="nowrap">
      <Grid item>
        <Typography className="label">SEASON</Typography>
      </Grid>
      <Grid item className="btnGrid">
        <ScoutingFilterButton
          text={season?.seasonDate ?? 'Any'}
          close={close}
          setClose={setClose}
        >
          <Grid item container direction="column" className="dropDown">
            {seasons?.length ? (
              seasons.map((val, i) => (
                <Btn padding="0" onClick={() => seasonSelected(val)} key={i}>
                  <Typography className="seasonText">
                    {val?.seasonDate}
                  </Typography>
                </Btn>
              ))
            ) : (
              <>No Seasons</>
            )}
          </Grid>
        </ScoutingFilterButton>
      </Grid>
    </SeasonFilter>
  );
};

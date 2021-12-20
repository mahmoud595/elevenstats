import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ScoutingFilterButton } from '../../../ScoutingFiltersButtons/ScoutingFilterButton/ScoutingFilterButton';
import apiAxios from 'utils/apiAxios';
import { Btn } from 'components';

const Country = styled(Grid)(({ theme }) => ({
  '& > button:not(:first-of-type)': {
    marginTop: '10px',
  },
  '& .countryBtnGrid': {
    width: '19.5em',
    marginLeft: '2.7em',
    '@media (max-width:960px)': {
      width: '10em',
      marginLeft: '1em',
    },
  },
  '& .countryLabelText': {
    fontSize: '1.8em',
    lineHeight: '30px',
    fontWeight: 600,
    color: 'rgba(2, 42, 84, 0.6)',
    whiteSpace: 'nowrap',
    '@media (max-width:960px)': {
      fontSize: '1.4em',
    },
  },
  '& .countryDropDown': {
    padding: '14px 2.6em 24px 2.6em',
    background: '#fff',
    borderRadius: '12px',
    boxShadow: '8px 8px 100px rgba(2, 42, 84, 0.1)',
    height: '206px',
    overflowY: 'auto',
    zIndex: 2,
    '&>button:not(:first-of-type)': {
      marginTop: '24px',
    },
  },
  '& .countryText': {
    fontSize: '12px',
    lineHeight: '10px',
    fontWeight: 600,
    textTransform: 'capitalize',
    marginLeft: '1.3em',
  },
  '& .countryImage': {
    borderRadius: '50%',
  },
}));
export const AdvancedCountryFilter = () => {
  const [countries, setCountries] = useState([]);
  const [country, setCountry] = useState();

  const [close, setClose] = useState(false);

  const countrySelected = (val) => {
    setCountry(val);
    setClose(true);
    console.log(val);
  };
  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const res = await apiAxios.get('/countries');
        const data = res?.data?.data;
        setCountries(data);
      } catch (e) {
        console.log(e);
      }
    };
    fetchCountries();
  }, []);
  return (
    <Country xs={3} item container alignItems="center" wrap="nowrap">
      <Grid item>
        <Typography className="countryLabelText">COUNTRY</Typography>
      </Grid>
      <Grid item className="countryBtnGrid">
        <ScoutingFilterButton
          text={country?.name ?? 'Any'}
          type="AdvancedCountry"
          close={close}
          setClose={setClose}
          img={
            (country !== 'Any' && country?.imagePath) ??
            'https://cdn.sportmonks.com/images/countries/png/short/af.png'
          }
        >
          <Grid
            item
            container
            direction="column"
            className="countryDropDown"
            wrap="nowrap"
          >
            {countries?.length ? (
              countries.map((country, i) => (
                <Btn
                  padding="0"
                  onClick={() => countrySelected(country)}
                  key={i}
                  fullWidth
                >
                  <Grid item container alignItems="center" wrap="nowrap">
                    <Image
                      src={
                        country?.imagePath ??
                        'https://cdn.sportmonks.com/images/countries/png/short/af.png'
                      }
                      width={20}
                      height={20}
                      alt={country?.name}
                      layout="fixed"
                      className="countryImage"
                    />
                    <Typography className="countryText">
                      {country?.name}
                    </Typography>
                  </Grid>
                </Btn>
              ))
            ) : (
              <>No Countries</>
            )}
          </Grid>
        </ScoutingFilterButton>
      </Grid>
    </Country>
  );
};

import React, { memo } from 'react';
import makeStyles from '@mui/styles/makeStyles';
import { Grid, Typography } from '@mui/material';
import Image from 'next/image';
import { LinearDeterminate } from 'components/';

const useStyles = makeStyles(({ palette }) => ({
  premium: {
    // padding: "4.2vh 3.7rem",
    padding: ({ padding }) => padding,
    backgroundColor: palette.primary.main,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    '@media (max-width: 1280px)': {
      padding: ({ direction }) =>
        direction === 'column' && '1.3vh 1.5rem 1.3vh 2rem',
    },
    '@media (max-width: 960px)': {
      padding: ({ direction }) =>
        direction === 'column' && '1.2vh 1.1rem 1.3vh 1.3rem',
    },
  },
  label: {
    color: '#FFF',
    fontWeight: 800,
    position: 'absolute',
    top: '0.2vh',
    left: 10,
    fontSize: '0.9rem',
  },
  percentage: {
    fontSize: '2rem',
    fontWeight: 700,
    color: '#fff',
    '@media (max-width: 1440px)': {
      fontSize: ({ direction }) => direction === 'column' && '1.8rem',
    },
    '@media (max-width: 1280px)': {
      fontSize: ({ direction }) => direction === 'column' && '1.6rem',
    },
    '@media (max-width: 960px)': {
      fontSize: ({ direction }) => direction === 'column' && '1.2rem',
    },
    '@media (max-width: 640px)': {
      whiteSpace: 'nowrap',
    },
  },
  text: {
    fontWeight: 700,
    textTransform: 'capitalize',
    lineHeight: '19px',
    color: '#fff',
    marginBottom: ({ direction }) => (direction === 'column' ? '1.8vh' : 0),
    '@media (max-width: 1440px)': {
      fontSize: ({ direction }) => direction === 'column' && '1.2rem',
      marginBottom: ({ direction }) => (direction === 'column' ? '1.4vh' : 0),
    },
    '@media (max-width: 1280px)': {
      fontSize: ({ direction }) => direction === 'column' && '1rem',
    },
    '@media (max-width: 960px)': {
      fontSize: ({ direction }) => direction === 'column' && '1rem',
      marginBottom: ({ direction }) => (direction === 'column' ? '1.1vh' : 0),
    },
  },
  img: {
    objectFit: 'scale-down',
  },
  rightComp: {
    paddingLeft: ({ direction }) => (direction === 'column' ? '1rem' : 0),
    '@media (max-width: 913px)': {
      paddingLeft: ({ direction }) => (direction === 'column' ? '3rem' : 0),
    },
    '@media (max-width: 640px)': {
      paddingRight: ({ direction }) => (direction === 'column' ? '3em' : 0),
    },
  },
  leftComp: {
    paddingRight: ({ direction }) => (direction === 'column' ? '1rem' : 0),
    '@media (max-width: 913px)': {
      paddingRight: ({ direction }) => (direction === 'column' ? '3rem' : 0),
    },
    '@media (max-width: 640px)': {
      paddingRight: ({ direction }) => (direction === 'column' ? '3em' : 0),
    },
  },
}));

export const BottomPremiumContainer = memo(
  ({
    text,
    label1,
    label2,
    percentage1,
    percentage2,
    direction,
    padding,
    value1,
    value2,
    localTeamLogo,
    visitorTeamLogo,
    localName,
    visitorName,
  }) => {
    const classes = useStyles({ direction, padding });
    return (
      <Grid item container className={classes.premium}>
        <Grid
          item
          container
          className={classes.root}
          direction={direction}
          wrap="nowrap"
          justifyContent="space-between"
        >
          <Grid
            item
            xs={direction === 'row' && 6}
            container
            alignItems="center"
          >
            <Typography
              variant={direction === 'row' ? 'h4' : 'h5'}
              className={classes.text}
            >
              {text}
            </Typography>
          </Grid>
          <Grid item xs={direction === 'row' && 6}>
            <Grid container justifyContent="space-between">
              <Grid
                item
                xs={6}
                container
                alignItems="center"
                justifyContent="space-between"
                className={classes.leftComp}
              >
                <Grid item xs={2}>
                  <Image
                    width={24}
                    height={30}
                    src={localTeamLogo}
                    className={classes.img}
                    alt={localName}
                  />
                </Grid>
                <Grid item xs={7} style={{ position: 'relative' }}>
                  <LinearDeterminate
                    height={'1.8vh'}
                    borderRadius={100}
                    colorPrimary="#1BD47B"
                    colorSecondary="#fff"
                    barRadius={100}
                    value={value1}
                  />
                  {/* <Typography className={classes.label}>{label1}</Typography> */}
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.percentage}>
                    {percentage1}
                  </Typography>
                </Grid>
              </Grid>
              <Grid
                item
                xs={6}
                container
                alignItems="center"
                justifyContent="space-around"
                // style={{ marginTop: '1vh' }}

                className={classes.rightComp}
              >
                <Grid item xs={2}>
                  <Image
                    width={24}
                    height={30}
                    src={visitorTeamLogo}
                    className={classes.img}
                    alt={visitorName}
                  />
                </Grid>
                <Grid item xs={7} style={{ position: 'relative' }}>
                  <LinearDeterminate
                    height={'1.8vh'}
                    borderRadius={100}
                    colorPrimary="#D6435C"
                    colorSecondary="#fff"
                    barRadius={100}
                    value={value2}
                  />
                  {/* <Typography className={classes.label}>{label2}</Typography> */}
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.percentage}>
                    {percentage2}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
);

import { Typography, Grid, Input } from '@mui/material';
import React, { useState } from 'react';
import { styled } from '@mui/material/styles';

// import { ScoutingFilterButton } from '../ScoutingFilterButton/ScoutingFilterButton';
// import { AdvancedInput } from '../../../AdvancedInput/AdvancedInput';

const AgeFilterContainer = styled(Grid)(({ theme }) => ({
  // dropDown: {
  //   padding: '14px 2.6em 24px 2.6em',
  //   background: '#fff',
  //   borderRadius: '12px',
  //   boxShadow: '8px 8px 100px rgba(2, 42, 84, 0.1)',
  //   // width: "100%",
  // },
  // sliderRoot: {
  //   padding: 0,
  //   width: 250,
  // },
  // rail: {
  //   height: 5,
  //   background: 'rgba(36, 107, 253, 0.4)',
  //   borderRadius: '',
  // },
  // track: {
  //   height: 5,
  //   background:
  //     'linear-gradient(90deg ,rgba(36, 107, 253, 0.8)  0% ,rgba(36, 107, 253, 0.2)  100%)',
  //   border: 'none',
  // },
  // thumb: {
  //   background: '#E9F0FF',

  //   width: 20,
  //   height: 20,
  //   boxShadow: 'none',

  //   zIndex: 4,
  //   '&:after': {
  //     content: "''",
  //     position: 'absolute',
  //     top: 10,
  //     left: 10,
  //     right: 0,
  //     bottom: 0,
  //     width: 10,
  //     height: 10,
  //     borderRadius: '50%',
  //     background: 'rgba(36, 107, 253, 1)',
  //   },
  // },
  // active: {
  //   boxShadow: 'none !important',
  // },
  // valueGrid: {
  //   borderRadius: 10,
  //   background: '#F6F7FA',
  //   padding: 8,
  // },
  // value: {
  //   fontSize: '2em',
  //   lineHeight: '16px',
  //   color: ' #022A54',
  // },
  // sliderGrid: {
  //   marginTop: '18px',
  // },

  border: '1px solid #A1B5C9',
  borderRadius: '8px',
  paddingLeft: '10px',
  height: '32px',
  '& .text': {
    color: '#677F98',
    // marginRight: 'auto',
    fontSize: '12px',
    lineHeight: '10px',
    fontWeight: 600,
    // whiteSpace: "nowrap",
    textTransform: 'capitalize',
    '@media (max-width:1144px)': {
      fontSize: '1.6em',
    },
    '@media (max-width:960px)': {
      fontSize: '1.2em',
    },
  },

  '& .input': {
    fontSize: 12,
    fontWeight: 600,
    color: '#A1B5C9',

    '&[type=number]': {
      '-moz-appearance': 'textfield',
    },
    '&::-webkit-outer-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
    '&::-webkit-inner-spin-button': {
      '-webkit-appearance': 'none',
      margin: 0,
    },
  },
  '& .inputRoot': {
    width: '35px',
  },
  '& .toInputRoot': {
    width: '35px',
  },
}));

export const AgeFilter = () => {
  const [value, setValue] = useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    // <ScoutingFilterButton
    //   text="Age"
    //   type="Age"
    //   pointerRight="170px"
    //   dropDownTop="45px"
    // >
    //   <Grid item className={classes.dropDown} container direction="column">
    //     <Grid item container alginItems="center" justifyContent="space-between">
    //       {value.map((val, i) => (
    //         <Grid item key={i} className={classes.valueGrid}>
    //           <Typography className={classes.value}>{val}</Typography>
    //         </Grid>
    //       ))}
    //     </Grid>
    //     <Grid item className={classes.sliderGrid}>
    //       <Slider
    //         value={value}
    //         onChange={handleChange}
    //         size="medium"
    //         classes={{
    //           root: classes.sliderRoot,
    //           rail: classes.rail,
    //           track: classes.track,
    //           thumb: classes.thumb,
    //           active: classes.active,
    //         }}
    //       />
    //     </Grid>
    //   </Grid>
    // </ScoutingFilterButton>

    <AgeFilterContainer
      container
      wrap="nowrap"
      alignItems="center"
      justifyContent="space-between"
    >
      <Typography className="text">Age</Typography>

      <Input
        placeholder="From"
        disableUnderline={true}
        classes={{ input: 'input', root: 'inputRoot' }}
        type="number"
      />
      <Typography className="text">-</Typography>
      <Input
        placeholder="To"
        disableUnderline={true}
        classes={{ input: 'input', root: 'toInputRoot' }}
        type="number"
      />
    </AgeFilterContainer>
  );
};

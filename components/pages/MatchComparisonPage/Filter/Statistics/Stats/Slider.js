import React from 'react';
import makeStyles from '@mui/styles/makeStyles';
import Typography from '@mui/material/Typography';
import Slider from '@mui/material/Slider';

const useStyles = makeStyles({
  root: {
    width: 300,
  },
  rail: {
    color: '#2B5198',
    opacity: 1,
    height: 5,
    borderRadius: 2,
  },
  track: {
    color: '#55BCB8',
    height: 5,
  },
  thumb: {
    color: '#FFFFFF',
    boxShadow: 'rgba(0,0,0,0.16)',
    border: '1px solid #D1D5DB',
    width: 14,
    height: 14,
  },
  valueLabel: {
    color: '#44093D',
  },
});

function valuetext(value) {
  return `${value}°C`;
}

export default function RangeSlider() {
  const classes = useStyles();
  const [value, setValue] = React.useState([20, 37]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        classes={{
          root: classes.sliderRoot,
          rail: classes.rail,
          track: classes.track,
          thumb: classes.thumb,
          valueLabel: classes.valueLabel,
        }}
      />
    </div>
  );
}

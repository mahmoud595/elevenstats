import { useState, memo } from 'react';
import { Grid, Typography, TextField } from '@mui/material';
import { styled } from '@mui/material/styles';

const Input = styled(TextField)(({ theme }) => ({
  width: '10px',

  '& .input': {
    fontSize: '2em',
    lineHeight: '10px',
    fontWeight: 600,
    whiteSpace: 'nowrap',
    textTransform: 'capitalize',
    padding: '0 0 0 1em',
    height: '32px',
    '@media (max-width:1144px)': {
      fontSize: '1.6em',
    },
    '@media (max-width:960px)': {
      fontSize: '1.2em',
      height: '24px',
    },
  },
}));

export const AdvancedInput = memo(({ placeHolder, setValue, value }) => {
  const changeHandler = (e) => {
    setValue(e.target.value);
  };
  return (
    <Input
      id="outlined-basic"
      variant="outlined"
      placeholder={placeHolder}
      value={value}
      onChange={changeHandler}
      autoComplete="false"
      type="number"
      inputProps={{
        className: 'input',
      }}
    />
  );
});

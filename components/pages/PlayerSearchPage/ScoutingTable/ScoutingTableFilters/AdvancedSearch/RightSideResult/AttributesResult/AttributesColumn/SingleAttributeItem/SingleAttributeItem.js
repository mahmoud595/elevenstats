import { useState } from 'react';
import { Grid, Input } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SelectionItem } from '../../../../SelectionItem/SelectionItem';

const SingleAttributeItemContainer = styled(Grid)(({ theme }) => ({
  '& .root': {
    width: '26px',
    height: '24px',
    borderRadius: '8px',
    border: '1px solid #A1B5C9',
    padding: '0px',
    fontSize: '11px',
    fontWeight: 500,
    color: '#677F98',
    marginRight: '8px',
    background: '#F6F7FA',
  },
  '& .focused': {
    border: '1px solid #A1B5C9',
  },
  '& .input': {
    padding: '0px 0px 0px 5px',
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
}));

export const SingleAttributeItem = ({ attribute }) => {
  const [value, setValue] = useState();
  return (
    <SingleAttributeItemContainer
      container
      justifyContent="space-between"
      alignItems="center"
      wrap="nowrap"
    >
      <SelectionItem item={attribute} noArrow />
      <Input
        disableUnderline={true}
        classes={{ root: 'root', focused: 'focused', input: 'input' }}
        type="number"
      />
    </SingleAttributeItemContainer>
  );
};

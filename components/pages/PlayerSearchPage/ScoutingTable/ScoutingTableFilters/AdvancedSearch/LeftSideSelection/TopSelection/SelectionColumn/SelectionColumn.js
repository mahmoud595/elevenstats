import { Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import { SelectionItem } from './SelectionItem/SelectionItem';
// const SelectionColumnContainer = styled(Grid)(() => ({}));

export const SelectionColumn = ({ items, setSelected, selected }) => {
  return (
    <>
      {items.map((item, i) => (
        <SelectionItem
          key={i}
          item={item}
          setSelected={setSelected}
          selected={selected}
        />
      ))}
    </>
  );
};

import { useState } from 'react';
import { Grid, Button, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { LeftSideSelection } from './LeftSideSelection/LeftSideSelection';
import { RightSideResult } from './RightSideResult/RightSideResult';
import { Btn } from 'components';

const AdvancedSearchContainer = styled(Grid)(({ theme }) => ({
  transition: 'all .6s ease-in-out',
  height: 'fit-content',
  //   paddingTop: '24px',
  overflow: 'hidden',
  // marginBottom: '20px',
  background: '#FFF',
  '& .bottomContiner': {
    marginTop: '24px',
    borderTop: '1px solid #EAEDF2',
    padding: '18px 0px',
  },
}));
export const AdvancedSearch = ({ open, setAdvancedSearch }) => {
  const [selected, setSelected] = useState('');

  return (
    <AdvancedSearchContainer
      container
      direction="column"
      sx={{
        // display: open ? 'block' : 'none',
        maxHeight: open ? '3000px' : '0px',
        paddingTop: open ? '24px' : '0px',
      }}
    >
      <Grid container>
        <LeftSideSelection setSelected={setSelected} selected={selected} />
        <RightSideResult selected={selected} />
      </Grid>
      <Grid container justifyContent="flex-end" className="bottomContiner">
        <Button
          className="scoutingSubmitBtn clearBtn clearGrid"
          onClick={setAdvancedSearch}
        >
          <Typography className="clear btnText">Close</Typography>
        </Button>
        <Button className="scoutingSubmitBtn clearGrid submitBtn">
          <Typography className="submit btnText">Save</Typography>
        </Button>
      </Grid>
    </AdvancedSearchContainer>
  );
};

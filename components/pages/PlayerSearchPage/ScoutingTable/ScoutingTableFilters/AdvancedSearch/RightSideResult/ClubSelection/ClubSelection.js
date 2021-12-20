import { Grid, Input, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ResultWrapper } from '../ResultWrapper/ResultWrapper';

const Container = styled(Grid)(({ theme }) => ({
  '& > *': {
    marginBottom: '18px',
  },
  '& .root': {
    width: '239px',
    height: '32px',
    borderRadius: '8px',
    border: '1px solid #A1B5C9',
    padding: '0px',
    fontSize: '11px',
    fontWeight: 500,
    color: '#677F98',
    marginRight: '8px',
    // background: "#F6F7FA",
  },
  '& .focused': {
    border: '1px solid #A1B5C9',
  },
  '& .input': {
    padding: '0px 0px 0px 5px',
  },
  '& .text': {
    fontSize: 10,
    fontWeight: 600,
  },
  '& .header': {
    color: '#A1B5C9',
  },
  '& .result': {
    color: '#677F98',
  },
}));

export const ClubSelection = ({ title = '' }) => {
  return (
    <ResultWrapper title={title}>
      <Container container direction="column" marginTop="20px">
        <Input
          disableUnderline={true}
          classes={{ root: 'root', focused: 'focused', input: 'input' }}
          placeholder={
            title === 'club'
              ? 'Search by team e.g: Liverpool'
              : 'Search by country e.g: Egypt'
          }
        />

        <Typography className="text header">Recent search</Typography>
        <Typography className="text result">Manchester United</Typography>
      </Container>
    </ResultWrapper>
  );
};

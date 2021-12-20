import { Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

const ResultWrapperContainer = styled(Grid)(({ theme }) => ({
  '& .title': {
    fontSize: '11px',
    fontWeight: 600,
    textTransform: 'uppercase',
  },
}));

export const ResultWrapper = ({ title = 'title', children }) => {
  return (
    <ResultWrapperContainer container direction="column">
      <Typography variant="h2" className="title">
        {title}
      </Typography>
      {children}
    </ResultWrapperContainer>
  );
};

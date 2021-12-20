import { Grid, Typography, Button } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';

const useStyles = makeStyles(({ palette }) => ({
  root: {
    borderRadius: 20,
    backgroundColor: (props) =>
      props.backgroundColor ? props.backgroundColor : 'transparent',
    boxShadow: '2px 2px 10px -1px rgba(0,0,0,0.1)',
    // minHeight: ({ minHeight }) => minHeight,
    textTransform: 'uppercase',
    color: '#FFFFFF',
    '& > div': {
      marginBottom: ({ marginBottom }) => marginBottom,
    },
  },
  header: {
    textAlign: 'center',
    letterSpacing: 1.4,
    backgroundColor: ({ headerColor }) => headerColor,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    padding: '15px 0',
    color: (props) =>
      props.textColor ? props.textColor : palette.primary.main,
  },
}));

export const Wrapper = ({ children, title, ...props }) => {
  const classes = useStyles(props);
  return (
    <Grid
      container
      direction="column"
      className={classes.root}
      id={props.id}
      style={{ ...props.style }}
    >
      {title ? (
        <Grid item className={classes.header}>
          <Typography variant="h5">{title}</Typography>
        </Grid>
      ) : null}

      {children}
    </Grid>
  );
};

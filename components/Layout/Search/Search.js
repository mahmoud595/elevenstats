import { Grid, InputBase, IconButton } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import SearchIcon from '@mui/icons-material/Search';

const useStyles = makeStyles(({ spacing, breakpoints }) => ({
  root: {
    // backgroundColor: '#6B2262',
    backgroundColor: ({ backgroundColor }) => backgroundColor,
    padding: ({ padding }) => padding,
    height: ({ height }) => height || '100%',
    borderRadius: ({ borderRadius }) => (borderRadius ? borderRadius : 5),
    width: ({ width }) => width ?? '100%',
    margin: ({ margin }) => margin ?? '0',
    border: ({ border }) => border ?? '0',
  },
  mainInput: {
    marginLeft: ({ marginLeft }) => marginLeft ?? spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 0,
  },
  inputRoot: {
    height: '100%',
  },
  secInput: {
    // textTransform: "capitalize",
    color: ({ color }) => color,
    // fontWeight: 600,
    fontSize: ({ fontSize }) => fontSize || '11px',
    '@media (max-width: 740px)': {
      fontSize: '9px',
    },
  },
  icon: {
    fontSize: '1.2em',
    fill: ({ color }) => color,
    [breakpoints.down('md')]: {
      fontSize: '1em',
    },
  },
}));

const Search = ({ title, rowReverse, ...props }) => {
  const classes = useStyles(props);
  return (
    <Grid
      container
      className={classes.root}
      alignItems="center"
      // direction={rowReverse ? "row-reverse" : "row"}
    >
      <Grid item xs={1}>
        <IconButton
          type="submit"
          className={classes.iconButton}
          aria-label="search"
          size="large"
        >
          <SearchIcon className={classes.icon} />
        </IconButton>
      </Grid>
      <Grid item xs={10}>
        <InputBase
          className={classes.mainInput}
          placeholder={title}
          classes={{ root: classes.inputRoot, input: classes.secInput }}
          onChange={props.onChange}
        />
      </Grid>
    </Grid>
  );
};

export default Search;

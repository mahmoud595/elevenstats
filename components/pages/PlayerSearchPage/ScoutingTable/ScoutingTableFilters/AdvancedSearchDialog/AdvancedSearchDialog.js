import { Dialog } from '@mui/material';
import makeStyles from '@mui/styles/makeStyles';
import { AddConditionOkContainer } from './AddConditionOkContainer/AddConditionOkContainer';
import { AdvancedSearchFilters } from './AdvancedSearchFilters/AdvancedSearchFilters';
import { AdvancedSearchHeader } from './AdvancedSearchHeader/AdvancedSearchHeader';
import { FiltersContainer } from './FiltersContainer/FiltersContainer';

const useStyles = makeStyles((theme) => ({
  container: {
    background: 'transparent',
  },
  paper: {
    margin: 0,
    boxShadow: 'none',
    width: '193.1em !important',

    maxWidth: 'inherit',
    maxHeight: 'inherit',
    borderRadius: '14px',
    padding: '24px 4.6em 30px 5.3em',
    display: 'flex',
    flexDirection: 'column',
    '@media (max-width:1200px)': {
      padding: '24px 2em 30px 2em',
    },
  },
}));
export const AdvancedSearchDialog = ({ open, setOpen }) => {
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <Dialog
    //   open={open}
    //   onClose={handleClose}
    //   aria-labelledby="alert-dialog-title"
    //   aria-describedby="alert-dialog-description"
    //   classes={{
    //     container: classes.container,
    //     paper: classes.paper,
    //   }}
    // >
    <>
      <AdvancedSearchHeader />
      <AdvancedSearchFilters />
      <FiltersContainer />
      <AddConditionOkContainer />
    </>
    // </Dialog>
  );
};

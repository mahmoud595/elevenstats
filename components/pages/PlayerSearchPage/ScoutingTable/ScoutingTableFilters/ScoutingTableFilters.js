import { useState } from 'react';
import { Button, Grid, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ScoutingFiltersButtons } from './ScoutingFiltersButtons/ScoutingFiltersButtons';
import { Settings } from 'public';
import { Btn } from 'components';
import { AdvancedSearch } from './AdvancedSearch/AdvancedSearch';

const ScoutingTableFiltersContainer = styled(Grid)(({ theme }) => ({
  marginTop: 18,
  // padding: '16px 2.6em',
  // borderRadius: '14px',
  // backgroundColor: 'rgba(161, 181, 201, 0.1)',

  '& .submitCancel': {
    display: 'flex',
    alignItems: 'center',
  },
  '& .submit': {
    color: '#fff',
  },
  '& .clear': {
    color: 'rgba(2, 42, 84, 1)',
  },
  '& .btnText': {
    fontSize: '2em',
    lineHeight: '10px',
    fontWeight: 600,
    '@media (max-width:1144px)': {
      fontSize: '1.6em',
    },
    '@media (max-width:960px)': {
      fontSize: '1.2em',
    },
  },
  '& .clearGrid': {
    marginLeft: '3.1em',
  },
  '& .scoutingSubmitBtn': {
    borderRadius: '8px',
    padding: '10px 3.8em 9px',
    fontSize: '1em',
    '@media (max-width:960px)': {
      padding: '7px 1em 7px',
    },
  },
  '& .submitBtn': {
    backgroundColor: '#022A54 !important',
  },
  '& .clearBtn': {
    backgroundColor: 'rgba(161, 181, 201, 0.2) !important',
  },
  '& .settings': {
    display: 'flex',
    alignItems: 'center',
    '& svg': {
      '@media (max-width:960px)': {
        width: 12,
        height: 12,
      },
    },
  },
  '& .advancedGrid': {
    marginLeft: '1em',
  },
  '& .advancedText': {
    fontSize: '2em',
    fontWeight: 600,
    lineHeight: '10px',
    color: '#022A54',
    '@media (max-width:960px)': {
      fontSize: '1.4em',
    },
  },
  '& .filtersContainer': {
    padding: '12px',
    borderRadius: '14px',
    backgroundColor: 'rgba(161, 181, 201, 0.1)',
  },
}));
export const ScoutingTableFilters = ({ setAdvancedSearch, advancedSearch }) => {
  return (
    <ScoutingTableFiltersContainer container direction="column">
      <Grid
        item
        container
        justifyContent="space-between"
        className="filtersContainer"
      >
        <ScoutingFiltersButtons />
        <Grid item className="submitCancel">
          {/* <Button className="scoutingSubmitBtn submitBtn">
          <Typography className="submit btnText">Submit</Typography>
        </Button> */}

          <Grid item>
            <Btn
              padding="4px 1.5em 6px 1em"
              // backgroundColor="#022A54"
              borderRadius="8px"
              lowSizePadding="4px 1em 6px 1em"
              onClick={setAdvancedSearch}
              borderColor="#A1B5C9"
            >
              <Grid item className="settings">
                <Settings />
              </Grid>
              <Grid item className="advancedGrid">
                <Typography className="advancedText">
                  Advanced Search
                </Typography>
              </Grid>
            </Btn>
          </Grid>

          <Button className="scoutingSubmitBtn clearBtn clearGrid">
            <Typography className="clear btnText">Clear All</Typography>
          </Button>
        </Grid>
      </Grid>

      <AdvancedSearch
        open={advancedSearch}
        setAdvancedSearch={setAdvancedSearch}
      />
    </ScoutingTableFiltersContainer>
  );
};

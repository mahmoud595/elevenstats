import {
  Typography,
  Grid,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import { LeagueRow } from "./LeagueRow/LeagueRow";

const StyledTable = styled(Grid)(() => ({
  margin: "20px",
}));

const StyledTableCell = styled(TableCell)(() => ({
  fontSize: "20px !important",
  color: "#022A54",
  border: "none",
}));

export const LeaguesTable = ({ leagues, countrySlug, elo }) => {
  return (
    <StyledTable>
      <TableContainer component={Paper} sx={{ overflow: "initial" }}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Sm League</StyledTableCell>
              <StyledTableCell align="center">Wy League</StyledTableCell>

              {elo ? (
                <StyledTableCell align="center">Elo Rate</StyledTableCell>
              ) : (
                <></>
              )}
              {!elo ? (
                <StyledTableCell align="left">Select </StyledTableCell>
              ) : (
                <></>
              )}
              <StyledTableCell align="left"></StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leagues?.length ? (
              <>
                {leagues.map((row, i) => (
                  <LeagueRow
                    row={row}
                    key={i}
                    countrySlug={countrySlug}
                    elo={elo}
                  />
                ))}
              </>
            ) : (
              <></>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </StyledTable>
  );
};

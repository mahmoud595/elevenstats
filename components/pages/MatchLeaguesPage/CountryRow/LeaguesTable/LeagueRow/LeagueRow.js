import { useState, useEffect, useRef } from "react";
import {
  Typography,
  Grid,
  TableCell,
  TableRow,
  ClickAwayListener,
} from "@mui/material";
import SaveIcon from "@mui/icons-material/Save";
import { styled } from "@mui/material/styles";
import { Btn } from "components";
import { LeagueDropDown } from "./LeagueDropDown/LeagueDropDown";
import apiAxios from "utils/apiAxios";

const StyledTableRow = styled(TableRow)(() => ({}));

const StyledTableCell = styled(TableCell)(() => ({
  //   border: "none",
  fontWeight: 600,
}));

export const LeagueRow = ({ row, countrySlug, elo }) => {
  const [submit, setSubmit] = useState(false);
  const [dropDown, setDropDown] = useState(false);
  const [wyLeague, setWyLeague] = useState();
  const [wyLeagues, setWyLeagues] = useState([]);
  const eloRef = useRef(null);
  const clickHandler = async () => {
    setSubmit(true);

    try {
      await apiAxios.patch(
        `/leagues/${row?.slug}`,
        elo
          ? {
              elo: eloRef.current.innerText,
            }
          : { wyId: wyLeague.wyId }
      );
      console.log("done");
    } catch (e) {
      console.log(e);
    }
  };
  const closeDropDown = () => {
    setDropDown(false);
  };
  const openDropDown = () => {
    setDropDown(true);
  };

  useEffect(() => {
    const fetchWySlugs = async () => {
      try {
        const res = await apiAxios(`/countries/${countrySlug}/wyLeagues`);
        setWyLeagues(res?.data?.data);
        if (row?.wyId) {
          const league = res?.data?.data?.filter((wy) => {
            return row?.wyId === wy.wyId;
          });

          setWyLeague(league[0]);
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchWySlugs();
  }, [row]);

  const leagueHandler = (league) => {
    setWyLeague(league);
    setDropDown(false);
  };

  return (
    <StyledTableRow
      key={row.name}
      //   sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <StyledTableCell component="th" scope="row" align="center">
        {row.name}
      </StyledTableCell>
      <StyledTableCell align="center">
        {wyLeague?.name ?? "none"}
      </StyledTableCell>
      {elo ? (
        <StyledTableCell
          align="center"
          contentEditable="true"
          ref={eloRef}
          suppressContentEditableWarning={true}
        >
          {row?.eloRating ?? 0}
        </StyledTableCell>
      ) : (
        <></>
      )}
      {!elo ? (
        <StyledTableCell align="left">
          <ClickAwayListener onClickAway={closeDropDown}>
            <Grid item sx={{ position: "relative" }}>
              <Btn
                padding="6px"
                borderRadius="5px"
                borderColor="#022A54"
                onClick={clickHandler}
                onClick={openDropDown}
                //   disabled={wyLeague ? true : false}
              >
                <Typography
                  variant="h2"
                  sx={{ fontSize: "12px", fontWeight: 600 }}
                >
                  Select League
                </Typography>
              </Btn>
              {dropDown ? (
                <LeagueDropDown
                  countrySlug={countrySlug}
                  clickHandler={leagueHandler}
                  wyLeagues={wyLeagues}
                />
              ) : (
                <></>
              )}
            </Grid>
          </ClickAwayListener>
        </StyledTableCell>
      ) : (
        <></>
      )}
      <StyledTableCell align="center">
        <Btn
          padding="6px"
          borderRadius="5px"
          backgroundColor="#022A54"
          onClick={clickHandler}
        >
          <SaveIcon sx={{ fill: "#fff" }} />
        </Btn>
      </StyledTableCell>
    </StyledTableRow>
  );
};

import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, useMediaQuery } from "@mui/material";
import { Btn, Search } from "components";
import { EditPencil } from "public";
const Player = styled(Grid)(({ theme }) => ({
  marginTop: "24px",
  "& .playerTitle": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    color: "#022A54",
    textTransform: "uppercase",
  },
  "& .addPlayersText": {
    fontSize: "10px",
    lineHeight: "19px",
    letterSpacing: "0.5%",
    fontWeight: 600,
    color: "#1BD47B",
  },
  "& .inputPlayer": {
    padding: "2px 2px 2px 12px",
    borderRadius: "8px",
    background: "#EAEDF2",
    display: "flex",
    margin: "0 18px 0 24px",
    alignItems: "center",
  },
  "& .playerName": {
    fontSize: "2em",
    lineHeight: "10px",
    fontWeight: 600,
    color: "#022A54",
    outline: "none",
  },
}));

export const ChartPlayer = () => {
  const sm = useMediaQuery("(max-width:690px)");
  const [editable, setEditable] = useState(false);
  const editHandler = () => {
    setEditable(!editable);
  };
  return (
    <Player item container alignItems="center" justifyContent="center">
      <Typography className="playerTitle">Select Player</Typography>
      <Grid item className="inputPlayer">
        <Typography
          className="playerName"
          contenteditable={`${editable}`}
          spellcheck="false"
        >
          Lionel Messi
        </Typography>
        <Btn
          padding="6px"
          borderRadius="6px"
          backgroundColor="#DBE2EA"
          margin="0 0 0 24px"
          onClick={editHandler}
        >
          <EditPencil />
        </Btn>
      </Grid>
      <Btn
        backgroundColor="rgba(27, 212, 123, 0.08)"
        padding="7px 12px 6px 12px"
        borderRadius="8px"
      >
        <Grid item container>
          <Grid
            item
            container
            alignItems="center"
            justifyContent="center"
            sx={{
              width: "16px",
              height: "16px",
              borderRadius: "50%",
              background: "rgba(27, 212, 123, 0.13)",
            }}
          >
            <Typography
              sx={{ fontSize: "10px", lineHeight: "0", color: "#1BD47B" }}
              variant="h4"
            >
              +
            </Typography>
          </Grid>
          <Grid item sx={{ marginLeft: "6px" }}>
            <Typography className="addPlayersText">Add more Players</Typography>
          </Grid>
        </Grid>
      </Btn>
    </Player>
  );
};

import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

import { BackArrowIcon, Folder, Delete } from "public";
import { Btn } from "components";
import { AddToFolderBtn } from "./AddToFolderBtn/AddToFolderBtn";
const HistoryHeader = styled(Grid)(({ theme }) => ({
  paddingBottom: "24px",
  borderBottom: "1px solid #EAEDF2",
  "& .historyText": {
    fontSize: "12px",
    fontWeight: 700,
    lineHeight: "16px",
    textTransform: "capitalize",
  },
  "& .folderGrid": {
    stroke: "#022A54",
  },
}));

export const ChartHistoryHeader = ({
  historyType,
  setHistory,
  setHistoryType,
  selected,
  deleteChart,
}) => {
  const backHandler = () => {
    setHistory(false);
  };
  const organizeCancelHandler = () => {
    historyType === "initial"
      ? setHistoryType("organize")
      : setHistoryType("initial");
  };
  return (
    <HistoryHeader
      item
      container
      alignItems="center"
      justifyContent="space-between"
      wrap="nowrap"
    >
      <Grid item container alignItems="center">
        <Btn
          padding="12px 9px"
          borderRadius="50%"
          backgroundColor="#F6F7FA"
          margin="0 12px 0 0"
          onClick={backHandler}
        >
          <BackArrowIcon />
        </Btn>
        <Typography className="historyText">
          {historyType === "initial"
            ? "HISTORY"
            : historyType === "organize"
            ? "ORGANIZE CHARTS"
            : ""}
        </Typography>
      </Grid>
      <Grid item container alignItems="center" justifyContent="flex-end">
        {selected && historyType === "organize" ? (
          <>
            <AddToFolderBtn />
            <Btn
              padding="9px 12px 9px 14px"
              borderRadius="8px"
              backgroundColor="#FCDADF"
              margin="0 24px 0 0 "
              onClick={() => deleteChart()}
            >
              <Grid container alignItems="center">
                <Delete style={{ stroke: "#FB5266" }} />
                <Typography
                  className="historyText"
                  sx={{ color: "#FB5266", marginLeft: "12px" }}
                >
                  Delete Selected
                </Typography>
              </Grid>
            </Btn>
          </>
        ) : (
          <></>
        )}
        <Btn
          padding="9px 15px 8px 20px"
          borderRadius="8px"
          backgroundColor="rgba(161, 181, 201, 0.2)"
          onClick={organizeCancelHandler}
        >
          <Grid item container alignItems="center" className="folderGrid">
            {historyType === "initial" ? <Folder /> : <></>}
            <Typography
              className="historyText"
              sx={{
                marginLeft: historyType === "initial" ? "10px" : "0",
                color: "#022A54",
              }}
            >
              {" "}
              {historyType === "initial"
                ? "Organize Charts"
                : historyType === "organize"
                ? "Cancel"
                : ""}
            </Typography>
          </Grid>
        </Btn>
      </Grid>
    </HistoryHeader>
  );
};

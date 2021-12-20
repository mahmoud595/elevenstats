import { styled } from "@mui/material/styles";
import { Grid, Typography, ClickAwayListener, Dialog } from "@mui/material";

import { Delete } from "public";
import { Btn } from "components";

const DeleteContainer = styled(Dialog)(({ theme }) => ({
  "& .dialogPaper": {
    padding: "40px 64px 32px 64px",
    boxShadow: "none",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    borderRadius: "24px",
  },
  "& .deleteGrid": {
    "& >svg": {
      width: "21px",
      height: "24px",
      stroke: "#FB5266",
    },
    padding: "18px 19px",
    backgroundColor: "rgba(251, 82, 102, 0.14)",
    borderRadius: "12px",
  },
  "& .deleteTitle": {
    marginTop: "24px",
    fontSize: "20px",
    lineHeight: "24px",
    fontWeight: 700,
    color: "#022A54",
  },
  "& .deleteQuestion": {
    marginTop: "13px",
    fontSize: "13px",
    lineHeight: "24px",
    fontWeight: 500,
    color: "rgba(2, 42, 84, 0.6)",
  },
  "& .deleteBtnText": {
    fontSize: "14px",
    letterSpacing: "1.5px",
    lineHeight: "10px",
    fontWeight: 600,
    color: "#fff",
    marginLeft: "16px",
  },
  "& .deleteCancelText": {
    fontSize: "14px",
    lineHeight: "10px",
    fontWeight: 600,
    color: "rgba(2, 42, 84, 0.6)",
  },
  "& .btnGrid": {
    "&>svg": {
      width: "16px",
      height: "18px",
      stroke: "#fff",
    },
  },
}));
export const DeleteDialog = ({
  deleteChart,
  deleteDialog,
  setDeleteDialog,
  index,
}) => {
  const dialogHandler = () => {
    setDeleteDialog(!deleteDialog);
  };
  const chartDeleteHandler = (del) => {
    del && deleteChart(index);
    setDeleteDialog(!deleteDialog);
  };

  return (
    <DeleteContainer
      onClose={dialogHandler}
      open={deleteDialog}
      classes={{
        paper: "dialogPaper",
      }}
    >
      <Grid item className="deleteGrid">
        <Delete />
      </Grid>
      <Typography className="deleteTitle" variant="h4">
        Are you sure?
      </Typography>
      <Typography className="deleteQuestion" variant="h4">
        You want to delete this chart from your history?
      </Typography>
      <Btn
        padding="8px 26px"
        borderRadius="8px"
        backgroundColor="#022A54"
        margin="32px 0 16px 0"
        onClick={() => chartDeleteHandler(true)}
      >
        <Grid
          item
          container
          alignItems="center"
          wrap="nowrap"
          className="btnGrid"
        >
          <Delete />
          <Typography className="deleteBtnText" variant="h4">
            Yes, Delete{" "}
          </Typography>
        </Grid>
      </Btn>
      <Btn paddin="0" onClick={() => chartDeleteHandler(false)}>
        <Typography variant="h4" className="deleteCancelText">
          No, Keep it
        </Typography>
      </Btn>
    </DeleteContainer>
  );
};

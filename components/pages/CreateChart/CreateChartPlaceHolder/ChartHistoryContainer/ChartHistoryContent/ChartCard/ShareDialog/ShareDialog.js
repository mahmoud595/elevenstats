import { styled } from "@mui/material/styles";
import { Grid, Typography, ClickAwayListener } from "@mui/material";

import { Facebook, Instagram, Linkedin, Tweeter, Copy } from "public";
import { Btn } from "components";
const Dialog = styled(Grid)(({ theme }) => ({
  position: "absolute",
  top: "40px",
  left: "-3px",
  width: "248px",
  padding: "21px 16px 12px 16px",
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: " 13px 7px 80px rgba(134, 134, 134, 0.2)",
  zIndex: 3,
  "::before": {
    content: '""',
    width: "20px",
    height: "10px",
    background: "#FFF",
    position: "absolute",

    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    borderRadius: "4px",
    top: "-7px",
    left: "10px",
    boxShadow: " 0px 8px 20px rgba(2, 42, 84, 0.1)",
  },
  "& .title": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    color: "#022A54",
    textAlign: "left",
  },
  "& .shareBtnsContainer": {
    marginTop: "12px",
  },
  "& .copySection": {
    marginTop: "20px",
  },
  "& .copyLink": {
    borderRadius: "6px",
    backgroundColor: "#F6F7FA",
    marginTop: "8px",
    padding: "2px 2px 2px 8px",
  },
  "& .linkText": {
    fontSize: "10px",
    fontWeight: "500",
    lineHeight: "16px",
    color: "rgba(2, 42, 84, 0.6)",
    textTransform: "initial",
  },
}));
const btns = [
  { icon: <Facebook />, bgColor: "#3B5998" },
  { icon: <Tweeter />, bgColor: "#1DA1F2" },
  { icon: <Linkedin />, bgColor: "#0077B5" },
  { icon: <Instagram />, bgColor: "#C13584" },
];
export const ShareDialog = ({ shareDialog, setShareDialog }) => {
  const clickHandler = () => {
    setShareDialog(!shareDialog);
  };
  return (
    <ClickAwayListener onClickAway={clickHandler}>
      <Dialog item container direction="column">
        <Grid item>
          <Typography className="title" variant="h4">
            Share chart on:
          </Typography>
        </Grid>
        <Grid item container alignItems="center" className="shareBtnsContainer">
          {btns.map(({ icon, bgColor }, i) => (
            <Btn
              width="20px"
              height="20px"
              backgroundColor={bgColor}
              key={i}
              margin={i !== 0 ? "0 0 0 14px" : "0"}
              borderRadius="50%"
            >
              <Grid
                item
                container
                alignItems="center"
                justifyContent="center"
                sx={{
                  "& svg": {
                    stroke: "#fff",
                  },
                }}
              >
                {icon}
              </Grid>
            </Btn>
          ))}
        </Grid>
        <Grid item container alignItems="center" className="copySection">
          <Typography className="title" variant="h4">
            Or copy link
          </Typography>
          <Grid
            sx={{
              flex: 1,
              marginLeft: "8px",

              borderTop: "1px solid #EAEDF2",
            }}
          />
        </Grid>
        <Grid
          item
          container
          alignItems="center"
          className="copyLink"
          wrap="nowrap"
          justifyContent="space-between"
        >
          <Typography className="linkText" varinat="h4">
            https://elevenstats.tsquadlabs.com
          </Typography>
          <Btn borderRadius="6px" backgroundColor="#E4E8EE" padding="7px">
            <Copy />
          </Btn>
        </Grid>
      </Dialog>
    </ClickAwayListener>
  );
};

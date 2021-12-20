import React, { useState, useEffect, useCallback } from "react";
import {
  Typography,
  Grid,
  Dialog,
  TextareaAutosize,
  useMediaQuery,
} from "@mui/material";
import makeStyles from "@mui/styles/makeStyles";

import { X } from "public";
import { EmotesContainer } from "./EmotesContainer/EmotesContainer";
import { FeedBackTypes } from "./FeedBackTypes/FeedBackTypes";
import Btn from "components/Layout/Btn/Btn";
import apiAxios from "utils/apiAxios";
import { SubmitBtn } from "./SubmitBtn/SubmitBtn";
import { EmailInput } from "./EmailInput/EmailInput";
const useStyles = makeStyles(({ palette }) => ({
  dialog: {
    borderRadius: "18px",
    padding: "40px 6.6em 30px 6.6em",
    "@media (max-width:600px)": {
      padding: "30px 16px ",
      margin: "0 16px",
    },
  },
  titleGrid: {
    marginTop: 74,
  },
  headerText: {
    fontSize: "2.6em",
    fontWeight: 700,
    lineHeight: "22px",
    color: "rgba(2, 42, 84, 1)",
    textAlign: "center",
    whiteSpace: "normal",
  },
  title: {
    fontSize: "2.3em",
    fontWeight: 600,
    lineHeight: "22px",
    color: "rgba(2, 42, 84, 0.6)",
    // "@media (max-width:600px)": {
    //   fontSize: 16,
    // },
  },

  closeBtnGrid: {
    position: "absolute",
    top: 24,
    right: 24,
    "& svg": {
      width: 13,
      height: 13,
    },
    "@media (max-width:600px)": {
      top: 14,
      right: 14,
    },
  },
  topHeaderGrid: {
    width: "64%",
  },
  feedbackAboutContainer: {
    paddingTop: 30,
    opacity: ({ emoteSelected }) => (emoteSelected ? 1 : 0),
    height: ({ emoteSelected }) => (emoteSelected ? "inherit" : 0),
    transition: "all 0.5s linear ",
    // overflow: ({ emoteSelected }) => (emoteSelected ? "auto" : "hidden"),
    overflow: "hidden",
  },
  feedbackAboutText: {
    fontSize: "2.3em",
    fontWeight: 600,
    lineHeight: "12px",
    color: "#022A54",
    "@media (max-width:600px)": {
      fontSize: 14,
    },
  },

  textAreaGrid: {
    marginTop: 34,
    "&>textarea": {
      border: "1px solid #EAEDF2",
      borderRadius: "6px",
      padding: "12px 0 0 16px",
      fontSize: 12,
      resize: "none",
      height: "148px !important",
      overflowY: "auto !important",
      minWidth: "100%",
      "&:focus": {
        outline: "none",
      },
      "@media (max-width:600px)": {
        fontSize: 11,
      },
    },
  },
  bg: {
    position: "absolute",
    top: "0",
    left: "0",
    width: "100%",
    height: "15%",
    background:
      "linear-gradient(180deg, rgba(36, 107, 253, 0.1) 0%, rgba(36, 107, 253, 0.02) 100%)",
    borderRadius: " 0 0 240px 50%/60px",
  },

  provide: {
    fontSize: "2em",
    lineHeight: "10px",
    color: "red",
    whiteSpace: "nowrap",
  },
}));

export const FeedbackDialog = ({ open, setOpen }) => {
  const [emoteSelected, setEmoteSelected] = useState("");
  const [feedBackType, setFeedBackType] = useState([]);
  const [text, setText] = useState("");
  const [email, setEmail] = useState(null);
  const [error, setError] = useState(true);
  const classes = useStyles({ emoteSelected });
  const textChange = (e) => {
    setText(e.target.value);
  };
  const emailHandler = useCallback(
    (event) => {
      setEmail(event.target.value);
    },
    [email]
  );
  const handleClose = () => {
    setOpen(false);
    setEmoteSelected("");
    setFeedBackType([]);
    setText("");
    setError(true);
    setEmail(null);
  };

  const handleChange = useCallback(
    (event) => {
      setFeedBackType([...feedBackType, event.target.name]);
    },
    [feedBackType]
  );

  useEffect(() => {
    const found = feedBackType.find((value) => (value ? true : false));

    setError(!(text && emoteSelected && found));
  }, [text, emoteSelected, feedBackType]);
  const submitHandler = async () => {
    const dataSubmited = {
      type: emoteSelected,
      categories: feedBackType,
      message: text,
    };

    try {
      if (!error) {
        handleClose();

        await apiAxios.post(
          "/feedbacks",
          email ? { ...dataSubmited, email } : dataSubmited
        );
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <Dialog
      onClose={handleClose}
      open={open}
      scroll="body"
      aria-labelledby="customized-dialog-title"
      classes={{
        paper: classes.dialog,
      }}
    >
      <Grid item className={classes.bg}></Grid>

      <Grid item className={classes.closeBtnGrid}>
        <Btn
          padding="8px"
          borderRadius="50%"
          backgroundColor="#F6F7FA"
          onClick={handleClose}
        >
          <X />
        </Btn>
      </Grid>
      <Grid container direction="column">
        <Grid
          item
          container
          direction="column"
          alignItems="center"
          className={classes.header}
        >
          <Grid item className={classes.topHeaderGrid}>
            <Typography className={classes.headerText}>
              Hi 👋 We will be happy to hear your feedback
            </Typography>
          </Grid>
          <Grid item className={classes.titleGrid}>
            <Typography className={classes.title}>
              How satisfied are you with Elevenstats?
            </Typography>
          </Grid>
          <EmotesContainer
            setEmoteSelected={setEmoteSelected}
            emoteSelected={emoteSelected}
          />
        </Grid>

        <Grid
          item
          container
          direction="column"
          className={classes.feedbackAboutContainer}
        >
          <Grid item>
            <Typography className={classes.feedbackAboutText}>
              Feedback about!
            </Typography>
          </Grid>
          <FeedBackTypes
            feedBackType={feedBackType}
            changeHandler={handleChange}
          />
          <Grid item className={classes.textAreaGrid}>
            <TextareaAutosize
              onChange={(e) => textChange(e)}
              placeholder="We would like to hear your suggestions...."
            />
          </Grid>
          <EmailInput emailHandler={emailHandler} />
          <SubmitBtn submitHandler={submitHandler} error={error} />
        </Grid>
      </Grid>
    </Dialog>
  );
};

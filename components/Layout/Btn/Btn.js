import { Button, Typography, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

const ButtonContainer = styled(Button)(() => ({
  fontSize: "1em",

  "& .text": {
    textAlign: "left",
    borderRadius: "1em",
    whiteSpace: "nowrap",
  },
  "& .label": {
    height: "100%",
  },

  "& .textSizeSmall": {
    fontSize: "1em",
  },
}));

const Btn = ({ children, ...props }) => {
  return (
    <ButtonContainer
      disabled={props.disabled}
      aria-describedby={props.ariaDescribedBy}
      onClick={props.onClick}
      fullWidth={props.fullWidth}
      value={props.value}
      startIcon={props.startIcon}
      endIcon={props.endIcon}
      sx={{
        "& .textRoot": {
          padding: props.textPadding,
        },
        "& .textSizeSmall": {
          padding: props.textSizeSmallPadding,
        },
        margin: props.margin || 0,
        opacity: props.opacity && props.opacity,
        minWidth: props.minWidth || 0,
        background: props.backgroundColor,
        padding: props.padding,
        borderRadius: props.borderRadius || "5px",
        boxShadow: props.boxShadow,
        border: `1px solid ${props.borderColor}`,
        height: props.height,
        width: props.width,
        color: props.color,
        borderBottom: props.borderBottom && props.borderBottom,
        "&:hover": {
          background: props.backgroundColor || "transparent",
        },
        justifyContent: props.justify || "center",

        "@media only screen and (max-width:960px)": {
          padding: props.lowSizePadding,
        },
        "@media only screen and (max-width:640px)": {
          height: props.mobileHeight,
        },
      }}
      size="small"
      classes={{
        label: "label",
        text: "textRoot",
        textSizeSmall: "textSizeSmall",
      }}
      ref={props.ref}
      aria-controls={props.ariaControls}
    >
      {props.text ? (
        <Grid container alignItems="center">
          <Grid item xs={props?.large ? props?.large : 11}>
            <Typography
              className="text"
              sx={{
                fontSize: props.fontSize,
                "@media only screen and (max-width:1100px)": {
                  fontSize: `${props.fontSize - 3}px`,
                  fontWeight: 600,
                },
                "@media only screen and (max-width:700px)": {
                  fontSize: `${props.fontSize - 5}px`,
                },
                fontWeight: props.fontWeight,
                textTransform: props.textTransform,
                margin: props.margin,
                color: props.color,
              }}
            >
              {props.text}
            </Typography>
          </Grid>

          <Grid
            item
            xs={props?.small ? props?.small : 1}
            container
            justifyContent="center"
            alignItems="center"
          >
            {children}
          </Grid>
        </Grid>
      ) : (
        <>{children}</>
      )}
    </ButtonContainer>
  );
};

export default Btn;

import { useCallback, useMemo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const WinLose = styled(Grid)(({ theme }) => ({
  height: "100%",
  "& > div:not(:last-child)": {
    marginRight: "1.2em",
  },

  "& .winLoseCircle": {
    borderRadius: "50%",
  },
  "& .winLoseText": {
    textTransform: "uppercase",
    color: "#fff",
  },
}));

const result = ["w", "w", "w", "l", "W"];

export const WinLoseComp = ({
  form = result,
  firstComp,
  type,
  teamComp,
  ...props
}) => {
  const showResult = useCallback(() => {
    return form.map((name, index) => (
      <Grid
        item
        container
        key={index}
        className="winLoseCircle"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor:
            name.toLocaleLowerCase() === "w"
              ? "#25D982"
              : name.toLocaleLowerCase() === "l"
              ? "#FB5266"
              : "#F6C205",
          color: "#fff",
          height: props.size || 29,
          width: props.size || 29,
          // "@media (max-width: 1500px)": {
          //   height: props.size - 6 || 25,
          //   width: props.size - 6 || 25,
          // },
          // "@media (max-width: 1119px)": {
          //   height: props.size - 6 || 20,
          //   width: props.size - 6 || 20,
          // },
          "@media (max-width: 960px)": {
            height: firstComp && props.size ? props.size - 7 : 20,
            width: firstComp && props.size ? props.size - 7 : 20,
          },
          // "@media (max-width: 752px)": {
          //   height: firstComp && props.size ? props.size - 15 : 13,
          //   width: firstComp && props.size ? props.size - 15 : 13,
          // },
        }}
      >
        <Typography
          variant="h5"
          className="winLoseText"
          sx={{
            color: (theme) => props.fontColor ?? theme.palette.primary.main,
            lineHeight: props.lineHeight ?? "17.71px",
            fontWeight: props.fontWeight ?? 500,
            fontSize: props.fontSize ?? "1.4rem",
            "@media (max-width: 1440px)": {
              fontSize: props.midFontSize && props.midFontSize,
            },
            "@media (max-width: 960px)": {
              fontSize: props.lowFontSize ?? "0.9rem",
              lineHeight: "14px !important",
            },
            "@media (max-width: 640px)": {
              fontSize: props.mobileFontSize ?? "0.9rem",
              lineHeight: "14px !important",
            },
          }}
        >
          {name}
        </Typography>
      </Grid>
    ));
  }, [form]);

  const finalResult = useMemo(() => showResult(), [form]);

  return (
    <WinLose
      container
      alignItems="center"
      // justifyContent="flex-start"
      justifyContent={
        firstComp && type === "right"
          ? "flex-start"
          : teamComp
          ? "flex-start"
          : "flex-end"
      }
      wrap="nowrap"
      // spacing={1}
    >
      {finalResult}
    </WinLose>
  );
};

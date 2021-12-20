import { memo } from "react";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Btn } from "components";
import { InfoIconWrapper } from "components/pages/PlayerProfilePage/PlayerOverViewPage/InfoIconWrapper/InfoIconWrapper";

const Attribute = styled(Grid)(() => ({
  "& .attributeRowText": {
    fontSize: 12,
    // lineHeight: "30px",
    fontWeight: 600,
    textTransform: "capitalize",
  },
  "& .attributeRowTextGrid": {
    marginLeft: "12px",
    flex: 1,
  },

  "& .attributeBtnGrid": {
    marginLeft: "14px",

    borderRadius: "11px",
    width: "34px",
    height: "23px",
  },
}));

export const AttributesRow = memo(({ text, score, color, backgroundColor }) => {
  return (
    <Attribute item container alignItems="center" xs={6}>
      <InfoIconWrapper />
      <Grid item className="attributeRowTextGrid">
        <Typography
          sx={{
            color: "rgba(2, 42, 84, 0.6)",
            lineHeight: "30px",
          }}
          className="attributeRowText"
        >
          {text}
        </Typography>
      </Grid>
      <Grid
        item
        sx={{
          color,
          fontSize: 14,
          transform: `rotate(${180 - 1.8 * score}deg)`,
        }}
      >
        &#11165;
      </Grid>
      <Grid
        item
        className="attributeBtnGrid"
        sx={{
          backgroundColor,
        }}
        container
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          sx={{
            color,
          }}
          className="attributeRowText"
        >
          {score}
        </Typography>
      </Grid>
    </Attribute>
  );
});

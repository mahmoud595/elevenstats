import { useCallback, useMemo } from "react";
import { useSelector } from "react-redux";

import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";
import { calculateAverageValues } from "utils/helperFunctions/homeHelperFunctions";

const BttsAvg = styled(Grid)(({ theme }) => ({
  "& .bttsAndAvgTxt": {
    fontSize: "2em",
    "@media (max-width:1280px)": {
      fontSize: "1.7em",
      // lineHeight: "1px",
    },
    "@media (max-width:960px)": {
      fontSize: "1.4em",
      // lineHeight: "1px",
    },
  },
  "& .bttsAndAvg": {
    position: "relative",
    maxWidth: "6.67em",
    background: "#FEEBCD",
    borderRadius: "10.5px",
    padding: "0.4em 0",
    "@media (max-width:960px)": {
      maxWidth: "4.3em",
      // lineHeight: "1px",
    },
  },
}));

export const BttsAndAvg = ({
  firstColumn,
  localTeamStats,
  visitorTeamStats,
}) => {
  const { firstColumnSortValue, secondColumnSortValue } = useSelector(
    ({ home }) => {
      const { firstColumnSortValue, secondColumnSortValue } = home;

      return { firstColumnSortValue, secondColumnSortValue };
    }
  );

  const calculateValue = useCallback(
    (newValue) =>
      calculateAverageValues(
        newValue,
        localTeamStats,
        visitorTeamStats,
        firstColumn
      ),
    [
      firstColumnSortValue,
      secondColumnSortValue,
      localTeamStats,
      visitorTeamStats,
      firstColumn,
    ]
  );

  const firstColumnValue = useMemo(() => {
    if (firstColumn) {
      return calculateValue(firstColumnSortValue);
    } else {
      return null;
    }
  }, [firstColumnSortValue, localTeamStats]);

  const secondColumnValue = useMemo(() => {
    if (!firstColumn) {
      return calculateValue(secondColumnSortValue);
    } else {
      return null;
    }
  }, [secondColumnSortValue, visitorTeamStats]);

  return (
    <BttsAvg
      item
      container
      xs={1}
      justifyContent={"center"}
      alignItems="center"
      sx={{
        maxWidth: "11.1%",
        flexBasis: "11.1%",
        "@media (max-width:600px)": {
          display: "none",
        },
      }}
    >
      <Grid
        item
        container
        className="bttsAndAvg"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className="bttsAndAvgTxt">
          {firstColumn
            ? firstColumnSortValue === "xG (H)"
              ? firstColumnValue
              : `${firstColumnValue} %`
            : secondColumnSortValue === "BTTS"
            ? `${secondColumnValue} %`
            : secondColumnValue}
        </Typography>
      </Grid>
    </BttsAvg>
  );
};

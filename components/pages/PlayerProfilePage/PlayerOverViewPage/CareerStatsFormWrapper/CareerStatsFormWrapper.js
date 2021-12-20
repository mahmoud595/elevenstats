import { memo } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography } from "@mui/material";

const Wrapper = styled(Grid)(() => ({
  "& .wrapperText": {
    fontSize: "12px",
    fontWeight: 600,
    lineHeight: "30px",
    color: "#022A54",
    textTransform: "capitalize",
    whiteSpace: "nowrap",
  },

  "& .wrapperTextHeader": {
    color: "rgba(2, 42, 84, 0.6)",
  },
  "& .wrapperContent": {
    marginTop: "10px",
  },
  "& .wrappervs": {
    fontSize: "10px",
    color: "rgba(2, 42, 84, 0.6)",
    textTransform: "lowercase",
  },
}));

export const CareerStatsFormWrapper = memo(
  ({ header, data, form, fitness, margin }) => {
    return (
      <Wrapper item container direction="column" sx={{ margin }}>
        <Grid
          item
          container
          className="wrapperHeader"
          alignItems="center"
          justifyContent="space-between"
          wrap="nowrap"
        >
          {header.map((value, i) => (
            <Grid item key={i} xs={3} className="careerStatsGrid">
              <Typography
                className="wrapperText wrapperTextHeader"
                sx={{ textAlign: i === 0 ? "left" : "center" }}
              >
                {value}
              </Typography>
            </Grid>
          ))}
        </Grid>

        {data.map((row, i) => (
          <Grid
            item
            container
            className="wrapperContent"
            alignItems="center"
            justifyContent="space-between"
            wrap="nowrap"
            key={i}
          >
            {Object.keys(row).map((value, index) => (
              <Grid item key={index} xs={3}>
                <Typography
                  className="wrapperText"
                  sx={{ textAlign: index === 0 ? "left" : "center" }}
                >
                  {form && index === 0 ? (
                    <>
                      <span className="wrappervs">vs </span>
                      {row[value]}
                    </>
                  ) : fitness && index === 2 ? (
                    <span style={{ color: row[value].color }}>
                      {row[value].text}
                    </span>
                  ) : (
                    `${row[value]}`
                  )}
                </Typography>
              </Grid>
            ))}
          </Grid>
        ))}
      </Wrapper>
    );
  }
);

import { memo } from "react";
import makeStyles from "@mui/styles/makeStyles";
import { Grid, Typography } from "@mui/material";
import { SeasonStats, ShowStats } from "public";
import Link from "next/link";
import { useSelector, shallowEqual } from "react-redux";
import { useRouter } from "next/router";
const useStyles = makeStyles(({ palette }) => ({
  seasonStatsGrid: {
    background: "#fff",
    borderRadius: "12px",
    padding: "8px 4em 8px 1.3em",
    margin: "4em 0 !important",
  },
  iconGrid: {
    padding: 9,
    borderRadius: "10px",
    background: "#E5EDFF",
  },
  showGrid: {
    marginLeft: "2em",
  },
  showText: {
    fontSize: "2em",
    lineHeight: "16px",
    color: "rgba(2, 42, 84, 0.6)",
  },
  showStatsGrid: {
    marginLeft: "1.3em",
    display: "flex",
    alignItems: "center",
    marginTop: "2px",
  },
  linkGrid: {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  },
  linkText: {
    fontSize: "1.8em",
    fontWeight: 600,
    lineHeight: "15px",
    color: "#246BFD",
    whiteSpace: "nowrap",
  },
}));
export const SeasonStatsSwitch = memo(() => {
  const classes = useStyles();
  const { isSeasonStats, slug } = useSelector(({ h2h }) => {
    const {
      isSeasonStats,
      fixture: { slug },
    } = h2h;

    return { isSeasonStats, slug };
  }, shallowEqual);
  const router = useRouter();
  const url = router.asPath.split("/");

  const isSeasonUrl = url[url.length - 1] === "season";
  if (isSeasonStats && !isSeasonUrl) return null;

  return (
    <Grid
      item
      container
      className={classes.seasonStatsGrid}
      wrap="nowrap"
      justifyContent="space-between"
      alignItems="center"
    >
      <Grid item className={classes.iconGrid}>
        <SeasonStats />
      </Grid>
      <Grid item className={classes.showGrid} container>
        <Typography className={classes.showText}>
          {!isSeasonStats
            ? "Showing last 10 stats for Leicester City and Manchester City. Teams have played too few matches this season."
            : "Early season match. Showing season stats."}
        </Typography>
      </Grid>

      <Link
        href={
          isSeasonStats
            ? `/h2h/${encodeURIComponent(slug)}`
            : `/h2h/${encodeURIComponent(slug)}/season`
        }
      >
        <Grid item className={classes.linkGrid}>
          <Grid item>
            <Typography className={classes.linkText}>
              {isSeasonStats ? `Show Last 10 Matches` : `Show Season Stats`}
            </Typography>
          </Grid>
          <Grid item className={classes.showStatsGrid}>
            <ShowStats />
          </Grid>
        </Grid>
      </Link>
    </Grid>
  );
});

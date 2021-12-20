import LinearProgress from "@mui/material/LinearProgress";
import { Grid } from "@mui/material";

export const LinearDeterminate = ({
  width = "100%",
  height,
  borderRadius,
  colorPrimary,
  colorSecondary,
  barRadius,
  value = 50,
}) => {
  // const [progress, setProgress] = React.useState(0);

  // React.useEffect(() => {
  //   const timer = setInterval(() => {
  //     setProgress((oldProgress) => {
  //       if (oldProgress === 100) {
  //         return 0;
  //       }
  //       const diff = Math.random() * 10;
  //       return Math.min(oldProgress + diff, 100);
  //     });
  //   }, 500);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  // console.log(props.value);
  return (
    <Grid
      sx={{
        width,
        "& .linearRoot": {
          height,
          borderRadius,
        },
        "& .barColorPrimary": {
          backgroundColor: colorPrimary,
        },
        "& .colorPrimary": {
          backgroundColor: colorSecondary,
        },
        "& .bar": {
          borderRadius: barRadius,
        },
      }}
    >
      <LinearProgress
        variant="determinate"
        value={value}
        classes={{
          root: "linearRoot",
          barColorPrimary: "barColorPrimary",
          colorPrimary: "colorPrimary",
          bar: "bar",
        }}
      />
    </Grid>
  );
};

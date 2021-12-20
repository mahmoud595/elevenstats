// import { Suspense } from "react";
import dynamic from "next/dynamic";
import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { toggleDialog } from "store/actions/h2hActions";
import Btn from "components/Layout/Btn/Btn";
import { ProfileArrow } from "public/";

const DynamicPastH2hDialog = dynamic(
  () =>
    import("./PastH2hDialog/PastH2hDialog").then((mod) => mod.PastH2hDialog),
  { ssr: false }
);
const Suspense = dynamic(
  import("react").then((mod) => mod.Suspense),
  { ssr: false }
);
const Past = styled(Grid)(({ theme }) => ({
  "& .pastArrow": {
    width: 8,
    height: 4,
    color: "#fff",
    "@media (max-width: 960px)": {
      width: 6,
      height: 4,
    },
  },

  "& .pastText": {
    color: "#FFF",
    fontSize: "1.2rem",
    fontWeight: 600,
    whiteSpace: "nowrap",
    "@media (max-width: 960px)": {
      fontSize: "0.7rem",
    },
  },
}));

export const PastH2h = () => {
  const dispatch = useDispatch();

  let { fixtures, openPastH2hDialog } = useSelector(({ h2h }) => {
    let {
      openPastH2hDialog,

      headToheadStats: { fixtures },
    } = h2h;
    return { fixtures, openPastH2hDialog };
  }, shallowEqual);

  const toggleDialogState = () => {
    dispatch(toggleDialog());
  };

  fixtures?.sort((a, b) => {
    return (
      new Date(b?.time?.startingAt?.date) - new Date(a?.time?.startingAt?.date)
    );
  });

  return (
    <Past>
      <Btn
        textColor="#FFF"
        fullWidth={true}
        margin="0"
        fontSize="1em"
        onClick={toggleDialogState}
      >
        <Grid
          container
          wrap="nowrap"
          alignItems="center"
          justifyContent="space-between"
          spacing={1}
        >
          <Grid item>
            <Typography className="pastText">PAST H2H</Typography>
          </Grid>
          <Grid item>
            <ProfileArrow className="pastArrow" />
          </Grid>
        </Grid>
      </Btn>
      {openPastH2hDialog && (
        <Suspense fallback={`loading`}>
          <DynamicPastH2hDialog toggleDialogState={toggleDialogState} />
        </Suspense>
      )}
    </Past>
  );
};

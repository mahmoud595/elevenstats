import { useState } from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import Head from "next/head";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Script from "next/script";
import theme from "../src/theme";
import { Grid } from "@mui/material";
import wrapper from "../store/store";
import { styled } from "@mui/system";

const NextNprogress = dynamic(import("nextjs-progressbar"), {
  ssr: false,
});

const Suspense = dynamic(
  import("react").then((mod) => mod.Suspense),
  { ssr: false }
);

import { LeftNavBar, NavBar } from "../components";

const DynamicFooter = dynamic(
  () => import("../components").then((mod) => mod.Footer),
  { ssr: false }
);

const MainRoot = styled(Grid)(({}) => ({
  margin: "0 auto",
  // height: "100vh",
  // position: "relative",
  minWidth: 375,

  "@media (min-width:2000px)": {
    width: 1600,
  },
  "& .mainContent": {
    "@media (max-width:600px)": {
      padding: "0 10px",
    },
  },

  "& .navbarContainer": {
    padding: "3.2em 0 0 0",
    marginBottom: "27px",
    "@media (max-width:640px)": {
      padding: "0.5rem 0 10px 0",
      marginBottom: "10px",
    },

    background: "#F6F7FA",
  },
}));

const MyApp = (props) => {
  const { Component, pageProps } = props;
  const [open, setOpen] = useState(false);

  return (
    <>
      <Head>
        {/* <title>My page</title> */}
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <link rel="shortcut icon" href="/logoCollapsed.png" />
      </Head>
      {/* <Script src="/scripts/userback.js" /> */}
      <Script src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1076016577547014" />
      {/* <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1076016577547014"
     crossorigin="anonymous"></script> */}
      <ThemeProvider theme={theme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        {/* <TopProgressBar /> */}
        <Suspense fallback={`loading`}>
          <NextNprogress
            color="#022A54"
            startPosition={0.4}
            stopDelayMs={200}
            height={3}
            showOnShallow={true}
          />
        </Suspense>

        <MainRoot
          item
          container
          wrap="nowrap"
          // className={classes.mainRoot}
          sm={10}
          justifyContent="center"
        >
          <Grid item container direction="column" className="mainContent">
            <Grid item container className="navbarContainer">
              <Grid item container>
                <NavBar />
              </Grid>
            </Grid>

            <Component {...pageProps} />
          </Grid>
        </MainRoot>
        <Grid item>
          <Suspense fallback={`loading`}>
            <DynamicFooter />
          </Suspense>
        </Grid>
        {/* </Grid> */}
      </ThemeProvider>
    </>
  );
};

export default wrapper.withRedux(MyApp);

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};

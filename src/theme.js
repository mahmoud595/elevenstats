import { createTheme } from "@mui/material/styles";

import { red } from "@mui/material/colors";

// Create a theme instance.
let theme = () =>
  createTheme({
    // breakpoints: {
    //   values: {
    //     xs: 0,
    //     sm: 640,
    //     md: 960,
    //     lg: 1280,
    //     xl: 1920,
    //   },
    // },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          "*::-webkit-scrollbar ": {
            width: "5px",
            height: "0.6em",
            "@media (max-width: 960px)": {
              width: "1em",
            },
          },

          "*::-webkit-scrollbar-track ": {
            borderRadius: "5px",
            // background: "#A1B5C9",
            margin: "0.4rem 0",
          },

          "*::-webkit-scrollbar-thumb ": {
            borderRadius: "10px",
            background: "rgba(161, 181, 201, 1)",
            // boxShadow: "inset 0 0 6px rgba(161, 181, 201, 1)",
            " &:hover": {
              // background: "#022A54",
            },
          },
          "*": {
            "scrollbar-width": "thin" /* "auto" or "thin" */,
            // "scrollbar-color":
            //   "rgba(161, 181, 201, 1)" /* scroll thumb and track */,
            // "scrollbar-backgroundColor": "#fff"
          },
        },
      },
    },
    overrides: {
      MuiButton: {
        root: {
          fontSize: "1em",
        },
      },
    },
    palette: {
      primary: {
        main: "#022A54",
      },
      secondary: {
        main: "#A0B0CB",
      },
      error: {
        main: red.A400,
      },
      background: {
        default: "#F6F7FA",
      },
      info: {
        main: "#ADD666",
      },
    },
    typography: {
      //  fontSize: '1rem',
      fontFamily: ["Quicksand"].join(","),
      body2: {
        fontSize: "1.5rem",
        whiteSpace: "nowrap",
        textTransform: "capitalize",

        "@media only screen and (max-width:1440px)": {
          fontSize: "1.4rem",
        },
        "@media (max-width: 1280px)": {
          fontSize: "1.2rem",
          whiteSpace: "normal",
        },
        "@media (max-width: 960px)": {
          fontSize: "1.4rem",
          whiteSpace: "normal",
          fontWeight: "600",
        },
        "@media (max-width: 730px)": {
          fontSize: "1.2rem",
          //whiteSpace: "normal",
        },
      },
      // body font size
      body1: {
        fontSize: "0.7rem",

        // '@media (max-width: 1700px)': {
        //   fontSize: '0.7rem',
        // },
        "@media (max-width: 1600px)": {
          fontSize: "0.6rem",
        },
        "@media (max-width: 600px)": {
          fontSize: "4px",
        },

        fontWeight: "600",
      },
      subtitle1: {
        fontSize: 9,
        fontWeight: 600,
        textTransform: "uppercase",
        whiteSpace: "break-spaces",
      },
      subtitle2: {
        fontSize: "1.2rem",
        fontWeight: "600",
        letterSpacing: "1.25px",
        "@media (max-width: 960px)": {
          fontSize: "1rem",
        },
      },
      h2: undefined,
      h3: {
        fontSize: "1.3rem",
        color: "#FFFFFF",
        // fontWeight: '600',
        "@media (max-width: 1660px)": {
          fontSize: "1.1rem",
        },
        "@media (max-width: 1280px)": {
          fontSize: ".9rem",
        },

        "@media (max-width: 960px)": {
          fontSize: ".6rem",
        },
        "@media (max-width:807px)": {
          fontSize: "0.4rem",
        },
      },
      h5: {
        fontSize: "1.4rem",
        fontWeight: "600",

        "@media only screen and (max-width:1440px)": {
          fontSize: "1.2rem",
        },
        "@media only screen and (max-width:1280px)": {
          fontSize: "1rem",
        },

        "@media (max-width: 960px)": {
          fontSize: "1.1rem",
        },
        "@media (max-width: 730px)": {
          fontSize: "0.8rem",
        },
      },
      h4: {
        fontSize: "1.6rem",
        fontWeight: "400",
        textTransform: "capitalize",

        "@media (max-width: 1660px)": {
          fontSize: "1.4rem",
        },
        "@media (max-width: 1280px)": {
          fontSize: "1.2rem",
        },
        "@media (max-width: 960px)": {
          fontSize: "1.1rem",
        },
        "@media (max-width: 730px)": {
          fontSize: "0.8rem",
        },
      },
      caption: {
        fontSize: "1.2rem",
        fontWeight: "600",
        "@media (max-width: 1280px)": {
          fontSize: "1rem",
        },
        // "@media (max-width: 960px)": {
        //   fontSize: "0.3rem",
        // },
      },
      overline: {
        fontSize: "1.1rem",
        "@media (max-width: 1280px)": {
          fontSize: "0.8rem",
        },
        "@media (max-width: 960px)": {
          fontSize: "0.3rem",
        },
        fontWeight: "600",
      },
    },
  });
theme = theme();
export default theme;

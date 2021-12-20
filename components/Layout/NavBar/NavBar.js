import { Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useRouter } from "next/router";
// import makeStyles from '@mui/styles/makeStyles';
// import Image from "next/image";
import Link from "next/link";
// import { useRouter } from "next/router";
import { Tweet, Pinterest, Youtube, LogoWhiteLarge } from "public";
// import Btn from "components/Btn/Btn";

// import { FeedBackBtn } from "./FeedBackBtn";

const NavBarContainer = styled(Grid)(() => ({
  backgroundColor: "#EFF1F5",
  borderRadius: 50,
  padding: "7px 1em 0 5em",
  "& .logoImage": {
    display: "flex",
    alignItems: "center",
    "&>svg": {
      fill: "#022A54",
      width: 26,
      height: 26,
    },
  },

  "& .logosContainer": {
    cursor: "pointer",
    marginRight: "3.3em",
    display: "flex",
    paddingBottom: "7px",
    justifyContent: "flex-end",
    alignItems: "center",
  },

  "& .textGrid": {
    marginLeft: "1.5em",
  },
  "& .text": {
    fontSize: "2.5em",
    lineHeight: "14px",
    fontWeight: 600,
    color: "#022A54",
    whiteSpace: "nowrap",
  },
  "& .containerGrid": {
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
    paddingBottom: "7px",
  },
  "& .navbarLinks": {
    fontSize: "2em",
    fontWeight: 600,
  },
  "& .pagesLinks": {
    "& > p:not(:first-of-type)": {
      marginLeft: "40px",
      "@media (max-width:600px)": {
        marginLeft: "10px",
      },
    },
    " & > p": {
      cursor: "pointer",
      paddingBottom: "10px",
      "@media (max-width:600px)": {
        paddingBottom: "8px",
      },
    },
  },
}));

const links = [
  { text: "Home", link: "/" },
  { text: "Player Search", link: "/playerSearch" },
  { text: "Player Profile", link: "/playerProfile" },
  { text: "Create Chart", link: "/createChart" },
];
const NavBar = () => {
  // const classes = useStyles();
  const router = useRouter();
  const path = "/" + router.pathname.split("/")[1];

  return (
    <NavBarContainer
      item
      container
      justifyContent="space-between"
      alignItems="center"
      // className={classes.root}
      wrap="nowrap"
    >
      <Link href="/" prefetch={false}>
        <Grid item className="containerGrid">
          <Grid item className="logoImage">
            <LogoWhiteLarge />
          </Grid>

          <Grid item className="textGrid">
            <Typography className="text">Eleven Stats</Typography>
          </Grid>
        </Grid>
      </Link>
      <Grid
        item
        container
        className="pagesLinks"
        justifyContent="center"
        alignItems="center"
        wrap="nowrap"
      >
        {links.map(({ text, link }, i) => (
          <Link href={link} key={i} style={{}} prefetch={false}>
            <Typography
              className="navbarLinks"
              sx={{
                borderBottom:
                  ((i === 0 && path === "/") || path === link) &&
                  "2px solid #022A54",
                color:
                  (i === 0 && path === "/") || path === link
                    ? "#022A54"
                    : "rgba(2, 42, 84, 0.6)",
              }}
            >
              {text}
            </Typography>
          </Link>
        ))}
      </Grid>

      <Grid item className="logosContainer">
        <a href="about:blank" target="_blank">
          <Tweet />
        </a>
      </Grid>

      {/* <FeedBackBtn /> */}
    </NavBarContainer>
  );
};

export default NavBar;

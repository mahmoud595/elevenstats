import { Grid } from "@mui/material";

import { NavItem } from "./NavItem/NavItem";

const navItems = [
  { text: "home", link: "/" },
  { text: "calender", link: "/calender" },
  { text: "fixtures", link: "/scoresFixtures" },
  { text: "standings", link: "#" },
  { text: "lorem", link: "#" },
  { text: "lorem", link: "#" },
];

const Navigation = () => {
  return (
    <Grid
      item
      container
      alignItems="center"
      justifyContent="space-between"
      wrap="nowrap"
    >
      {navItems.map(({ text, link }, index) => (
        <Grid item key={index}>
          <NavItem text={text} link={link} />
        </Grid>
      ))}
    </Grid>
  );
};

export default Navigation;

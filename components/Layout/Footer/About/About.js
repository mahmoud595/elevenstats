import React from "react";
import { LinksContainer } from "../LinksContainer/LinksContainer";

const links = ["Company", "Careers", "Help Center"];
export const About = ({ clicked, setClicked }) => {
  return (
    <LinksContainer
      clicked={clicked}
      setClicked={setClicked}
      title="ABOUT"
      links={links}
      width="50%"
    />
  );
};

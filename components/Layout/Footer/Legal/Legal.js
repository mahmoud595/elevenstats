import React from "react";
import { LinksContainer } from "../LinksContainer/LinksContainer";

const links = ["Privacy Policy", "Terms of Use", "Licenses"];
export const Legal = ({ clicked, setClicked }) => {
  return (
    <LinksContainer
      clicked={clicked}
      setClicked={setClicked}
      links={links}
      title="LEGAL"
      width="50%"
    />
  );
};

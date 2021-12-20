import React from "react";
import { LinksContainer } from "../LinksContainer/LinksContainer";

const links = [
  "Over 2.5 Goals",
  "Over 1.5 Goals",
  "BTTS Stats",
  "Corner Stats",
  "Scored In Both Halves",
  "Correct Score Stats",
];
export const Stats = ({ clicked, setClicked }) => {
  return (
    <LinksContainer
      title="STATS"
      clicked={clicked}
      setClicked={setClicked}
      links={links}
      width="15%"
    />
  );
};

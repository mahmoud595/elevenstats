import { useState } from "react";
import { styled } from "@mui/material/styles";
import { Grid, Typography, ClickAwayListener } from "@mui/material";

import { Btn, Search } from "components";

const colors = [
  { color: "#1BD47B", text: "Green" },
  { color: "#FB5266", text: "Red" },
  { color: "#F6C205", text: "Yellow" },
  { color: "#246BFD", text: "Blue" },
  { color: "#FC7D58", text: "Orange" },
  { color: "#022A54", text: "Black" },
  { color: "#FF00DC", text: "Pink" },
  { color: "#AE5D04", text: "Brown" },
  { color: "#11FFFD", text: "Aqua" },
];
const Color = styled(Grid)(({ theme }) => ({
  position: "relative",
  "& .dropDown": {
    position: "absolute",
    top: "20px",
    right: "-20px",
    zIndex: 2,
    backgroundColor: "#fff",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "8px 8px 100px rgba(2, 42, 84, 0.1)",

    width: "fit-content",
    height: "200px",
    overflowY: "auto",
  },

  "& .itemsContainer": {
    marginTop: "18px",
    "& > button:not(:first-of-type)": {
      marginTop: "26px",
    },
  },
  "& .colorText": {
    fontSize: "12px",
    lineHeight: "16px",
    fontWeight: 600,
    marginLeft: "11px",
    textTransform: "capitalize",
  },
  "& .colorGrid": {
    width: "14px",
    height: "14px",
    borderRadius: "50%",
  },
}));

export const ColorBtn = () => {
  const [open, setOpen] = useState(false);
  const [selectedColor, setSelectedColor] = useState({
    color: "#A1B5C9",
    text: "gray",
  });
  const handleClickAway = () => {
    setOpen(false);
  };
  const handleClick = () => {
    setOpen(true);
  };
  const itemBtnHandler = (color) => {
    setSelectedColor(color);
    setOpen(false);
  };
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Color>
        <Btn
          width="14px"
          height="14px"
          backgroundColor={selectedColor.color}
          padding="0"
          borderRadius="50%"
          margin="0 0 0 40px"
          onClick={handleClick}
        />
        {open ? (
          <Grid
            item
            container
            className="dropDown"
            direction="column"
            wrap="nowrap"
          >
            <Search
              backgroundColor="#F6F7FA"
              padding="6px"
              width="130px"
              title="Search Color"
              marginLeft="14px"
              color="#A1B5C9"
            />
            <Grid item container direction="column" className="itemsContainer">
              {[
                colors.map((color, i) => (
                  <Btn
                    padding="0"
                    key={i}
                    onClick={() => itemBtnHandler(color)}
                  >
                    <Grid
                      item
                      container
                      alignItems="center"
                      sx={{ position: "relative" }}
                    >
                      {selectedColor.color === color.color ? (
                        <Grid
                          item
                          sx={{
                            position: "absolute",
                            left: "-12px",
                            backgroundColor: color.color,
                            bottom: "0",
                            width: "2px",
                            height: "100%",
                          }}
                        ></Grid>
                      ) : (
                        <></>
                      )}
                      <Grid
                        item
                        sx={{ backgroundColor: color.color }}
                        className="colorGrid"
                      ></Grid>
                      <Typography
                        className="colorText"
                        sx={{
                          color:
                            color.color === selectedColor.color
                              ? "#022A54"
                              : "#677F98",
                        }}
                      >
                        {color.text}
                      </Typography>
                    </Grid>
                  </Btn>
                )),
              ]}
            </Grid>
          </Grid>
        ) : (
          <></>
        )}
      </Color>
    </ClickAwayListener>
  );
};

import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";
import { LinearDeterminate } from "components";

const Container = styled(Grid)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "& .text": {
    fontSize: 14,
    fontWeight: 600,
  },
}));

export const RemainingPlayerData = ({
  text = "-",
  color = "rgba(2, 42, 84, 0.6)",
  width = "130px",
  name,
}) => {
  return (
    <Container sx={{ width: name === "age" ? "90px" : width }}>
      {name === "age" ? (
        <Typography sx={{ color }} className="text">
          {text}
        </Typography>
      ) : (
        <>
          <LinearDeterminate
            width="81px"
            height="14px"
            colorPrimary="#1BD47B"
            colorSecondary="#EFF1F5"
          />
          <Typography
            variant="caption"
            color="secondary"
            sx={{ marginLeft: "4px" }}
          >
            {`50%`}
          </Typography>
        </>
      )}
    </Container>
  );
};

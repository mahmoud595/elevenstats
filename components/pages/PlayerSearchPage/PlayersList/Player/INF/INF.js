import { styled } from "@mui/system";
import { Grid, Typography } from "@mui/material";

const INFContainer = styled(Grid)(({}) => ({
  width: 67,
  display: "flex",
}));

const Box = styled(Grid)((props) => ({
  width: 37,
  height: 37,
  borderRadius: 8,
  "& .text": {
    color: "#FFF",
    fontSize: 12,
    fontWeight: 600,
  },
}));

export const Inf = () => {
  return (
    <INFContainer alignItems="center" justifyContent="center">
      <Box
        container
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "#1BD47B",
          boxShadow: "4px 3px 0px 0px rgb(27 212 123 / 39%)",
        }}
      >
        <Typography variant="h4" className="text">
          Loa
        </Typography>
      </Box>
    </INFContainer>
  );
};

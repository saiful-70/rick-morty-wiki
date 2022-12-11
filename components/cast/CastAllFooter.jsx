import { Box, Typography } from "@mui/material";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";

const CastAllFooter = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        mt: 8,
      }}
    >
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1rem", md: "1.6rem" },
          color: "#fff",
          mr: 2,
        }}
      >
        Page
      </Typography>
      <ArrowCircleUpIcon sx={{ transform: "rotate(-90deg)", color: "gray" }} />
      <Box
        sx={{
          display: "flex",
          alignItems: "center",

          background: "linear-gradient(to bottom right,   #9DFE00,#14D9E6)",
          borderRadius: "2rem",
          p: 0.1,
          mx: 1,
        }}
      >
        <input
          placeholder="1"
          value={1}
          style={{
            width: "5rem",
            height: "3rem",
            backgroundColor: "#2a2f3e",
            border: "none",
            borderRadius: "2rem",
            outline: "none",
            textAlign: "center",
            fontWeight: 600,
            color: "#14D9E6",
          }}
        />
      </Box>
      <ArrowCircleRightIcon color="secondary" />
      <Typography
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1rem", md: "1.6rem" },
          color: "#fff",
          ml: 2,
        }}
      >
        of 42
      </Typography>
    </Box>
  );
};
export default CastAllFooter;

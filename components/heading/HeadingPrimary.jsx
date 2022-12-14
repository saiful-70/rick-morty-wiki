import { Typography, Box } from "@mui/material";
import Image from "next/image";

const HeadingPrimary = () => {
  return (
    <Box
      sx={{
        position: "relative",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontStyle: "italic",
          fontWeight: 800,
          position: "relative",
          fontSize: {
            xs: "4.5rem",
            md: "10rem",
          },
        }}
      >
        {/* BUBBLE  */}
        <Box
          sx={{
            position: "absolute",
            height: { xs: "8rem", md: "15rem" },
            width: { xs: "8rem", md: "15rem" },
            display: "flex",
            margin: "0 auto",
            display: "inline-block",
            top: { xs: "-2rem", md: "-5rem" },
            left: { xs: "-4rem", md: "-7.5rem" },
          }}
        >
          <Image alt="Bubble" src="/images/home/bubble.png" fill />
        </Box>
        THE
        {/* Portal */}
        <Box
          component="span"
          sx={{
            position: "relative",
            height: { xs: "5rem", md: "10rem" },
            width: { xs: "6rem", md: "11rem" },
            display: "flex",
            margin: "0 auto",
            display: "inline-block",
          }}
        >
          <Image alt="portal" src="/images/home/portal.png" fill />
        </Box>{" "}
        <Box
          component="span"
          sx={{
            background: `linear-gradient(to right, #52ea7e, #14D9E6)`,
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "normal",
          }}
        >
          RICK &
        </Box>{" "}
        {/* PILL */}
        <Box
          sx={{
            position: "absolute",
            height: "1rem",
            width: "4rem",
            display: "flex",
            margin: "0 auto",
            display: { xs: "none", md: "inline-block" },
            top: "-.5rem",
          }}
        >
          <Image alt="pill" src="/images/home/pill.png" fill />
        </Box>
      </Typography>

      <Typography
        variant="h1"
        sx={{
          color: "white",
          fontStyle: "italic",
          fontWeight: 800,
          fontSize: {
            xs: "4.5rem",
            md: "10rem",
          },
          position: "relative",
        }}
      >
        <Box
          component="span"
          sx={{
            background: `linear-gradient(to right, #9DFE00, #52ea7e)`,
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
            fontStyle: "normal",
          }}
        >
          MORTY
        </Box>{" "}
        <Box component="span" sx={{ color: "white", fontStyle: "italic" }}>
          WIKI
        </Box>
      </Typography>
    </Box>
  );
};
export default HeadingPrimary;

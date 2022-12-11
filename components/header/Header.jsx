import {
  Typography,
  Box,
  Button,
  linearProgressClasses,
  Container,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import SlowMotionVideoIcon from "@mui/icons-material/SlowMotionVideo";
import headerBgImage from "../../public/images/home/Background.png";
import Logo from "../../components/common/Logo";
// import styles from "*.module.css";

const Header = () => {
  return (
    <Container maxWidth="md">
      <Logo />
      <Box
        sx={{
          position: "relative",
          width: { xs: "80%" },
        }}
      >
        {/* PRIMARY HEADING */}
        <Typography
          variant="h1"
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "4.5rem",
              md: "10rem",
            },
            // textAlign: { xs: "left", md: "center" },
            position: "relative",
          }}
        >
          {/* BUBBLE  */}
          <Box
            sx={{
              position: "absolute",
              height: { xs: "8rem", md: "12rem" },
              width: { xs: "8rem", md: "12rem" },
              display: "flex",
              margin: "0 auto",
              display: "inline-block",
              top: { xs: "-2.5rem", md: "-3rem" },
              left: { xs: "-4rem", md: "-6rem" },
            }}
          >
            <Image alt="Bubble" src="/images/home/bubble.png" fill />
          </Box>
          <Box component="span" sx={{ color: "white", fontStyle: "italic" }}>
            THE
          </Box>
          {/* Portal */}
          <Box
            sx={{
              position: "relative",
              height: { xs: "5rem", md: "10rem" },
              width: { xs: "6rem", md: "11rem" },
              display: "flex",
              margin: "0 auto",
              display: "inline-block",
            }}
          >
            <Image alt="logo" src="/images/home/portal.png" fill />
          </Box>{" "}
          <Box
            component="span"
            sx={{
              background: `linear-gradient(to right, #9DFE00, #14D9E6, #9DFE00)`,
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              fontStyle: "normal",
            }}
          >
            RICK & MORTY
          </Box>{" "}
          <Box component="span" sx={{ color: "white", fontStyle: "italic" }}>
            WIKI
          </Box>
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
              right: 0,
            }}
          >
            <Image alt="logo" src="/images/home/pill.png" fill />
          </Box>
          {/* GUN */}
          <Box
            sx={{
              position: "absolute",
              height: { xs: "17rem", md: "25rem" },
              width: { xs: "17rem", md: "22rem" },
              display: "flex",
              margin: "0 auto",
              display: "inline-block",
              top: { xs: "5rem", md: "5rem" },
              right: { xs: "-8.5rem", md: "-18rem" },
            }}
          >
            <Image alt="logo" src="/images/home/Gun.png" fill />
          </Box>
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "center" },
            alignItems: { xs: "flex-start", md: "center" },
            width: { xs: "90%", md: "75%" },
            m: { md: "0 auto" },
          }}
        >
          <Typography
            sx={{
              color: "#14D9E6",
              fontWeight: 600,
              pr: "3rem",
              my: "1rem",
              order: { xs: 1, md: 2 },
              fontSize: "1.1rem",
            }}
          >
            Brilliant but boozy scientist Rick hijacks his fretful teenage
            grandson, Morty, for wild escapades in other worlds and alternate
            dimensions.
          </Typography>

          {/*   HEADER BUTTON */}
          <Typography
            sx={{
              background: "linear-gradient(to right, #9DFE00, #14D9E6)",
              color: "#fff",
              padding: ".5rem 1rem",
              borderRadius: "2rem",
              marginTop: "2rem",
              fontWeight: "bold",
              display: "flex",
              alignItems: "center",
              order: { xs: 2, md: 1 },
              mr: { md: "2rem" },
              cursor: "pointer",
              px: { xs: 3 },
              py: { xs: 1 },
              fontSize: "1.2rem",
              whiteSpace: "nowrap",
            }}
          >
            <SlowMotionVideoIcon sx={{ mr: 1 }} />
            Watch Now
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};
export default Header;

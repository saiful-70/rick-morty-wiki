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
import HeadingPrimary from "../heading/HeadingPrimary";
// import styles from "*.module.css";

const Header = () => {
  return (
    <Container maxWidth="md">
      <Logo />
      <Box
        sx={{
          position: "relative",
          // width: { xs: "80%", md: "100%" },
        }}
      >
        {/* PRIMARY HEADING */}
        <HeadingPrimary />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: { md: "center" },
            alignItems: { xs: "flex-start", md: "center" },
            width: { xs: "75%", md: "70%" },
            m: { md: "2rem auto" },
          }}
        >
          <Typography
            sx={{
              color: "#14D9E6",
              fontWeight: 600,
              pr: { xs: "3rem", md: 0 },
              my: { xs: "2rem", md: 0 },
              order: { xs: 1, md: 2 },
              fontSize: "1rem",
              px: { md: "2rem" },
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
              // marginTop: "2rem",
              fontWeight: 700,
              display: "flex",
              alignItems: "center",
              order: { xs: 2, md: 1 },
              mr: { md: "2rem" },
              cursor: "pointer",
              px: { xs: "2.5rem" },
              py: { xs: "1rem" },
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

import { Box, Typography, CssBaseline, Container } from "@mui/material";
import Head from "next/head";
import Image from "next/image";
import Header from "../components/header/Header";
import styles from "../styles/Home.module.css";
import HomeScrollElement from "../components/common/HomeScrollElement";

export default function Home() {
  return (
    <Box className={styles.background}>
      <CssBaseline />
      <Header />
      <Box className={styles.bottomBackground}>
        <Container maxWidth="xl" sx={{ position: "relative" }}>
          <HomeScrollElement
            title="Meet The Cast"
            link="character"
            boxSize={200}
          />
          <HomeScrollElement title="Episodes" link="episode" boxSize={300} />
          <HomeScrollElement title="Locations" link="location" boxSize={300} />
        </Container>
      </Box>
    </Box>
  );
}

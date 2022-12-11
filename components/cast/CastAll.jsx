import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Logo from "../common/Logo";
import AllCastHeader from "./CastAllHeader";
import styles from "../../styles/Cast.module.css";
import CastAllFooter from "./CastAllFooter";

const AllCast = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    axios
      .get("https://rickandmortyapi.com/api/character")
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setCharacters(data.results);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);
  return (
    <Container maxWidth="xl" className={styles.backgroundCastWeb}>
      <Logo />
      <AllCastHeader />

      <Grid container spacing={3}>
        {characters &&
          characters.map((character) => (
            <Grid item xs={6} md={2} key={character.id}>
              <Box
                sx={{
                  background:
                    "linear-gradient(to bottom right,   #9DFE00,#14D9E6)",
                  width: "100%",
                  height: "100%",
                  borderRadius: ".5rem",
                  clipPath:
                    "polygon(0% 0%, 100% 0, 100% 85%, 70% 100%, 0% 100%)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginRight: "1rem",
                  p: 0.1,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "#2a2f3e",
                    width: "100%",
                    height: "100%",
                    borderRadius: "5px",
                    clipPath:
                      "polygon(0% 0%, 100% 0, 100% 85%, 70% 100%, 0% 100%)",
                  }}
                >
                  <Link href={`/character/${character.id}`}>
                    <Box
                      sx={{
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        padding: "1rem",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          width: "auto",
                          height: { xs: "14rem", md: "14rem" },
                          marginBottom: 1,
                        }}
                      >
                        <Image
                          alt="logo"
                          src={character.image}
                          fill
                        />
                      </Box>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: { xs: "1rem", md: "1.6rem" },
                          fontWeight: 500,
                          textAlign: "left",
                          color: "#fff",
                          mt: 1,
                        }}
                      >
                        {character.name}
                      </Typography>
                    </Box>
                  </Link>
                </Box>
              </Box>
            </Grid>
          ))}
      </Grid>

      <CastAllFooter />
    </Container>
  );
};
export default AllCast;

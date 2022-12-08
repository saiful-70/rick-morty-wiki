import { useState, useEffect } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import ArrowCircleLeftIcon from "@mui/icons-material/ArrowCircleLeft";
import ArrowCircleRightIcon from "@mui/icons-material/ArrowCircleRight";
import ArrowCircleUpIcon from "@mui/icons-material/ArrowCircleUp";
import Logo from "../common/Logo";
import AllCastHeader from "./AllCastHeader";
import styles from "../../styles/Cast.module.css";

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
                  borderRadius: "5px",
                  clipPath:
                    "polygon(0% 0%, 100% 0, 100% 80%, 80% 100%, 0% 100%)",
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
                      "polygon(0% 0%, 100% 0, 100% 80%, 80% 100%, 0% 100%)",
                  }}
                >
                  <Link href={`/character/${character.id}`}>
                    <Box
                      sx={{
                        padding: "1rem",
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        // alignItems: "center",
                        padding: ".5rem",
                      }}
                    >
                      <Box
                        sx={{
                          position: "relative",
                          // height: "8rem",
                          width: "auto",
                          height: { xs: "12rem", md: "14rem" },
                          marginBottom: 1,
                        }}
                      >
                        <Image
                          alt="logo"
                          src={character.image}
                          fill
                          // style={{ postion: "absolute" }}
                        />
                      </Box>
                      <Typography
                        component="p"
                        sx={{
                          fontSize: ".5rem",
                          fontWeight: 600,
                          textAlign: "left",
                          color: "#fff",
                          mt: 1,
                          width: { xs: "12rem", md: "15rem" },
                          wordWrap: "normal",
                          whiteSpace: "nowrap",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
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

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 8,
        }}
      >
        <Typography sx={{ fontWeight: 600, fontSize: 1, color: "#fff", mr: 2 }}>
          Page
        </Typography>
        <ArrowCircleUpIcon
          sx={{ transform: "rotate(-90deg)", color: "gray" }}
        />
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
              width: "4rem",
              height: "2rem",
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
        <Typography sx={{ fontWeight: 600, fontSize: 1, color: "#fff", ml: 2 }}>
          of 42
        </Typography>
      </Box>
    </Container>
  );
};
export default AllCast;

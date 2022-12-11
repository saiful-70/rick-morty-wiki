import Link from "next/link";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import CastDetailsItem from "./CastDetailsItem";
import CastDetailsItemEpisode from "./CastDetailsItemEpisode";
import Logo from "../common/Logo";
import styles from "../../styles/Cast.module.css";

const CastDetails = ({ character }) => {
  return (
    <Container maxWidth="xl" className={styles.backgroundCastDetailsWeb}>
      <Logo />
      <Grid
        container
        sx={{
          alignItems: { xs: "center" },
          justifyContent: { md: "space-around" },
        }}
      >
        <Grid item xs={12} md={5} spacing={4}>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: { xs: "center", md: "flex-end" },

              mb: { xs: 4 },
            }}
          >
            <Box sx={{ display: "grid", placeItems: "center" }}>
              <Typography
                color="secondary"
                align="center"
                sx={{
                  fontStyle: "normal",
                  fontWeight: 600,
                  mb: 2,
                  fontSize: { xs: "2rem", md: "2.5rem" },
                }}
              >
                {character.name}
              </Typography>

              <Box
                sx={{
                  background:
                    "linear-gradient(to bottom right,rgba(20, 216, 230, 0.9), rgba(157, 254, 0, 0.9))",
                  borderRadius: "5px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  p: 0.2,
                }}
              >
                <Box
                  sx={{
                    bgcolor: "rgba(42, 47, 62, 0.95)",

                    borderRadius: "5px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",

                    p: 3,
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      height: { xs: "17rem", md: "20rem" },
                      width: { xs: "17rem", md: "20rem" },
                    }}
                  >
                    <Image
                      alt="logo"
                      src={character.image}
                      fill
                      style={{ borderRadius: "5px" }}
                    />
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Grid>

        <Grid item md={2} sx={{ display: { xs: "none", md: "block" } }}>
          <Divider
            orientation="vertical"
            color="primary"
            sx={{ width: "2px", height: "10rem", margin: "0 auto" }}
          />
        </Grid>

        <Grid xs={12} md={5}>
          <Box sx={{}}>
            <Grid container spacing={1.5}>
              <Grid item xs={4}>
                <CastDetailsItem
                  gridValue={12}
                  icon="/images/cast/Status.png"
                  label="Status"
                  value={character.status}
                />
              </Grid>
              <Grid item xs={4}>
                <CastDetailsItem
                  gridValue={12}
                  icon="/images/cast/Species.png"
                  label="Species"
                  value={character.species}
                />
              </Grid>
              <Grid item xs={4}>
                <CastDetailsItem
                  gridValue={12}
                  icon="/images/cast/Gender.png"
                  label="Gender"
                  value={character.gender}
                />
              </Grid>

              <Grid item xs={12}>
                <CastDetailsItem
                  gridValue={12}
                  icon="/images/cast/origin.png"
                  label="Origin"
                  value={character.origin && character.origin.name}
                />
              </Grid>
              <Grid item xs={12}>
                <CastDetailsItem
                  gridValue={12}
                  icon="/images/cast/Location.png"
                  label="Last Known Location"
                  value={character.location && character.location.name}
                />
              </Grid>
              <Grid item xs={12}>
                {character.episode && (
                  <CastDetailsItemEpisode
                    gridValue={12}
                    icon="/images/cast/Episode.png"
                    label="Episode(s)"
                    episodeLinks={character.episode}
                  />
                )}
              </Grid>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};
export default CastDetails;

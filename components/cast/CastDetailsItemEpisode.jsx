import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";

const CastDetailsItem = ({ icon, label, episodeLinks, gridValue }) => {
  const [episodes, setEpisodes] = useState([]);
  useEffect(() => {
    const epArr = [];
    axios
      .all(episodeLinks.map((ep) => axios.get(ep)))
      .then(
        axios.spread((...responses) => {
          responses.map((el) => {
            epArr.push(el.data.name);
          });
        })
      )
      .then(() => {
        setEpisodes(epArr);
      })
      .catch((err) => console.log(err.message));
  }, [episodeLinks]);

  return (
    <Grid
      item
      xs={gridValue}
      sx={{
        background:
          "linear-gradient(to bottom ,rgba(20, 216, 230, 0.9), rgba(157, 254, 0, 0.9))",
        p: 0.2,
        borderRadius: 0.5,
      }}
    >
      <Box
        sx={{
          bgcolor: "rgba(42, 47, 62, 0.95)",
          borderRadius: 0.5,
          px: 2,
          py: 1,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "1.5rem",
            height: "1.5rem",
          }}
        >
          <Image alt={icon} src={icon} fill style={{ borderRadius: "5px" }} />
        </Box>
        <Typography
          sx={{ fontSize: "1rem", color: "#fff", fontWeight: 500, my: 1 }}
        >
          {label}
        </Typography>
        {episodes && (
          <ul
            style={{
              listStyle: "inside",
              color: "#fff",
              fontWeight: 600,
              fontSize: "2rem",
            }}
          >
            {episodes.slice(0, 5).map((ep) => (
              <li key={ep}>{ep}</li>
            ))}
          </ul>
        )}
      </Box>
    </Grid>
  );
};
export default CastDetailsItem;

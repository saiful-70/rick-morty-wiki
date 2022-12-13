import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";

const HomeScrollElementBox = ({ boxSize, link }) => {
  const [value, setValue] = useState([]);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/${link}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        setValue(data.results);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [link]);

  return (
    <>
      {value &&
        value.map((value) => (
          <Box
            key={value.id}
            sx={{
              background: "linear-gradient(to bottom right,   #9DFE00,#14D9E6)",
              borderRadius: "5px",
              clipPath:
                link === "character"
                  ? "polygon(0% 0%, 100% 0, 100% 85%, 70% 100%, 0% 100%)"
                  : "polygon(0% 0%, 100% 0, 100% 75%, 85% 100%, 0% 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              mr: "20px",
              p: "1px",
              transition: "600ms ease-in-out",
            }}
          >
            {/* Cast */}
            {link === "character" ? (
              <Link href={`/character/${value.id}`}>
                <Box
                  sx={{
                    bgcolor: "#2a2f3e",
                    width: boxSize,
                    height: "auto",
                    borderRadius: "5px",
                    clipPath:
                      "polygon(0% 0%, 100% 0, 100% 85%, 70% 100%, 0% 100%)",
                  }}
                >
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
                        height: `calc(${boxSize} - 3rem)`,
                        mb: 1,
                      }}
                    >
                      <Image alt={value.image} src={value.image} fill />
                    </Box>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: { xs: "1rem", md: "1.6rem" },
                        fontWeight: 500,
                        textAlign: "left",
                        color: "#fff",
                        mt: 1,
                        width: "13rem",
                        wordWrap: "normal",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        overflow: "hidden",
                      }}
                    >
                      {value.name}
                    </Typography>
                  </Box>
                </Box>
              </Link>
            ) : (
              // Episodes and locations
              <Box
                sx={{
                  bgcolor: "#2a2f3e",
                  width: boxSize,
                  height: "auto",
                  borderRadius: "5px",
                  clipPath:
                    "polygon(0% 0%, 100% 0, 100% 75%, 85% 100%, 0% 100%)",
                }}
              >
                <Box
                  sx={{
                    p: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    padding: ".5rem",
                    pl: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontSize: ".5rem",
                      fontWeight: 400,
                      textAlign: "left",
                      color: "#fff",
                      mt: 1,
                      fontSize: "1rem",
                    }}
                  >
                    {link === "episode" ? value.episode : `#${value.id}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: 500,
                      textAlign: "left",
                      color: "#fff",
                      mt: 1,
                      fontSize: "1.6rem",
                      width: "15rem",
                      wordWrap: "normal",
                      whiteSpace: "nowrap",
                      textOverflow: "ellipsis",
                      overflow: "hidden",
                    }}
                  >
                    {value.name}
                  </Typography>
                </Box>
              </Box>
            )}
          </Box>
        ))}
    </>
  );
};
export default HomeScrollElementBox;

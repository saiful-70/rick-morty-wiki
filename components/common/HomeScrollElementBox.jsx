import { useState, useEffect } from "react";
import { Box, Button, Typography } from "@mui/material";
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
              // width: boxWidth,
              // height: boxHeight,
              borderRadius: "5px",
              clipPath:
                link === "character"
                  ? "polygon(0% 0%, 100% 0, 100% 80%, 80% 100%, 0% 100%)"
                  : "polygon(0% 0%, 100% 0, 100% 75%, 90% 100%, 0% 100%)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginRight: "20px",
              p: 0.1,
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
                      "polygon(0% 0%, 100% 0, 100% 80%, 80% 100%, 0% 100%)",
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
                      }}
                    >
                      <Image alt="logo" src={value.image} fill />
                    </Box>
                    <Typography
                      component="p"
                      sx={{
                        fontSize: ".5rem",
                        fontWeight: 500,
                        textAlign: "left",
                        color: "#fff",
                        mt: 1,
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
                    "polygon(0% 0%, 100% 0, 100% 75%, 90% 100%, 0% 100%)",
                }}
              >
                <Box
                  sx={{
                    padding: "1rem",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    // alignItems: "center",
                    padding: ".5rem",
                    pl: 2,
                  }}
                >
                  <Typography
                    component="span"
                    sx={{
                      fontSize: ".5rem",
                      fontWeight: 300,
                      textAlign: "left",
                      color: "#fff",
                      mt: 1,
                      fontSize: ".5rem",
                    }}
                  >
                    {link === "episode" ? value.episode : `#${value.id}`}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: ".5rem",
                      fontWeight: 600,
                      textAlign: "left",
                      color: "#fff",
                      mt: 1,
                      fontSize: "1.6rem",
                      width: "20rem",
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

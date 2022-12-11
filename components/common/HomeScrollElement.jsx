import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { useDraggable } from "react-use-draggable-scroll";
import { Box, Button, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import CastBox from "./CastBox";
import HeadingSecondary from "../heading/HeadingSecondary";
import HomeScrollElementBox from "./HomeScrollElementBox";

const HomeScrollElement = ({ boxSize, title, link }) => {
  let scrl = useRef(null);
  const [scrollX, setscrollX] = useState(0);
  const [scrolEnd, setscrolEnd] = useState(false);

  const { events } = useDraggable(scrl);

  const slide = (shift) => {
    scrl.current.scrollLeft += shift;
    setscrollX(scrollX + shift);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  const scrollCheck = () => {
    setscrollX(scrl.current.scrollLeft);
    if (
      Math.floor(scrl.current.scrollWidth - scrl.current.scrollLeft) <=
      scrl.current.offsetWidth
    ) {
      setscrolEnd(true);
    } else {
      setscrolEnd(false);
    }
  };

  return (
    <Box>
      {/* HEADING */}
      <Box
        sx={{
          marginTop: "3rem",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <HeadingSecondary title={title} />
          {link === "character" && (
            <Box sx={{ ml: 2 }}>
              <ArrowBackIosIcon color="secondary" sx={{ fontSize: "1.5rem" }} />
              <ArrowForwardIosIcon
                color="secondary"
                sx={{ fontSize: "1.5rem" }}
              />
            </Box>
          )}
        </Box>
        {link === "character" && (
          <Link href={link}>
            <Box
              variant="outlined"
              size="small"
              sx={{
                fontWeight: 600,
                borderRadius: ".5rem",
                p: ".5rem 1.5rem",
                border: "1px solid #9DFE00",
                fontSize: "1rem",
                color: "#fff",
                cursor: "pointer",
              }}
            >
              View All
            </Box>
          </Link>
        )}
      </Box>

      <Box
        sx={{
          display: "flex",
          overflow: "hidden",
          postion: "relative",
          alignItems: "center",
        }}
        {...events}
        ref={scrl}
        onScroll={scrollCheck}
      >
        <HomeScrollElementBox boxSize={`${boxSize}px`} link={link} />
        {/* NEXT AND PREVIOUS ICON */}

        {scrollX !== 0 && (
          <Box
            sx={{
              position: "absolute",
              bgcolor: "#fff",
              borderRadius: "100%",
              p: "1.5rem",
              height: "1.5rem",
              width: " 1.5rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              cursor: "pointer",
              left: -5,
              alignSelf: "center",
            }}
            onClick={() => slide(-(boxSize + 21))}
          >
            <ArrowBackIosIcon color="primary" fontSize="small" />
          </Box>
        )}

        {!scrolEnd && (
          <Box
            sx={{
              position: "absolute",
              bgcolor: "#fff",
              borderRadius: "100%",
              p: "1.5rem",
              height: "2rem",
              width: " 2rem",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              right: 0,
              cursor: "pointer",
            }}
            onClick={() => slide(boxSize + 21)}
          >
            <ArrowForwardIosIcon color="primary" fontSize="small" />
          </Box>
        )}
      </Box>
    </Box>
  );
};
export default HomeScrollElement;

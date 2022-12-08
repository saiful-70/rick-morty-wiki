import { useState, useEffect } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  Menu,
  MenuItem,
  Divider,
  ListItem,
  List,
} from "@mui/material";
import Image from "next/image";
import axios from "axios";
import Link from "next/link";
import Logo from "../common/Logo";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";

const AllCastHeader = () => {
  const [isOpen, setisOpen] = useState(false);

  const handleClick = () => {
    setisOpen((prev) => !prev);
  };

  return (
    <Box
      sx={{
        mb: 3,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "2rem", md: "5rem" },
          color: "#fff",
          fontWeight: 600,
          color: "secondary.main",
        }}
      >
        The Cast
      </Typography>
      <Box
        sx={{
          width: { xs: "60%", md: "25rem" },
          // background: "linear-gradient(to bottom right,   #9DFE00,#14D9E6)",
          // borderRadius: "2rem",
          // p: 0.1,
        }}
      >
        <Box
          sx={{
            color: "#fff",
            fontWeight: 600,
            // bgcolor: "secondary.main",
            borderRadius: "1rem",
            display: "flex",
            height: "auto",
            alignItems: "center",
            bgcolor: "#2a2f3e",
            height: "3rem",
            borderRadius: "2rem",
          }}
        >
          <Box
            sx={{
              display: "flex",
              bgcolor: "secondary.main",
              cursor: "pointer",
              display: "flex",
              width: { xs: "60%", md: "50%" },
              position: "relative",
              alignItems: "center",
              height: "100%",
              borderTopLeftRadius: "2rem",
              borderBottomLeftRadius: "2rem",
              pl: 1,
            }}
            onClick={handleClick}
          >
            <Typography sx={{ fontWeight: 600, fontSize: ".5rem" }}>
              Characters
            </Typography>
            {isOpen ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}

            <List
              sx={{
                position: "absolute",
                display: `${isOpen ? "flex" : "none"}`,
                top: "4rem",
                left: 0,
                zIndex: 10,
                bgcolor: "secondary.main",
                width: "100%",
                borderRadius: ".3rem",
                textAlign: "center",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                fontSize: 1,
              }}
              onClick={handleClick}
            >
              <ListItem onClick={handleClick}>Characters</ListItem>
              <Divider />
              <ListItem onClick={handleClick}>Locations</ListItem>
              <Divider />
              <ListItem onClick={handleClick}>Episodes</ListItem>
            </List>
          </Box>
          <Box
            sx={{
              width: "50%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              background: "linear-gradient(to bottom right,   #9DFE00,#14D9E6)",
              borderTopRightRadius: "2rem",
              borderBottomRightRadius: "2rem",
              p: 0.1,
            }}
          >
            <SearchIcon
              sx={{
                fontSize: "2.5rem",
                backgroundColor: "#2a2f3e",
                height: "100%",
                pl: 1,
              }}
            />
            <input
              placeholder="Search"
              style={{
                width: "90%",
                height: "100%",
                backgroundColor: "#2a2f3e",
                border: "none",
                borderTopRightRadius: "2rem",
                borderBottomRightRadius: "2rem",
                outline: "none",
                color: "#fff",
                fontWeight: "500",
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AllCastHeader;

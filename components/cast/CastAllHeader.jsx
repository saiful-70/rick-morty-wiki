import { useState, useEffect } from "react";
import { Box, Typography, Divider, ListItem, List } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import SearchIcon from "@mui/icons-material/Search";
import HeadingSecondary from "../heading/HeadingSecondary";

const AllCastHeader = () => {
  const [isOpen, setisOpen] = useState(false);
  const [filter, setFilter] = useState("Character");

  const handleFilterClick = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
    setisOpen((prev) => !prev);
  };

  const handleClick = (e) => {
    e.preventDefault();
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
      <HeadingSecondary />
      <Box
        sx={{
          width: { xs: "60%", md: "30rem" },
        }}
      >
        <Box
          sx={{
            color: "#fff",
            fontWeight: 600,
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
              width: { xs: "40%", md: "50%" },
              position: "relative",
              alignItems: "center",
              justifyContent: "center",
              height: "100%",
              borderTopLeftRadius: "2rem",
              borderBottomLeftRadius: "2rem",
              textTransform: "capitalize",
            }}
            onClick={handleClick}
          >
            <Typography
              sx={{ fontWeight: 600, fontSize: { xs: "1rem", md: "1.6rem" } }}
            >
              {filter}s
            </Typography>
            {isOpen ? (
              <KeyboardArrowUpIcon fontSize="small" />
            ) : (
              <KeyboardArrowDownIcon fontSize="small" />
            )}

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
                // textAlign: "center",
                flexDirection: "column",
                // alignItems: "center",
                // justifyContent: "center",
                fontSize: { xs: "1rem", md: "1.6rem" },
                fontWeight: 600,
              }}
              onClick={handleClick}
            >
              <ListItem
                component="option"
                value="character"
                onClick={handleFilterClick}
                sx={{ fontWeight: 600 }}
              >
                Characters
              </ListItem>
              <Divider />
              <ListItem
                component="option"
                value="location"
                onClick={handleFilterClick}
                sx={{ fontWeight: 600 }}
              >
                Locations
              </ListItem>
              <Divider />
              <ListItem
                component="option"
                value="episode"
                onClick={handleFilterClick}
                sx={{ fontWeight: 600 }}
              >
                Episodes
              </ListItem>
            </List>
          </Box>
          <Box
            sx={{
              width: { xs: "60%", md: "50%" },
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
                fontSize: "2rem",
                bgcolor: "#2a2f3e",
                height: "100%",
                p: ".5rem",
                width: "auto",
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
                fontSize: { xs: "1rem", md: "1.6rem" },
              }}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
export default AllCastHeader;

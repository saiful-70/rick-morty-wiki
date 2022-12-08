import { useState, useEffect } from "react";
import Image from "next/image";
import axios from "axios";
import { Box, Grid, Typography } from "@mui/material";

const CastDetailsItem = ({ icon, label, value, gridValue }) => {
  return (
    <Grid
      item
      xs={gridValue}
      sx={{
        background:
          "linear-gradient(to bottom ,rgba(20, 216, 230, 0.9), rgba(157, 254, 0, 0.9))",
        p: 0.2,
        borderRadius: 0.5,
        borderRadius: "3px",
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
            // height: "8rem",
            width: "2rem",
            height: "2rem",
          }}
        >
          <Image alt={icon} src={icon} fill style={{ borderRadius: "5px" }} />
        </Box>
        <Typography
          sx={{ fontSize: ".5rem", color: "#fff", fontWeight: 500, my: 1 }}
        >
          {label}
        </Typography>
        {label === "Origin" || label === "Last Known Location" ? (
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Typography
              sx={{ fontWeight: 600, fontSize: "2rem", color: "#fff" }}
            >
              {value}
            </Typography>
            <Box
              sx={{
                position: "relative",
                // height: "8rem",
                width: "1.2rem",
                height: "1.2rem",
              }}
            >
              <Image
                alt="logo"
                src="/images/cast/Redirect.png"
                fill
                style={{ borderRadius: "5px" }}
              />
            </Box>
          </Box>
        ) : (
          <Typography sx={{ fontWeight: 600, fontSize: "2rem", color: "#fff" }}>
            {value}
          </Typography>
        )}
      </Box>
    </Grid>
  );
};
export default CastDetailsItem;

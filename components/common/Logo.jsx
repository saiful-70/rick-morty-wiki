import Link from "next/link";
import Image from "next/image";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";

const Logo = () => {
  return (
    <>
      <Link href="/">
        <Box
          sx={{
            position: "relative",
            height: "3.5rem",
            width: { xs: "18rem", md: "25rem" },
            display: "flex",
            margin: "0 auto",
            overflowX: "hidden",
            px: { md: 5 },
            mb: 5,
          }}
        >
          <Image alt="logo" src="/logo.png" fill />
        </Box>
      </Link>
    </>
  );
};
export default Logo;

import { Typography } from "@mui/material";

const HeadingSecondary = () => {
  return (
    <Typography
      variant="h2"
      sx={{
        fontSize: { xs: "2rem", md: "4rem" },
        color: "#fff",
        fontWeight: 600,
        color: "secondary.main",
      }}
    >
      The Cast
    </Typography>
  );
};
export default HeadingSecondary;

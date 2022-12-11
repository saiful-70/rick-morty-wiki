import { Typography } from "@mui/material";

const HeadingTertiary = ({ title }) => {
  return (
    <Typography
      variant="h3"
      sx={{
        fontSize: { xs: "1.6rem", md: "2rem" },
        color: "#fff",
        fontWeight: 600,
        m: 0,
      }}
    >
      {title}
    </Typography>
  );
};
export default HeadingTertiary;

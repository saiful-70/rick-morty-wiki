import { Typography } from "@mui/material";
const HeadingSecondary = ({ title }) => {
  return (
    <Typography
      variant="h3"
      sx={{ fontSize: "1.6rem", color: "#fff", fontWeight: 600, m: 0 }}
    >
      {title}
    </Typography>
  );
};
export default HeadingSecondary;

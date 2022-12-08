import { Typography } from "@mui/material";
const HeadingSecondary = ({ title }) => {
  return (
    <Typography sx={{ fontSize: "2rem", color: "#fff", fontWeight: 600, m: 0 }}>
      {title}
    </Typography>
  );
};
export default HeadingSecondary;

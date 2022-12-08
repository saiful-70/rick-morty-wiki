import { Box } from "@mui/material";
import AllCast from "../../components/allcast/AllCast";
import styles from "../../styles/Cast.module.css";

const Index = () => {
  return (
    <Box className={styles.backgroundCastWhole}>
      <AllCast />
    </Box>
  );
};
export default Index;

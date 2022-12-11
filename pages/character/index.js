import { Box } from "@mui/material";
import CastAll from "../../components/cast/CastAll";
import styles from "../../styles/Cast.module.css";

const Index = () => {
  return (
    <Box className={styles.backgroundCastWhole}>
      <CastAll />
    </Box>
  );
};
export default Index;

import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import CastDetails from "../../components/cast/CastDetails";
import { Box } from "@mui/material";
import styles from "../../styles/Cast.module.css";

const CharacterDetails = () => {
  const [character, setCharacter] = useState({});
  const router = useRouter();
  const id = router.query.id;

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character/${id}`)
      .then((response) => {
        return response.data;
      })
      .then((data) => {
        // console.log(data);
        setCharacter(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, [id]);
  return (
    <Box className={styles.backgroundCastDetailsWhole}>
      {character && <CastDetails character={character} />}
    </Box>
  );
};
export default CharacterDetails;

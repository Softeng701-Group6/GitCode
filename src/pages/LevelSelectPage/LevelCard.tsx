import { Box, Stack, Typography } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ReactElement, useState } from "react";
import { yellow } from "@mui/material/colors";
import Frame from "../../components/Frame";
import styles from "./LevelCard.module.css";

const starIconStyle = {
  fontSize: 30,
  color: yellow[600]
}

interface Props {
  level: string
  difficulty: string
  tags?: ReactElement[]
  selected: boolean
  onClick: () => void
}

export default function LevelCard({level, difficulty, tags, selected, onClick}: Props) {

  const [starred, setStarred] = useState(false);

  function toggleStarred() {
    setStarred(!starred);
  }

  return (
    <Frame onClick={onClick} className={`${styles.container} ${selected ? styles.selected : ""}`}>
      <Stack direction="row" sx={{
        display: "flex",
        position: "relative",
        alignItems: "center"
      }}>
        <Stack direction="column" spacing={2}>
          <Typography variant="h4" sx={{
            textAlign: "left"
          }}>{level}</Typography>

          <Stack direction="row" alignItems="center">
            <Typography variant="overline" sx={{
              paddingX: 2
            }}>{difficulty}</Typography>

            {tags}
          </Stack>
        </Stack>

        <Box onClick={toggleStarred} sx={{
          position: "absolute",
          right: 0
        }}>{starred ? 
          <StarBorderIcon sx={starIconStyle}/> :
          <StarIcon sx={starIconStyle} />}
        </Box>
        
        
      </Stack>
    </Frame>
  );
}
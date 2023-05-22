import { Box, Card, CardContent, Stack, Typography, styled } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ReactElement, useState } from "react";
import { yellow } from "@mui/material/colors";
import Frame from "../../components/Frame";

const starIconStyle = {
  fontSize: 30,
  color: yellow[600]
}

interface Props {
  level: string
  difficulty: string
  tags?: ReactElement[]
}

export default function LevelCard({level, difficulty, tags}: Props) {

  const [isCompleted, setCompleted] = useState(false);
  const [starred, setStarred] = useState(false);

  function toggleStarred() {
    setStarred(!starred);
  }

  return (
    <Frame sx={{
      marginBottom: 2
    }}>
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
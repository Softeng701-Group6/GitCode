import { Card, CardContent, Stack, Typography, styled } from "@mui/material";
import StarBorderIcon from '@mui/icons-material/StarBorder';
import StarIcon from '@mui/icons-material/Star';
import { ReactElement, useState } from "react";
import { yellow } from "@mui/material/colors";


const CardContentNoPadding = styled(CardContent)(`
  &:last-child {
    padding-bottom: 0;
  }
`);

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
    <Card sx={{
      background: "background.paper",
      borderRadius: 2,
      color: "white",
    }}>
      <CardContentNoPadding sx={{
        padding: "18px !important",
      }}>
        <Stack direction="row" spacing={20} sx={{
          display: "flex",
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

          <div onClick={toggleStarred}>{starred ? 
            <StarBorderIcon sx={starIconStyle}/> :
            <StarIcon sx={starIconStyle} />}
          </div>
          
          
        </Stack>
        
      </CardContentNoPadding>
    </Card>
  );
}
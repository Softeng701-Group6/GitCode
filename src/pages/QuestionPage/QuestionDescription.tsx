import { Button, Stack, Typography } from "@mui/material";
import Frame from "../../components/Frame";
import GreenButton from "../../components/GreenButton/GreenButton";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

interface Props {
  title: string;
  content: string;
  onSubmit: () => void;
}

export default function QuestionDescription({title, content, onSubmit}: Props) {
  return (
    <Frame sx={{
      height: "100%"
    }}>
      <Stack direction="row">
        {/* TODO: replace with ThemeButton */}
        <Button> 
          <ArrowBackIosNewIcon />
        </Button>

        {/* TODO: replace with ToggleButton */}
        <Button>Discussion</Button>
      </Stack>

      <Typography>{title}</Typography>
      <Typography>{content}</Typography>

      <GreenButton onClick={onSubmit}>Submit</GreenButton>
    </Frame>
  );
}
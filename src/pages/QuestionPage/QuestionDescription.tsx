import { Button, Stack, Typography } from "@mui/material";
import Frame from "../../components/Frame";
import GreenButton from "../../components/GreenButton/GreenButton";
import ArrowBack from '@mui/icons-material/ArrowBack';
import { ReactElement } from "react";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import styles from "./QuestionDescription.module.css";

interface Props {
  title: string;
  children?: ReactElement | ReactElement[];
  onSubmit: () => void;
}

export default function QuestionDescription({title, children, onSubmit}: Props) {

  const navigate = useNavigate();

  function alertBack() {
    const confirmBack = confirm("Are you sure you want to leave the workspace? Your changes will be not saved.")
  
    if (confirmBack) {
      navigate(-1);
    }
  }

  return (
    <Frame className={styles["container"]}>
      <Stack direction="row">
        {/* TODO: replace with ThemeButton */}
        <Button onClick={alertBack} sx={{
          background: "#7A4CC5",
          color: "white",
          marginRight: "10px"
        }}> 
          <ArrowBack />
        </Button>

        {/* TODO: replace with ToggleButton */}
        <Button sx={{
          background: grey[700],
          color: grey[200],
          width: "-webkit-fill-available",

          fontWeight: "bold"
        }}>Discussion</Button>
      </Stack>

      <Typography variant="h2" sx={{
        my: 5,
        color: "#7A4CC5",
      }}>{title}</Typography>
      <Stack className={styles["content-container"]} spacing={5}>
        {children}
      </Stack>

      <GreenButton className={styles["submit-button"]} onClick={onSubmit}>Submit</GreenButton>
    </Frame>
  );
}
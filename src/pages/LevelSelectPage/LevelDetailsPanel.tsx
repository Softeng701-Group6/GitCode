import React from "react";
import { useLocation } from "react-router-dom";
import Frame from "../../components/Frame";
import LevelDescription from "../../components/LevelDescription/LevelDescription";
import LevelDiscussion from "../../components/LevelDiscussion/LevelDiscussion";
import { Question } from "../../models/types";
import styles from "./LevelDetailsPanel.module.css";

interface Props {
  question: Question | undefined;
}

export default function LevelDetailsPanel({question}: Props) {

  const location = useLocation();
  const [selected, setSelected] = React.useState(
    location.state?.tab === "discussion" ? false : true
  );
  return (
    <Frame
      sx={{
        height: 1,
      }}
    >
      <div>
        <span>
          <button
            className={selected ? styles.selected : styles.unselected}
            onClick={() => {
              setSelected(true);
            }}
          >
            DESCRIPTION
          </button>
          <button
            className={!selected ? styles.selected : styles.unselected}
            onClick={() => {
              setSelected(false);
            }}
          >
            DISCUSSION
          </button>
        </span>
        {/* Place description/ discussion component here */}
        {selected ? (
          <LevelDescription title="Description" content="Content"/>
        ) : question ? (
          <LevelDiscussion question={question}/>
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </Frame>
  );
}
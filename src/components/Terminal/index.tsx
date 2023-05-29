import { useEffect, useState } from "react";
import { Edge } from "../../models/types";
import { Box, Stack, TextField, Typography } from "@mui/material";
import "./TerminalStyle.css";

interface GraphSetter {
  setNodes: (nodes: string[]) => void;
  setEdges: (edges: Edge[]) => void;
  setRemote: (nodes: Set<string>) => void;
  setHEAD: (head: string) => void;
  nodes: string[];
  edges: Edge[];
  remote: Set<string>;
  HEAD: string;
  isScaffolded: boolean;
  answers: string[];
}

export default function Terminal({
  setNodes,
  setEdges,
  setRemote,
  setHEAD,
  nodes,
  edges,
  remote,
  HEAD,
  isScaffolded,
  answers,
}: GraphSetter) {
  const [command, setCommand] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]); 
  const [commandHistoryColours, setCommandHistoryColours] = useState<string[]>([]); // TODO Need to add a colour for each command
  const [answerLine, setAnswerLine] = useState<number>(0); // TODO Need to add a line for the answer
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  // TODO Need to add a boolean to check if the graph is in scaffolding mode or not 

  //This function will handle the command input and pass it to the graph component
  const handleCommand = (commandInput: string) => {
    console.log(commandInput);
    const commandArray = commandInput.split(" ");
    let isValidCommand = false;

    //Checks if the first word is git
    if (commandArray[0] !== "git") {
      console.log("Invalid command");
      if(isScaffolded){
        setCommandHistoryColours([...commandHistoryColours, "red"]);
      }
    } 

    //Logic to deal with colours
    if(isScaffolded && answerLine < answers.length){
      const answerCommandArray = answers[answerLine].split(" ");
      if(commandArray[0] !== answerCommandArray[0]){
        setCommandHistoryColours([...commandHistoryColours, "red"]);
      } else {
        if(commandArray[1] !== answerCommandArray[1]){
          setCommandHistoryColours([...commandHistoryColours, "red"]);
        } else {
          setCommandHistoryColours([...commandHistoryColours, "green"]);
          setAnswerLine(answerLine + 1);
          isValidCommand = true;
        }
      }
    } else if (isScaffolded && answerLine >= answers.length){
      setCommandHistoryColours([...commandHistoryColours, "red"]);
    }

    //Assuming all checks are passing above, then we can start adding to the graph
    if (commandArray[1] === "commit" && isValidCommand) {
      //TODO What to do with commit message?
      console.log("Committing the graph");
      // Probably gonna be a hash of length 6
      const newNode: string = `${nodes.length + 1}`;
      const newEdge: Edge = { source: `${HEAD}`, target: newNode };

      setNodes([...nodes, newNode]);
      setEdges([...edges, newEdge]);
      setHEAD(newNode);

    } else if (commandArray[1] === "push" && isValidCommand) {
      console.log("Pushing the graph");
      setRemote(new Set(nodes));
    } 
    
  };

  //Whenever command changes
  useEffect(() => {
    if (command !== "") {
      handleCommand(command);
      setCommandHistory([...commandHistory, command]);
      setCommand("");
    }
    setIsSubmitted(false);
    //Will need to render the new line of text
    //Need to scroll down to the bottom of the div
    scrollToBottom();
  }, [isSubmitted]);

  const scrollToBottom = () => {
    messagesEnd?.scrollIntoView({ behavior: "smooth" });
  };

  let messagesEnd: HTMLDivElement | null;

  return (
    <div>
      {/* // The Terminal Container */}
      <Box
        sx={{
          backgroundColor: "#262626",
          border: "1px solid white",
          maxHeight: "90%",
          width: "100%",
        }}
      >
        {/* // The Terminal header, where the text will be shown */}
        <Box
          sx={{
            overflow: "auto",
            minHeight: "400px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#363636",
          }}
        >
          {commandHistory.map((command, index) => {
            if(isScaffolded){
              return <p style={{color: commandHistoryColours[index]}}>C:\GitCode{`>`} {command}</p>;
            } else {
              return <p>C:\GitCode{`>`} {command}</p>;
            }
          })}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              messagesEnd = el;
            }}
          ></div>
        </Box>
        <Stack direction='row' alignItems='center' spacing={2}>
          <Typography sx={{fontFamily: "Cascadia Code, Courier, monospace", padding: '4px 0px 5px 0px', color: 'white'}}>
            C:\GitCode{`>`}
          </Typography>
          <TextField
            variant="standard"
            fullWidth
            value={command}
            inputProps={{
              style: { fontFamily: "Cascadia Code, Courier, monospace", color: 'white' },
            }}
            sx={{
              input: { color: "white", borderColor: "white" },
              fieldset: { borderColor: "white", color: "white" },
              "& .MuiInput-underline:after": { borderColor: "black" },
              "& .MuiFilledInput-underline:after": { borderColor: "black" },
            }}
            onKeyDown={(ev) => {
              if (ev.key === "Enter") {
                setIsSubmitted(true);
              }
            }}
            onChange={(ev) => {
              setCommand(ev.target.value);
            }}
          />
        </Stack>
      </Box>
    </div>
  );
}

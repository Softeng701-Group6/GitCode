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
}: GraphSetter) {
  const [command, setCommand] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]); //Array of strings [command1, command2, command3
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  //This function will handle the command input and pass it to the graph component
  const handleCommand = (commandInput: string) => {
    console.log("Handling the command here");
    console.log(commandInput);

    const commandArray = commandInput.split(" ");

    console.log(commandArray);

    //Need to pass the props through to the parent component
    if (commandArray[0] !== "git") {
      console.log("Invalid command");
      //Nothing will happen if it's an invalid command
    }

    if (commandArray[1] === "commit") {
      //TODO Need to do more checks on the command still
      //TODO What to do with commit message?
      console.log("Committing the graph");
      //TODO Need to name the commit with something reasonable
      // Probably gonna be a hash of length 6
      const newNode: string = `${nodes.length + 1}`;
      const newEdge: Edge = { source: `${HEAD}`, target: newNode };

      setNodes([...nodes, newNode]);
      setEdges([...edges, newEdge]);

      setHEAD(newNode);
    } else if (commandArray[0] === "push") {
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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     const newNode: string = `${nodes.length + 1}`;

  //     const newEdge: Edge = { source: newNode, target: `${nodes.length}` };

  //     console.log(nodes);

  //     setNodes([...nodes, newNode]);
  //     setEdges([...edges, newEdge]);
  //   }, [100000]);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, [setNodes, nodes]);

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
          {commandHistory.map((command) => {
            return <p>C:\GitCode{`>`} {command}</p>;
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
              style: { fontFamily: "Cascadia Code, Courier, monospace" },
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

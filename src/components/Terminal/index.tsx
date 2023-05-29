import { useEffect, useState } from "react";
import { Edge } from "../../models/types";
import { Box, TextField } from "@mui/material";
import "./TerminalStyle.css";

interface GraphSetter {
  setNodes: (nodes: string[]) => void;
  setEdges: (edges: Edge[]) => void;
  setRemote: (nodes: Set<string>) => void;
  setHEAD: (head: string) => void;
  setBranch: (branch: string) => void;
  setBranchHEADS: (map: Map<string, string>) => void;
  nodes: string[];
  edges: Edge[];
  remote: Set<string>;
  HEAD: string;
  branch: string;
  branchHEADS: Map<string, string>;
}

export default function Terminal({
  setNodes,
  setEdges,
  setRemote,
  setHEAD,
  setBranch,
  setBranchHEADS,
  nodes,
  edges,
  remote,
  HEAD,
  branch,
  branchHEADS
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

    switch(commandArray[1]){

      case 'commit':
        const newNode: string = `${nodes.length + 1}`;
        const newEdge: Edge = { source: `${HEAD}`, target: newNode, branch: branch };
  
        setNodes([...nodes, newNode]);
        setEdges([...edges, newEdge]);
  
        setHEAD(newNode);
        setBranchHEADS(new Map(branchHEADS).set(branch, newNode));
        break;
      case 'push':
        setRemote(new Set(nodes));

        break;
      case 'branch':
        const name = commandArray[2];
        setBranchHEADS(new Map(branchHEADS).set(name, HEAD));
        break;
      case 'checkout':
        const branchName = commandArray[2];

        if (branchHEADS.has(branchName)){
          setBranch(branchName);
          setHEAD(branchHEADS.get(branchName)!);
        }

        break;
      case 'pull':
        break;
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
    // <h1>Terminal Component</h1>
      <Box
        sx={{
          backgroundColor: "#262626",
          height: '100%',
          width: "100%",
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* // The Terminal header, where the text will be shown */}
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#363636",
            flexGrow: 1
          }}
        >
          {commandHistory.map((command, index) => {
            return <p key={`command-${index}`}>{command}</p>;
          })}
          <div
            style={{ float: "left", clear: "both" }}
            ref={(el) => {
              messagesEnd = el;
            }}
          ></div>
        </Box>
        <TextField
          variant="standard"
          fullWidth
          value={command}
          inputProps={{
            style: { fontFamily: "Cascadia Code, Courier, monospace" },
          }}
          sx={{
            // input: { color: "white", borderColor: "white" },
            // fieldset: { borderColor: "white", color: "white" },
            // "& .MuiInput-underline:after": { borderColor: "black" },
            // "& .MuiFilledInput-underline:after": { borderColor: "black" },
            flexGrow: 0
          }}
          onKeyDown={(ev) => {
            if (ev.key === "Enter") {
              setIsSubmitted(true);
            }
          }}
          onChange={(ev) => {
            setCommand(ev.target.value);
          }}
        ></TextField>
      </Box>
  );
}

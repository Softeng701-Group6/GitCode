import { useEffect, useState } from "react";
import { Edge } from "../../models/types";
import { Box, Stack, TextField, Typography } from "@mui/material";
import "./TerminalStyle.css";

interface GraphSetter {
  setNodes: (nodes: string[]) => void;
  setEdges: (edges: Edge[]) => void;
  setRemote: (nodes: Set<string>) => void;
  setHEAD: (head: string) => void;
  setBranch: (branch: string) => void;
  setBranchHEADS: (map: Map<string, string>) => void;
  setBranchNodes: (map: Map<string, string[]>) => void;
  nodes: string[];
  edges: Edge[];
  remote: Set<string>;
  HEAD: string;
  isScaffolded: boolean;
  answers: string[];
  initialCommands: string[];
  branch: string;
  branchHEADS: Map<string, string>;
  branchNodes: Map<string, string[]>;
  goalNodes: string[];
  goalEdges: Edge[];
}

export default function Terminal({
  setNodes,
  setEdges,
  setRemote,
  setHEAD,
  setBranch,
  setBranchHEADS,
  setBranchNodes,
  nodes,
  edges,
  remote,
  HEAD,
  isScaffolded,
  answers,
  initialCommands,
  branch,
  branchHEADS,
  branchNodes,
  goalNodes,
  goalEdges
}: GraphSetter) {
  const [command, setCommand] = useState<string>("");
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [commandHistoryColours, setCommandHistoryColours] = useState<string[]>(
    []
  ); // TODO Need to add a colour for each command
  const [answerLine, setAnswerLine] = useState<number>(0); // TODO Need to add a line for the answer
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  // This assumes that the user won't switch between modes in the middle of a question

  //This function will handle the command input and pass it to the graph component
  const handleCommand = (commandInput: string) => {
    console.log(commandInput);
    const commandArray = commandInput.split(" ");
    let isValidCommand = isScaffolded ? false : true;

    //Checks if the first word is git
    if (commandArray[0] !== "git") {
      console.log("Invalid command");
      if (isScaffolded) {
        setCommandHistoryColours([...commandHistoryColours, "red"]);
      }
    }

      const containsEdge = (edges: Edge[], edge: Edge) => {
        return edges.some(elem =>{
          return JSON.stringify(edge) === JSON.stringify(elem);
        })
      }

      const sourceNum = (edges: Edge[], edge: Edge) => {
        let sourceNum = 0;
        edges.forEach(elm => {
          if (elm.target == edge.target)
            sourceNum++;
        });
        return sourceNum;
      }

      switch (commandArray[1]) {
        case "commit":
          const newNode: string = `${nodes.length + 1}`;
          const newEdge: Edge = {
            source: `${HEAD}`,
            target: newNode,
            branch: branch,
          };

          if ((!goalNodes.includes(newNode) || !containsEdge(goalEdges, newEdge) || !(sourceNum(goalEdges, newEdge) <= 1))){
            setCommandHistoryColours([...commandHistoryColours, "red"]);
            if (isScaffolded) break;
          } else {
            setCommandHistoryColours([...commandHistoryColours, "green"]);
          }

          setNodes([...nodes, newNode]);
          setEdges([...edges, newEdge]);

          setHEAD(newNode);

          if (branch == 'HEADLESS')
            break;
          
          setBranchHEADS(new Map(branchHEADS).set(branch, newNode));

          const newBranchNodes = new Map<string, string[]>(branchNodes);
          newBranchNodes.get(branch)?.push(newNode);
          setBranchNodes(newBranchNodes);
          break;
        case "push":
          if (branch == 'HEADLESS'){
            setCommandHistoryColours([...commandHistoryColours, "red"]);
            if (isScaffolded) break;
          } else{
            setCommandHistoryColours([...commandHistoryColours, 'green']);
          }

          setRemote(new Set([...remote, ...branchNodes.get(branch)!]));
          break;
        case "branch":          
          const name = commandArray[2];

          if ((goalEdges.find(edge => edge.branch == name) == null)){
            setCommandHistoryColours([...commandHistoryColours, "red"]);
            if (isScaffolded) break;
          } else {
            setCommandHistoryColours([...commandHistoryColours, "green"]);
          }

          setBranchHEADS(new Map(branchHEADS).set(name, HEAD));
          setBranchNodes(new Map(branchNodes).set(name, [...branchNodes.get(branch) || []]));
          break;
        case "checkout":
          const branchName = commandArray[2];

          setCommandHistoryColours([...commandHistoryColours, "green"]);

          if (branchHEADS.has(branchName)) {
            setBranch(branchName);
            setHEAD(branchHEADS.get(branchName)!);
          }
          
          if (nodes.includes(branchName)) {
            setHEAD(branchName);
            setBranch("HEADLESS");
          }

          break;
        case "merge":
          const branchToMerge = commandArray[2];
          
          if (branchHEADS.has(branchToMerge)) {
            const newNode: string = `${nodes.length + 1}`;
            const newEdge: Edge = {
              source: `${HEAD}`,
              target: newNode,
              branch: branch,
            };
            const newEdgeOther: Edge = {
              source: `${branchHEADS.get(branchToMerge)}`,
              target: newNode,
              branch: branchToMerge,
            };
            
            if ((!goalNodes.includes(newNode) ||  !containsEdge(goalEdges, newEdge) || !containsEdge(goalEdges, newEdgeOther))){
              setCommandHistoryColours([...commandHistoryColours, "red"]);
              if (isScaffolded) break;
            } else{
              setCommandHistoryColours([...commandHistoryColours, "green"]);
            }

            setNodes([...nodes, newNode]);
            setEdges([...edges, newEdgeOther, newEdge]);

            setHEAD(newNode);
            setBranchHEADS(new Map(branchHEADS).set(branch, newNode));
            setBranchHEADS(new Map(branchHEADS).set(branchToMerge, newNode));

            const newBranchNodes = new Map<string, string[]>(branchNodes);
            newBranchNodes.get(branch)?.push(newNode);
            newBranchNodes.get(branchToMerge)?.push(newNode);
            setBranchNodes(newBranchNodes);
          } else {
            setCommandHistoryColours([...commandHistoryColours, "red"]);
          }
          break;

          default:
            setCommandHistoryColours([...commandHistoryColours, "red"]);
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
    <Box
      sx={{
        backgroundColor: "#262626",
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* // The Terminal header, where the text will be shown */}
      <Box
        sx={{
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          backgroundColor: "#363636",
          flexGrow: 1,
        }}
      >
        {initialCommands.map((command, index) => {
          return (
            <p
              key={`initial-command-${index}`}
              style={{ color: "white" }}
            >
              C:\GitCode{`>`} {command}
            </p>
          );
        })
        }
        {commandHistory.map((command, index) => {
          if (isScaffolded) {
            return (
              <p
                key={`command-${index}`}
                style={{ color: commandHistoryColours[index] }}
              >
                C:\GitCode{`>`} {command}
              </p>
            );
          } else {
            return (
              <p key={`command-${index}`}>
                C:\GitCode{`>`} {command}
              </p>
            );
          }
        })}
        <div
          style={{ float: "left", clear: "both" }}
          ref={(el) => {
            messagesEnd = el;
          }}
        ></div>
      </Box>
      <Stack direction="row" alignItems="center" spacing={2}>
        <Typography
          sx={{
            fontFamily: "Cascadia Code, Courier, monospace",
            padding: "4px 0px 5px 0px",
            color: "white",
          }}
        >
          C:\GitCode{`>`}
        </Typography>
        <TextField
          variant="standard"
          fullWidth
          value={command}
          inputProps={{
            style: {
              fontFamily: "Cascadia Code, Courier, monospace",
              color: "white",
            },
          }}
          sx={{
            input: { color: "white", borderColor: "white" },
            fieldset: { borderColor: "white", color: "white" },
            "& .MuiInput-underline:after": { borderColor: "black" },
            "& .MuiFilledInput-underline:after": { borderColor: "black" },
            flexGrow: 0,
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
  );
}

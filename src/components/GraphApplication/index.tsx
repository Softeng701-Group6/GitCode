import GitGraph from "../GitGraph";
import Terminal from "../Terminal";
import { Graph } from "../../models/types";
import { ReactFlowProvider } from "reactflow";

import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { Edge } from "../../models/types";
import HelpBar from "../../HelpBar/HelpBar";

export default function GraphApplication({
  initialGraph,
  goalGraph,
  setComplete,
}: {
  initialGraph: Graph;
  goalGraph: Graph;
  setComplete: (complete: boolean) => void;
}) {
  const { nodes: initialNodes, edges: initialEdges } = initialGraph;
  const { nodes: goalNodes, edges: goalEdges } = goalGraph;

  const [nodes, setNodes] = useState<string[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [remote, setRemote] = useState<Set<string>>(new Set(nodes));
  const [HEAD, setHEAD] = useState<string>("1");

  useEffect(() => {
    if (nodes == goalNodes && edges == goalEdges) {
      setComplete(true);
    }
  }, [nodes]);

  return (
    <Stack sx={{ height: "100%" }}>

      <Box sx={{ height: "50%" }}>
        <ReactFlowProvider>
          <GitGraph nodes={nodes} edges={edges} remote={remote} HEAD={HEAD} />
        </ReactFlowProvider>
      </Box>
      <HelpBar/>
      <Box sx={{ height: "50%" }}>
        <Terminal
          setNodes={setNodes}
          setEdges={setEdges}
          setRemote={setRemote}
          setHEAD={setHEAD}
          nodes={nodes}
          edges={edges}
          HEAD={HEAD}
          remote={remote}
        />
      </Box>
    </Stack>
    
  );
}

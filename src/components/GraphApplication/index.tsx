import GitGraph from "../GitGraph";
import Terminal from "../Terminal";
import { Graph } from "../../models/types";
import { ReactFlowProvider } from "reactflow";

import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { Edge } from "../../models/types";

export default function GraphApplication({
  initialGraph,
  goalGraph,
  scaffoldedData,
  setComplete,
}: {
  initialGraph: Graph;
  goalGraph: Graph;
  scaffoldedData: {isScaffolded: boolean, answers: string[]};
  setComplete: (complete: boolean) => void;
}) {
  const { nodes: initialNodes, edges: initialEdges } = initialGraph;
  const { nodes: goalNodes, edges: goalEdges } = goalGraph;

  const [nodes, setNodes] = useState<string[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [remote, setRemote] = useState<Set<string>>(new Set(nodes));
  const [HEAD, setHEAD] = useState<string>(initialNodes[initialNodes.length - 1]);
  const isScaffolded = scaffoldedData.isScaffolded;


  useEffect(() => {
    if (nodes.length === goalNodes.length && edges.length === goalEdges.length && nodes.every((value, index) => value === goalNodes[index]) && JSON.stringify(edges) === JSON.stringify(goalEdges)) {
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
          isScaffolded={isScaffolded}
          answers={scaffoldedData.answers}
        />
      </Box>
    </Stack>
  );
}

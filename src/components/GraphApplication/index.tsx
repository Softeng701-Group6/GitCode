import GitGraph from "../GitGraph";
import Terminal from "../Terminal";
import { Graph } from "../../models/types";
import { ReactFlowProvider } from "reactflow";

import { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { Node, Edge } from "../../models/types";

export default function GraphApplication({
  initialGraph,
  goalGraph,
  isScaffolded,
  answers,
  setComplete,
}: {
  initialGraph: Graph;
  goalGraph: Graph;
  isScaffolded: boolean; 
  answers: string[];
  setComplete: (complete: boolean) => void;
}) {
  const { nodes: initialNodes, edges: initialEdges } = initialGraph;
  const { nodes: goalNodes, edges: goalEdges } = goalGraph;

  const [nodes, setNodes] = useState<string[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [remote, setRemote] = useState<Set<string>>(new Set(nodes));
  const [HEAD, setHEAD] = useState<string>(initialNodes[initialNodes.length - 1]);
  const scaffolding = false;


  const [branch, setBranch] = useState<string>("main");
  const [branchHEADS, setBranchHEADS] = useState<Map<string, string>>(
    new Map([["main", '1']])
  );
  const [branchNodes, setBranchNodes] = useState<Map<string, string[]>>(
    new Map([
      ['main', ['1']]
    ])
  );
  
  useEffect(() => {
    if (nodes.length === goalNodes.length && edges.length === goalEdges.length && nodes.every((value, index) => value === goalNodes[index]) && JSON.stringify(edges) === JSON.stringify(goalEdges)) {
      setComplete(true);
    } 
  }, [nodes]);

  return (
    <Stack sx={{ height: "100%" }}>
      <Box sx={{ height: "50%" }}>
        <ReactFlowProvider>
          <GitGraph nodes={nodes} edges={edges} remote={remote} HEAD={HEAD} branch={branch}/>
        </ReactFlowProvider>
      </Box>
      <Box sx={{ height: "50%" }}>
        <Terminal
          setNodes={setNodes}
          setEdges={setEdges}
          setRemote={setRemote}
          setHEAD={setHEAD}
          setBranch={setBranch}
          setBranchHEADS={setBranchHEADS}
          setBranchNodes={setBranchNodes}
          nodes={nodes}
          edges={edges}
          HEAD={HEAD}
          remote={remote}
          isScaffolded={scaffolding}
          answers={answers}
          branch={branch}
          branchHEADS={branchHEADS}
          branchNodes={branchNodes}
        />
      </Box>
    </Stack>
  );
}

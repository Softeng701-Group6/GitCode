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
  setComplete,
}: {
  initialGraph: Graph;
  goalGraph: Graph;
  setComplete: (complete: boolean) => void;
}) {
  const { nodes: initialNodes, edges: initialEdges } = initialGraph;
  const { nodes: goalNodes, edges: goalEdges } = goalGraph;

  const [nodes, setNodes] = useState<string[]>(['1']);
  const [edges, setEdges] = useState<Edge[]>([]);
  const [remote, setRemote] = useState<Set<string>>(new Set(['1']));
  const [HEAD, setHEAD] = useState<string>("1");

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
    if (nodes == goalNodes && edges == goalEdges) {
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
          branch={branch}
          branchHEADS={branchHEADS}
          branchNodes={branchNodes}
        />
      </Box>
    </Stack>
  );
}

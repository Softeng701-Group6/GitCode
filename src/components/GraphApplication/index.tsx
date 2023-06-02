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
  answers,
  initialCommands,
  setComplete,
  hints,
}: {
  initialGraph: Graph;
  goalGraph: Graph;
  answers: string[];
  initialCommands: string[];
  setComplete: (complete: boolean) => void;
  hints: string[];
}) {
  const {
    nodes: initialNodes,
    edges: initialEdges,
    headNode: initialHead,
    branch: initialBranch,
    branchHeads: initialBranchHeads,
    remoteNodes: initialRemoteNodes,
    branchNodes: initialBranchNodes,
  } = initialGraph;

  const { nodes: goalNodes, edges: goalEdges } = goalGraph;

  const [nodes, setNodes] = useState<string[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);
  const [remote, setRemote] = useState<Set<string>>(
    new Set(initialRemoteNodes)
  );
  const [HEAD, setHEAD] = useState<string>(initialHead || '1');
  const [scaffolding, setScaffolding] = useState(false);

  const [branch, setBranch] = useState<string>(initialBranch || 'main');
  const [branchHEADS, setBranchHEADS] = useState<Map<string, string>>(
    initialBranchHeads || new Map([['main', '1']])
  );
  const [branchNodes, setBranchNodes] = useState<Map<string, string[]>>(
    initialBranchNodes || new Map([['main', ['1']]])
  );

  const onToggle = (checked: boolean) => {
    setScaffolding(checked);
  };


  console.log(branchHEADS)
  useEffect(() => {
    if (
      nodes.length === goalNodes.length &&
      edges.length === goalEdges.length &&
      nodes.every((value, index) => value === goalNodes[index]) &&
      JSON.stringify(edges) === JSON.stringify(goalEdges)
    ) {
      setComplete(true);
    }
  }, [nodes]);

  return (
    <Stack sx={{ height: "100%" }}>
      <Box sx={{ height: "50%" }}>
        <ReactFlowProvider>
          <GitGraph
            nodes={nodes}
            edges={edges}
            remote={remote}
            HEAD={HEAD}
            branch={branch}
            branchHEADS={branchHEADS}
          />
        </ReactFlowProvider>
      </Box>
      <HelpBar onToggle={onToggle} hints={hints} />
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
          initialCommands={initialCommands}
          branch={branch}
          branchHEADS={branchHEADS}
          branchNodes={branchNodes}
          goalNodes={goalNodes}
          goalEdges={goalEdges}
        />
      </Box>
    </Stack>
  );
}

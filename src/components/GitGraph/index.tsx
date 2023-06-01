import { useEffect } from "react";
import ReactFlow, {
  Node,
  Background,
  Edge,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "reactflow";

import { Edge as FirebaseEdge } from "../../models/types";

import "reactflow/dist/style.css";

import { getLayoutedElements } from "./Layout.ts";
import RoundCustomNode from "./RoundCustomNode";
import { Box } from "@mui/material";

const nodeTypes = {
  circle: RoundCustomNode,
};

interface GraphState {
  nodes: string[];
  edges: FirebaseEdge[];
  remote: Set<string>;
  HEAD: string;
  branch: string;
  branchHEADS: Map<string, string>;
}

const GitGraph = ({ nodes, edges, remote, HEAD, branch, branchHEADS }: GraphState) => {
  const [UINodes, setNodes, onNodesChange] = useNodesState([]);
  const [UIEdges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    const { nodes: flowFormatNodes, edges: flowFormatEdges } =
      convertToFlowFormat(nodes, edges);
    const { nodes: layoutNodes, edges: layoutEdges } = getLayoutedElements(
      flowFormatNodes,
      flowFormatEdges,
      "LR"
    );

    setNodes([...layoutNodes]);
    setEdges([...layoutEdges]);
  }, [nodes, edges, remote, HEAD, branch]);

  useEffect(() => {
    reactFlowInstance.fitView();
  }, [UINodes]);

  const convertToFlowFormat = (
    nodesInput: string[],
    edgesInput: FirebaseEdge[]
  ) => {
    // Convert nodes
    const nodes: Node[] = nodesInput.map((nodeId) => ({
      id: nodeId,
      data: {
        label: nodeId === HEAD ? "HEAD" : `${nodeId}`,
        color: remote.has(nodeId)
          ? "#A610BD"
          : nodeId === HEAD
          ? "#326b23"
          : null,
        branch: nodeId === HEAD ? branch : null,
      },
      position: { x: 1, y: 1 },

      type: "circle",
    }));

    // Convert edges
    const edges: Edge[] = edgesInput.map((edge, index) => ({
      ...edge,
      id: `e${edge.source}-${edge.target}`,
      animated: edge.branch === branch,
    }));

    return { nodes, edges };
  };

  return (
    <ReactFlow
      nodes={UINodes}
      edges={UIEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      nodeTypes={nodeTypes}
      fitView
      panOnDrag={false}
      panOnScroll={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
    >
      <Background />
      <Box color="#7A4CC5" fontWeight="bold">
        Branches: 
      </Box>
      <Box>
        {Array.from(branchHEADS.keys()).map((b, i) => (<Box key={`branch-table-${i}`} fontWeight={ b === branch ? 'bold' : '300'} color={'white'}>{b}</Box>))}
      </Box>
    </ReactFlow>
  );
};

export default GitGraph;

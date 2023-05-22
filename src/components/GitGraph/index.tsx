import { useCallback, useEffect } from "react";
import ReactFlow, {
  Node,
  addEdge,
  Background,
  Edge,
  Connection,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from "reactflow";

import { Edge as EdgeState } from "../../models/types.ts";

import "reactflow/dist/style.css";

import CustomNode from "./CustomNode.tsx";
import { initialEdges, initialNodes } from "./initial-nodes-edges.js";
import { getLayoutedElements } from "./Layout.ts";

const nodeTypes = {
  custom: CustomNode,
};

interface GraphState {
  nodes: string[];
  edges: EdgeState[];
  remote: string[];
  HEAD: string;
}

const GitGraph = ({nodes, edges, remote, HEAD}: GraphState) => {

  const [UINodes, setNodes, onNodesChange] = useNodesState([]);
  const [UIEdges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowInstance = useReactFlow();

  useEffect(() => {
    const { nodes: layoutNodes, edges: layoutEdges } = getLayoutedElements(
      initialNodes,
      initialEdges,
      "LR"
    );

    setNodes([...layoutNodes]);
    setEdges([...layoutEdges]);
  }, []);

  useEffect(() => {
    reactFlowInstance.fitView();
  }, [UINodes]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const addNode = () => {
    const newNodeId = `new-node-${UINodes.length + 1}`;
    const newNode: Node = {
      id: newNodeId,
      type: "default",
      data: { label: `Node ${UINodes.length + 1}` },
      position: { x: 200, y: 200 },
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <ReactFlow
      nodes={UINodes}
      edges={UIEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
    >
      <Background />
    </ReactFlow>
  );
};

export default GitGraph;

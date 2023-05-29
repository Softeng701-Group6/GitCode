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

import { Edge as FirebaseEdge } from "../../models/types";

import "reactflow/dist/style.css";

import { getLayoutedElements } from "./Layout.ts";
import CommitNode from "./CommitNode.tsx";
import RoundCustomNode from "./RoundCustomNode";

const nodeTypes = {
  circle: RoundCustomNode
};

interface GraphState {
  nodes: string[];
  edges: FirebaseEdge[];
  remote: Set<string>;
  HEAD: string;
}

const GitGraph = ({ nodes, edges, remote, HEAD }: GraphState) => {
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
  }, [nodes, edges, remote, HEAD]);

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

  const convertToFlowFormat = (nodesInput: string[], edgesInput: FirebaseEdge[]) => {
    // Convert nodes
    const nodes: Node[] = nodesInput.map(nodeId => ({
      id: nodeId,
      data: { label: nodeId===HEAD?"HEAD":`Node ${nodeId}`, color: remote.has(nodeId)?"#A610BD":null },
      position: { x: 1, y: 1 },
      type: "circle"
    }));
  
    // Convert edges
    const edges: Edge[] = edgesInput.map((edge, index) => ({
      ...edge,
      id: `e${edge.source}-${edge.target}`,
    }));
  
    return { nodes, edges };
  }

  return (
    <ReactFlow
      nodes={UINodes}
      edges={UIEdges}
      onNodesChange={onNodesChange}
      onEdgesChange={onEdgesChange}
      onConnect={onConnect}
      nodeTypes={nodeTypes}
      fitView
      panOnDrag={false}
      panOnScroll={false}
      zoomOnScroll={false}
      zoomOnPinch={false}
    >
      <Background />
    </ReactFlow>
  );
};

export default GitGraph;

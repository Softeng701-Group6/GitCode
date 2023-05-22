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
  ReactFlowInstance
} from "reactflow";

import "reactflow/dist/style.css";

import CustomNode from "./CustomNode";
import { initialEdges, initialNodes } from "./initial-nodes-edges.js";
import { getLayoutedElements } from "./Layout.tsx";

const nodeTypes = {
  custom: CustomNode
};


const GitGraph = () => {
  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);
  const reactFlowInstance = useReactFlow();

  useEffect(() => {

    const {nodes: layoutNodes, edges: layoutEdges} = getLayoutedElements(
      initialNodes,
      initialEdges,
      'LR'
    );

    setNodes([...layoutNodes]);
    setEdges([...layoutEdges]);
  }, []);

  useEffect(() => {
    reactFlowInstance.fitView();
  }, [nodes]);

  const onConnect = useCallback(
    (params: Edge | Connection) => setEdges((els) => addEdge(params, els)),
    [setEdges]
  );

  const addNode = () => {
    const newNodeId = `new-node-${nodes.length + 1}`;
    const newNode: Node = {
      id: newNodeId,
      type: "default",
      data: { label: `Node ${nodes.length + 1}` },
      position: { x: 200, y: 200 }
    };

    setNodes((prevNodes) => [...prevNodes, newNode]);
  };

  return (
    <ReactFlow
      nodes={nodes}
      edges={edges}
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

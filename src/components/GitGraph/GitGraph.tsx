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

import dagre from 'dagre';

const nodeTypes = {
  custom: CustomNode
};

const dagreGraph = new dagre.graphlib.Graph();
dagreGraph.setDefaultEdgeLabel(() => ({}));

const nodeWidth = 172;
const nodeHeight = 36;

const getLayoutedElements = (nodes: Node[], edges: Edge[], direction = 'TB') => {
  const isHorizontal = direction === 'LR';
  dagreGraph.setGraph({ rankdir: direction });

  nodes.forEach((node: Node) => {
    dagreGraph.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });

  edges.forEach((edge: Edge) => {
    dagreGraph.setEdge(edge.source, edge.target);
  });

  dagre.layout(dagreGraph);

  nodes.forEach((node: Node) => {
    const nodeWithPosition = dagreGraph.node(node.id);
    node.targetPosition = isHorizontal ? 'left' : 'top';
    node.sourcePosition = isHorizontal ? 'right' : 'bottom';

    // We are shifting the dagre node position (anchor=center center) to the top left
    // so it matches the React Flow node anchor point (top left).
    node.position = {
      x: nodeWithPosition.x - nodeWidth / 2,
      y: nodeWithPosition.y - nodeHeight / 2,
    };

    return node;
  });

  return { nodes, edges };
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

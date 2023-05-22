import { Node, Edge } from "reactflow";

const initialNodes: Node[] = [
    {
      id: "1",
      type: "input",
      data: { label: "Node 1" },
      position: { x: 2, y: 5 }
    },
    { id: "2", data: { label: "Node 2" }, position: { x: 1, y: 1 } },
    { id: "3", data: { label: "Node 3" }, position: { x: 1, y: 1 } },
    { id: "4", data: { label: "Node 4" }, position: { x: 1, y: 1 } },
    { id: "5", data: { label: "Node 5" }, position: { x: 1, y: 1 } },
    { id: "6", data: { label: "Node 6" }, position: { x: 1, y: 1 } },
    { id: "7", data: { label: "Node 7" }, position: { x: 1, y: 1 } },
    { id: "8", data: { label: "Node 8" }, position: { x: 1, y: 1 } },
  ];
  
  const initialEdges: Edge[] = [
    { id: "e1-2", source: "1", target: "2", animated: true },
    { id: "e1-3", source: "1", target: "3" },
    { id: "e3-4", source: "3", target: "4" },
    { id: "e4-5", source: "4", target: "5" },
    { id: "e2-6", source: "2", target: "6" },
    { id: "e6-7", source: "6", target: "7" },
    { id: "e5-8", source: "5", target: "8" },
    { id: "e7-5", source: "7", target: "5" }
  ];

export {initialNodes, initialEdges};
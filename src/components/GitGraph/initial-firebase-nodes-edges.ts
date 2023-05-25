import {Edge} from "../../models/types";

const initialNodes: string[] = [
    "1", "2", "3", "4", "5", "6", "7", "8"
  ];
  
  const initialEdges: Edge[] = [
    { source: "1", target: "2" },
    { source: "3", target: "4" },
    { source: "4", target: "5" },
    { source: "2", target: "6" },
    { source: "1", target: "3" },
    { source: "6", target: "7" },
    { source: "5", target: "8" },
    { source: "7", target: "5" }
  ];

export {initialNodes, initialEdges};
import { Box } from "@mui/material";
import GraphApplication from "../../components/GraphApplication";
import { useState } from "react";
import {
  initialEdges,
  initialNodes,
} from "../../components/GitGraph/initial-firebase-nodes-edges";

export default function GraphApplicationTest() {
  const [isComplete, setComplete] = useState(false);

  return (
    <Box sx={{ border: "5px solid white", height: "100vh" }}>
      <GraphApplication
        initialGraph={{ nodes: initialNodes, edges: initialEdges }}
        goalGraph={{ nodes: [], edges: [] }}
        setComplete={setComplete}
      />
    </Box>
  );
}

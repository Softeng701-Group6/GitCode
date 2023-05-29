import { Box } from "@mui/material";
import GraphApplication from "../../components/GraphApplication";
import { useState } from "react";
import {
  initialEdges,
  initialNodes,
} from "../../components/GitGraph/initial-firebase-nodes-edges";
import {
  gitCommitPushNodes,
  gitCommitPushEdges,
  gitCommitPushNodesGoal,
  gitCommitPushEdgesGoal,
  gitCommitPushAnswers
} from "../../components/GitGraph/git-commit-push-nodes-edges";

export default function GraphApplicationTest() {
  const [isComplete, setComplete] = useState(false);

  console.log(gitCommitPushAnswers)
  console.log('here')

  return (
    <Box sx={{ border: "5px solid white", height: "100vh" }}>
      <GraphApplication
        initialGraph={{ nodes: gitCommitPushNodes, edges: gitCommitPushEdges }}
        goalGraph={{ nodes: gitCommitPushNodesGoal, edges: gitCommitPushEdgesGoal }}
        // TODO NEED TO GET SCAFFOLDING VAL
        isScaffolded={true}
        answers={gitCommitPushAnswers}
        setComplete={setComplete}
      />
    </Box>
  );
}

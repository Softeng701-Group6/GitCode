import {Edge} from "../../models/types";

const gitCommitPushNodes: string[] = ["1", "2"];

const gitCommitPushEdges: Edge[] = [
  { source: "1", target: "2" },

];

const gitCommitPushNodesGoal: string[] = ["1", "2", "3"];

const gitCommitPushEdgesGoal: Edge[] = [
  { source: "1", target: "2" },
  { source: "2", target: "3" },

];

const gitCommitPushAnswers: string[] = ["git commit -m 'message'", "git push"];

const gitCommitPushCommandHistory: string[] = ["git init", "git commit -m 'message'"]

export { gitCommitPushNodes, gitCommitPushEdges, gitCommitPushNodesGoal, gitCommitPushEdgesGoal, gitCommitPushAnswers, gitCommitPushCommandHistory };

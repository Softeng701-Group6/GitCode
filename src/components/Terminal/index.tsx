import { Edge } from "../../models/types";

interface GraphSetter {
    setNodes: (nodes: string[]) => void;
    setEdges: (edges: Edge[]) => void;
    setRemote: (nodes: string[]) => void;
    setHEAD: (head: string) => void;
}

export default function Terminal({setNodes, setEdges, setRemote, setHEAD} : GraphSetter) {


    return <h1>Terminal Component</h1>
}
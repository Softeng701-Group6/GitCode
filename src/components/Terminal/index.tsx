import { useEffect } from "react";
import {Edge} from "../../models/types";

interface GraphSetter {
    setNodes: (nodes: string[]) => void;
    setEdges: (edges: Edge[]) => void;
    setRemote: (nodes: string[]) => void;
    setHEAD: (head: string) => void;
    nodes: string[];
    edges: Edge[];
    remote: string[];
    HEAD: string;
}

export default function Terminal({setNodes, setEdges, setRemote, setHEAD, nodes, edges, remote, HEAD} : GraphSetter) {


    useEffect(() => {
        const interval = setInterval(() => {
          const newNode: string = `${nodes.length+1}`;

          const newEdge: Edge = { source: newNode, target: `${(nodes.length)}` }
    
          console.log(nodes);
    
          setNodes([...nodes, newNode]);
          setEdges([...edges, newEdge]);
        }, 3000);

        
    
        return () => {
          clearInterval(interval);
        };
      }, [setNodes, nodes]);
    

    return <h1>Terminal Component</h1>
}
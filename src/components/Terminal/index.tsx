import ReactFlow, {
    Node,
    Edge
  } from "reactflow";
  import { useEffect } from "react";

interface GraphSetter {
    setNodes: (nodes: Node[]) => void;
    setEdges: (edges: Edge[]) => void;
    setRemote: (nodes: string[]) => void;
    setHEAD: (head: string) => void;
    nodes: Node[];
    edges: Edge[];
    remote: String[];
    HEAD: String;
}

export default function Terminal({setNodes, setEdges, setRemote, setHEAD, nodes, edges, remote, HEAD} : GraphSetter) {


    useEffect(() => {
        const interval = setInterval(() => {
          const newNode: Node = {
            id: `${nodes.length+1}`,
            data: { label: `New Node ${nodes.length+1}` },
            position: { x: 0, y: 0 }
          };

          const newEdge: Edge = { id: "e"+ (nodes.length) +"-"+ newNode.id, source: newNode.id, target: `${(nodes.length)}` }
    
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
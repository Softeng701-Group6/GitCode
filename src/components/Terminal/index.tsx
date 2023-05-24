import { useEffect } from "react";
import { Edge } from "../../models/types";

interface GraphSetter {
  setNodes: (nodes: string[]) => void;
  setEdges: (edges: Edge[]) => void;
  setRemote: (nodes: Set<string>) => void;
  setHEAD: (head: string) => void;
  nodes: string[];
  edges: Edge[];
  remote: Set<string>;
  HEAD: string;
}

export default function Terminal({ setNodes, setEdges, setRemote, setHEAD, nodes, edges, remote, HEAD }: GraphSetter) {


  useEffect(() => {
    const interval = setInterval(() => {
      const newNode: string = `${nodes.length + 1}`;

      const newEdge: Edge = { source: newNode, target: `${(nodes.length)}` }

      console.log(nodes);

      setNodes([...nodes, newNode]);
      setEdges([...edges, newEdge]);
      addElementToRemote(newNode);
    }, 3000);



    return () => {
      clearInterval(interval);
    };
  }, [setNodes, nodes]);

  // Add an element to the 'remote' set
  const addElementToRemote = (element: string) => {
    setRemote(prevState => new Set(prevState).add(element));
  };


  return <h1>Terminal Component</h1>
}
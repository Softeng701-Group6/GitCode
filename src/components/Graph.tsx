import createEngine, {
  DefaultLinkModel,
  DefaultNodeModel,
  DiagramModel,
} from "@projectstorm/react-diagrams";

import { CanvasWidget } from "@projectstorm/react-canvas-core";

import styles from "./Graph.module.css";
import { useState } from "react";

interface Inode {
  name: string;
  color: string;
  x: number;
  y: number;
}

const Graph = () => {
  const engine = createEngine();

  const [nodeMetaInfo, setnodeMetaInfo] = useState<Inode[]>([
    { name: 'C1', color: "rgb(0,192,255)", x: 100, y: 100 },
    { name: 'C2', color: "rgb(0,192,255)", x: 300, y: 100 },
    { name: 'C3', color: "rgb(0,192,255)", x: 500, y: 100 },
    { name: 'C4', color: "rgb(0,192,255)", x: 700, y: 100 }
  ])

  const GUInodes: DefaultNodeModel[] = nodeMetaInfo.map(({ name, color, x, y }: Inode) => {
    const node = new DefaultNodeModel({
      name: name,
      color: color,
    });
    node.setPosition(x, y);
    return node;
  })

  const GUIedges: DefaultLinkModel[] = GUInodes.map((node, index, nodes) => {
    const outPort = node.addOutPort('o'); // Unexpected behaviour when ports don't have names

    if (index + 1 >= nodes.length)
      return new DefaultLinkModel(); // TODO: This is really yucky 

    const inPortNext = nodes[index + 1].addInPort('s'); // Unexpected behaviour when ports don't have names
    
    return outPort.link<DefaultLinkModel>(inPortNext);
  });

  GUIedges.pop(); // TODO: This is really yucky - part of the same yuckiness as above

  const model = new DiagramModel();

  model.addAll(...GUInodes, ...GUIedges);
  engine.setModel(model);

  return (
    <CanvasWidget className={styles['widget']} engine={engine} />
  );
};

export default Graph;

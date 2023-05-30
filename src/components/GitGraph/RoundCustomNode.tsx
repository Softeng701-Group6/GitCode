import React from "react";
import { Handle, Position } from "reactflow";

// Define the type for the properties your node component will receive
interface NodeProps {
  data: {
    label: string;
    color: string;
    branch: string;
  };
}

// Define your node component
const RoundCustomNode: React.FC<NodeProps> = ({ data }) => {
  return (
  <div>
      <p style={{textAlign: 'center', position: "absolute", top: '-30px', left: '-100px', width: '250px', }}>{data.branch ? data.branch : ''}</p>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: "50%",
          textAlign: "center",
          backgroundColor: data.color ? data.color : "#1A192B",
          width: "50px",
          height: "50px",
          color: "#FFF",
          border: "1px solid #ddd",
          fontSize: "12px",
        }}
      >
        {data.label}
        <Handle
          type="target"
          position={Position.Left}
          style={{ borderRadius: "50%" }}
        />
        <Handle
          type="source"
          position={Position.Right}
          style={{ borderRadius: "50%" }}
        />
      </div>
    </div>
  );
};

export default RoundCustomNode;

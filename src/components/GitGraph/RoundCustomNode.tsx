import React from 'react';
import { Handle, Position } from 'reactflow';

// Define the type for the properties your node component will receive
interface NodeProps {
  data: {
    label: string;
  };
}

// Define your node component
const RoundCustomNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        backgroundColor: '#1A192B',
        width: '100px',
        height: '100px',
        color: '#FFF',
        border: '1px solid #ddd'
      }}
    >
      {data.label}
      <Handle
        type="target"
        position={Position.Top}
        style={{ borderRadius: '50%' }}
      />
      <Handle
        type="source"
        position={Position.Bottom}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default RoundCustomNode;
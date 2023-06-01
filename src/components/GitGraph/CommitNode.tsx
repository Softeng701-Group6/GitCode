import React from 'react';
import { Handle, Position } from 'reactflow';

// Define the type for the properties your node component will receive
interface NodeProps {
  data: {
    label: string;
  };
}

export const width = 55;
export const height = 55;

// Define your node component
const CommitNode: React.FC<NodeProps> = ({ data }) => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '10%',
        backgroundColor: '#1A192B',
        width: '100px',
        height: '50px',
        color: '#FFF',
        border: '1px solid #ddd'
      }}
    >
      {data.label}
      <Handle
        type="target"
        position={Position.Left}
        style={{ borderRadius: '50%' }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{ borderRadius: '50%' }}
      />
    </div>
  );
};

export default CommitNode;
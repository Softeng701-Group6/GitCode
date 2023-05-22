import GitGraph from "../GitGraph";
import Terminal from "../Terminal";
import { Edge } from '../../models/types';

import { ReactFlowProvider } from "reactflow";

import { useState } from 'react';
import { Box, Stack } from '@mui/material';


export default function GraphApplication() {

    const [nodes, setNodes] = useState<string[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);
    const [remote, setRemote] = useState<string[]>([]);
    const [HEAD, setHEAD] = useState<string>('');


    return (
        <Stack sx={{height: '100%'}}>
            <Box sx={{height: '50%'}}>
                <ReactFlowProvider>
                    <GitGraph nodes={nodes} edges={edges} remote={remote} HEAD={HEAD} />
                </ReactFlowProvider>
            </Box>
            <Box sx={{height: '50%'}}>
                <Terminal setNodes={setNodes} setEdges={setEdges} setRemote={setRemote} setHEAD={setHEAD}/>
            </Box>
        </Stack>
    )
}
import GitGraph from "../GitGraph";
import Terminal from "../Terminal";
import { ReactFlowProvider } from "reactflow";

import { useState } from 'react';
import { Box, Stack } from '@mui/material';
import {Edge} from "../../models/types";
import { initialEdges, initialNodes } from "../GitGraph/initial-firebase-nodes-edges";


export default function GraphApplication() {

    const [nodes, setNodes] = useState<string[]>(initialNodes);
    const [edges, setEdges] = useState<Edge[]>(initialEdges);
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
                <Terminal setNodes={setNodes} setEdges={setEdges} setRemote={setRemote} setHEAD={setHEAD} nodes={nodes} edges={edges} HEAD={HEAD} remote={remote}/>
            </Box>
        </Stack>
    )
}
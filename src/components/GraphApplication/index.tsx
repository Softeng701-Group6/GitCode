import GitGraph from "../GitGraph";
import Terminal from "../Terminal";
import { Edge } from '../../models/types';

import { ReactFlowProvider } from "reactflow";

import { useState } from 'react';
import { Box, Stack } from '@mui/material';


const GraphApplication = () => {

    const [nodes, setNodes] = useState<string[]>([]);
    const [edges, setEdges] = useState<Edge[]>([]);

    const [remote, setRemote] = useState<string[]>([]);

    const [HEAD, setHEAD] = useState<string>('');


    return (
        <Stack>
            <Box>
                <ReactFlowProvider>
                    <GitGraph nodes={nodes} edges={edges} remote={remote} HEAD={HEAD} />
                </ReactFlowProvider>
            </Box>
            <Box>
                <Terminal />
            </Box>
        </Stack>
    )
}
import * as React from 'react';
import { Stack, ToggleButton, ToggleButtonGroup, styled } from "@mui/material";

import './DiscussionBar.module.css'

const StyledToggleButton = styled(ToggleButton)(() => ({
    '& .MuiToggleButton-root' : {
        backgroundColor: '#7A4CC5',
    }
}))

export default function DiscussionBar(){

    const [selected, setSelected] = React.useState<boolean | null>(false);

//   const handleSelected = (
//     event: React.MouseEvent<HTMLElement>,
//     newAlignment: string | null,
//   ) => {
//     setSelected(newAlignment);
//   };

    return(

            <span >
                <button style={{backgroundColor: selected ? '#7A4CC5' : "#3E3E3E"}} onClick={() => {setSelected(true)}}>DESCRIPTION</button>
                <button style={{backgroundColor: !selected ? '#7A4CC5' : "#3E3E3E"}} onClick={() => {setSelected(false)}}>DISCUSSION</button>
            </span >
            // <ToggleButtonGroup
            // value={selected}
            // exclusive
            // onChange={handleSelected}>
            //     <ToggleButton value='Description'>DESCRIPTION</ToggleButton>
            //     <ToggleButton value='Discussion'>DISCUSSION</ToggleButton>
            // </ToggleButtonGroup>
    );
}
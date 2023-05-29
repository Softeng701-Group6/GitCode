import { Switch, SwitchProps, Tooltip, styled, switchClasses } from "@mui/material";
import { useState } from "react";

export default function DirectedModeSwitch() {
    const [checked, setChecked] = useState(false);


    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        setChecked(event.target.checked);
    }

    return(
        <Tooltip title= {checked ? "Restricted mode" : "Free mode"}>
            <Switch sx={{
                borderRadius: 2,
                "& .MuiSwitch-switchBase.Mui-checked": {
                  color: "#7A4CC5"
                },
                "& .MuiSwitch-switchBase.Mui-checked+.MuiSwitch-track": {
                  backgroundColor: '#7A4CC5'
                },

            }} onChange={handleSwitch}/>
        </Tooltip>
        
    )
}
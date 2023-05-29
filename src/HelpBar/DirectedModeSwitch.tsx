import { Switch, Tooltip } from "@mui/material";
import { useState } from "react";

export default function DirectedModeSwitch() {
    const [checked, setChecked] = useState(false);

    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.checked);
        setChecked(event.target.checked);
    }

    return(
        <Tooltip title= {checked ? "Restricted mode" : "Free mode"}>
            <Switch onChange={handleSwitch}/>
        </Tooltip>
        
    )
}
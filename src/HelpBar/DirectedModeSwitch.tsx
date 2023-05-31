import { Switch, Tooltip } from "@mui/material";
import { useState } from "react";

interface helpBarProp {
    onToggle: (checked:boolean) => void
  }

export default function DirectedModeSwitch({onToggle}: helpBarProp) {
    const [checked, setChecked] = useState(false);


    const handleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
        setChecked(event.target.checked);
        onToggle(event.target.checked);
    }

    return(
        <Tooltip title= {checked ? "Correct commands only mode" : "Free mode"}>
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
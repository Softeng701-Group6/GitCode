import { IconButton, Tooltip, TooltipProps, styled, tooltipClasses } from "@mui/material";
import { useState } from "react";
import style from './HintToolTip.module.css'

export default function HintToolTip({hints}:{hints:String[]}) {
    const [hintNum, setHintNum] = useState(0);
    // const hints = ["Once your changes are staged, it's time to commit them. Use the git commit command along with a descriptive commit message to document the purpose and nature of your changes. A well-written commit message is essential for clear communication within a development team.",
    // "After committing your changes locally, it's time to share them with others by pushing the commits to a remote repository. Use the git push command to send your changes to the designated remote repository, allowing others to access and integrate your work.",
    // "If you require further information, check out this git guide provided by Atlassian"]

    const handleClick = () => {
        if(hintNum < hints.length-1){
            setHintNum(hintNum+1);
        } else {
            setHintNum(0);
        }
    }

    const CustomWidthTooltip = styled(({ className, ...props }: TooltipProps) => (
        <Tooltip {...props} classes={{ popper: className }} />
    ))({
        [`& .${tooltipClasses.tooltip}`]: {
            maxWidth: 900,
        },
    });

    function Hint(){
        return(
            <div className={style.innerHint}>
                <h2>Hint {hintNum+1}</h2>
                <h3>{hints[hintNum]}</h3>
                <p>Click to switch hint</p>
            </div>       
        )
    }

    return (
        <CustomWidthTooltip arrow title={<Hint/>} placement="left" >
            <IconButton onClick={handleClick} className={style.hintIcon}>?</IconButton>
        </CustomWidthTooltip>
    )
}
import DirectedModeSwitch from "./DirectedModeSwitch";
import HintToolTip from "./HintToolTip";

interface helpBarProp {
    onToggle: (checked:boolean) => void
  }

export default function HelpBar({onToggle}: helpBarProp){

    return(
        <div style={{position:"absolute", left:"96%", margin:"10px"}}>
            <HintToolTip/>
            <DirectedModeSwitch onToggle={onToggle}/>
        </div>
    )
}
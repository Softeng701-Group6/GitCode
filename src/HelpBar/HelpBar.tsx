import DirectedModeSwitch from "./DirectedModeSwitch";
import HintToolTip from "./HintToolTip";

interface helpBarProp {
    onToggle: (checked:boolean) => void;
    hints: String[];
  }

export default function HelpBar({onToggle, hints}: helpBarProp){

    return(
        <div style={{position:"absolute", left:"96%", margin:"10px"}}>
            <HintToolTip hints={hints}/>
            <DirectedModeSwitch onToggle={onToggle}/>
        </div>
    )
}
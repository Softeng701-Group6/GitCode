import DirectedModeSwitch from "./DirectedModeSwitch";
import HintToolTip from "./HintToolTip";

export default function HelpBar(){

    return(
        <div style={{position:"absolute", left:"96%", margin:"10px"}}>
            <HintToolTip/>
            <DirectedModeSwitch/>
        </div>
    )
}
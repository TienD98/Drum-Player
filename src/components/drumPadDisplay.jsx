import ButtonPlayer from "./drum/buttonPad"

function DrumPadDisplay({onclick}) {
    return(
        <div className="container text-center">
            <div className="row g-3 align-items-center">
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3" click={onclick} ids="Q" icon="fa-solid fa-q fa-2xl" />
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3" click={onclick} ids="W" icon="fa-solid fa-w fa-2xl"/>
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3" click={onclick} ids="E" icon="fa-solid fa-e fa-2xl"/>
            </div>
            <br />
            <div className="row g-3 align-items-center" >    
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3" click={onclick} ids="A" icon="fa-solid fa-a fa-2xl"/>
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3" click={onclick} ids="S" icon="fa-solid fa-s fa-2xl"/>
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3" click={onclick} ids="D" icon="fa-solid fa-d fa-2xl"/>
            </div>
            <br />
            <div className="row g-3 align-items-center">
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3" click={onclick} ids="Z" icon="fa-solid fa-z fa-2xl"/>
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3" click={onclick} ids="X" icon="fa-solid fa-x fa-2xl"/>
                    <ButtonPlayer sound="https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3" click={onclick} ids="C" icon="fa-solid fa-c fa-2xl"/>
            </div>
        </div>
    )
}

export default DrumPadDisplay;
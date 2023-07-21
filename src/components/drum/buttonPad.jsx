function ButtonPlayer({icon, ids, click, sound}) {

    return(
        <div className="col">
            <button onClick={click} id={ids} type="button" className="drum-pad shadow p-4 btn btn-default btn-outline-primary btn-md">
                <i className={icon} style={{color: "#0dcaf0"}}></i>
                <audio>
                    <source src={sound} id={ids} className="clip" type="audio/mp3" />
                </audio>
            </button>
        </div>
    )
}

export default ButtonPlayer;
function displayPad({name}) {
    return(
        <div className="card" id="display">
            <div className="card-header bg-info">
                Name
            </div>
            <div className="card-body bg-info-subtle">
                {name}
            </div>
        </div>
    )
}

export default displayPad;
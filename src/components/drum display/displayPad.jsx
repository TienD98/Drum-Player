function displayPad({name}) {
    return(
        <div className="card" id="display">
            <div className="card-header">
                Name
            </div>
            <div className="card-body">
                {name}
            </div>
        </div>
    )
}

export default displayPad;
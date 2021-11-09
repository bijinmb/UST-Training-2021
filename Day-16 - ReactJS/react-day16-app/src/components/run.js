import React from "react";
import './run.css';

function RunsMade(props) {
   
    return <h1 className="made-run">Scored {props.scored} Runs!</h1>;
}

function NoRunsMade() {
    return <h1 className="made-run">No Runs Made!</h1>;
}

function Run(props) {
    
    const runs = props.isRun;

    if (isNaN(runs))
        return <NoRunsMade />;
    else
        return <RunsMade scored = {runs} />;
}





export default Run;
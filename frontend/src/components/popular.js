import React from "react";
import LocateBoards from "./locateBoards";

function Popular(){
    return(
    <>
    <div className="popTitle">
        Popular Billboards In City
    </div>

    <div className="popSection">
        <LocateBoards len="4" sortID={2} className="popBlock"/>
    </div>

    <div className="popSeeAll">
        <a href="Locate?popular">See all</a>
    </div>

    </>
    );
}

export default Popular;
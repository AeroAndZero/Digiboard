import React from "react";
import LocateBoards from "./locateBoards";

function NearYou(props){
    return(
    <>
        <div className="nyTitle">
            Billboards Near You
        </div>

        <div className="nySection">
            <LocateBoards len="4" sortID={1} className="nyBlock"/>
        </div>

        <div className="nySeeAll">
            <a href="Locate?nearYou">See all</a>
        </div>
    </>
    );
}

export default NearYou;
import React from "react";
import AuctionBoards from "./auctionBoards";

function Auction(){
    return(
    <>
    <div className="auTitle">
        Ongoing Auctions
    </div>

    <div className="auSection">
        <AuctionBoards len="2" className="auBlock"/>
    </div>

    <div className="auSeeAll">
        <a href="Auction">See All</a>
    </div>
    </>
    );
}

export default Auction;
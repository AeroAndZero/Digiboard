import React from "react";
import './auctions.css';
import AuctionBoards from "./components/auctionBoards";

function Auctions(){
    return(
    <div className="auctionContainer">
        <div className="sortBox">
            {/* Location */}
            <div>
                <h2>Sort By Location ▼</h2>
                <hr noshade="noshade"/>
                <div>
                    <input type="radio" name="auRelevance" value="new" checked/>
                    Just listed
                </div>
                <div>
                    <input type="radio" name="auRelevance" value="trending" />
                    Trending
                </div>
            </div>

        </div>

        <div className="result">
            <div className="resultGridAuction">
                <AuctionBoards len="2" className="auGrid"/>
            </div>
        </div>
    </div>
    );
}

export default Auctions;
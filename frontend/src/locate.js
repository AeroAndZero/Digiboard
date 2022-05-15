import React, {useEffect, useState} from "react";
import './locate.css';
import LocateBoards from "./components/locateBoards";

function Locate(){

    const [sortID, setSortID] = useState(1);
    const [rank, setRank] = useState(3);

    useEffect(() => {
        let sortString = window.location.href.split("?")[1];
        if(sortString === "popular"){
            document.getElementById("popRadio").click();
        }

        if(sortString === "nearYou"){
            document.getElementById("nyRadio").click();
        }

        if(window.location.href.split("?").length <= 1){
            document.getElementById("allRadio").click();
        }

    },[])

    return(
    <div className="locateContainer">
        <div className="sortBox">
            {/* Location */}
            <div>
                <h2>Sort By Location ▼</h2>
                <hr noshade="noshade"/>
                <div>
                    <input type="radio" name="sortLocation" id="nyRadio" value="ny" onClick={() => {setSortID(1)}}/>
                    Near You
                </div>
                <div>
                    <input type="radio" name="sortLocation" id="popRadio" value="pop" onClick={() => {setSortID(2)}}/>
                    Popular
                </div>
                <div>
                    <input type="radio" name="sortLocation" id="allRadio" value="all" onClick={() => {setSortID(3)}}/>
                    All
                </div>
            </div>

            {/* Price */}
            <div>
                <h2>Sort By Price ▼</h2>
                <hr noshade="noshade"/>
                <div>
                    <input type="radio" name="sortPrice" value="l2h" onClick={() => {setRank(1);}} />
                    Lowest To Highest
                </div>
                <div>
                    <input type="radio" name="sortPrice" value="h2l" onClick={() => {setRank(2)}} />
                    Highest To Lowest
                </div>
            </div>

            {/* Size */}
            <div>
                <h2>Sort By Price ▼</h2>
                <hr noshade="noshade"/>
                <div>
                    <input type="radio" name="sortSize" value="5to20" />
                    5-20 square feet
                </div>
                <div>
                    <input type="radio" name="sortSize" value="20p" />
                    20+ square feet
                </div>
            </div>
        </div>

        <div className="result">
            <div className="resultGrid">
                <LocateBoards len="24" sortID={sortID} rank={rank} className="nyGrid" />
            </div>
        </div>
    </div>
    );
}

export default Locate;
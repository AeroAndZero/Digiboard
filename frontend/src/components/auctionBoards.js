import axios from "axios";
import React,{useEffect, useState} from "react";

function AuctionBoards(props){
    const [auctionBoards, setAuctionBoards] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:3001/Auction').then(res => {
            setAuctionBoards(res.data);
        })
    },[])

    let renderBoards = [];

    //const [time, setTime] = useState(10*60);
    let time = 10*60 - 30;
    let timeString = "9:30";
    let timeElements = document.getElementsByClassName("countdown");

    function countdown(){
        if(time>0){time -= 1;
        let min = Math.floor(time / 60);
        let sec = time - (min*60);

        timeString = `${min}:${sec}`;

        console.log(time);


        for(let i = 0; i < timeElements.length; i++){
            timeElements[i].innerHTML = timeString;
        }}
    }

    setInterval(countdown,1000);

    for(let i = 0; i < Math.min(auctionBoards.length, props.len); i++){
        renderBoards.push(
            <div className={props.className} key={auctionBoards.id}>
                <div className="thumbnail">
                <img src={"/img/boards/" + auctionBoards[i].imguri} alt="board_image"/>
                </div>
                <div className="info">
                    <div className="name">
                        <div className="area">
                            {auctionBoards[i].area}
                        </div>
                        <div className="company">
                            {auctionBoards[i].agency}
                        </div>
                    </div>
                    <div className="price">
                        <div className="timer">
                        Time left :<br/>
                        <span className="countdown">{timeString}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    return(renderBoards);
}

export default AuctionBoards;
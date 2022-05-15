import React, { useEffect, useState } from "react";
import axios from 'axios';

function viewProduct(id){
    window.location.href = "/Product?id="+id;
}

function rankData(by, data){
    // sorting
    if(by === 1){
        data.sort(function(a,b){
            return parseInt(a.price) - parseInt(b.price);
        })
    }

    else if(by === 2){
        data.sort(function(a,b){
            return parseInt(b.price) - parseInt(a.price);
        })
    }

    return data;
}

function LocateBoards(props){
    const [boards, setBoards] = useState([]);
    useEffect(() => {
        renderBoards = [];
        
        // Sorrting by id
        if(props.sortID === 1){
            axios.get("http://localhost:3001/Locate/nearYou/380054").then(res => {
                console.log(res.data);
                rankData(props.rank, res.data);
                setBoards(res.data);
            })
        }

        if(props.sortID === 2){
            axios.get("http://localhost:3001/Locate/Popular").then(res => {
                console.log(res.data);
                rankData(props.rank, res.data);
                setBoards(res.data);
            })
        }

        if(props.sortID === 3){
            axios.get("http://localhost:3001/Locate").then(res => {
                console.log(res.data);
                rankData(props.rank, res.data);
                setBoards(res.data);
            })
        }

    },[props.sortID, props.rank]);

    let renderBoards = [];

    for(let i = 0; i < Math.min(boards.length, props.len); i++){
        renderBoards.push(
            <div className={props.className} key={boards[i].id} onClick={() => {viewProduct(boards[i].id)}}>
                <div className="thumbnail">
                    <img src={"/img/boards/" + boards[i].imguri} alt="board_image"/>
                </div>
                <div className="info">
                    <div className="name">
                        <div className="area">
                            {boards[i].area}
                        </div>
                        <div className="company">
                            {boards[i].agency}
                        </div>
                    </div>
                    <div className="price">
                        ₹ {boards[i].price}
                    </div>
                </div>
            </div>
        );
    }
    return(renderBoards);
}

export default LocateBoards;
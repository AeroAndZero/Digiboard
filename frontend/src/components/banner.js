import React from "react";

function Banner(){
    return (
    <div className="banner">
        <div className="titleLine">A Digitalized Billboard<br/>Advertisement Platform</div>
        <div className="titleButton" onClick={() => {window.location.href = "/Locate"}}>Search For Boards</div>
    </div>
    );
}

export default Banner;
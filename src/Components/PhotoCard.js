import React from "react";

function PhotoCard({imgUrl}){
    return (
        <div className = "photo-card">
            <img src={imgUrl} style = {{maxWidth: "1000px"}} alt="planets" />

        </div>
    );

}

export default PhotoCard
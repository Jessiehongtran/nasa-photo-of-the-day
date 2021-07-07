import React from "react";

function PhotoCard({title,imgUrl}){
    return (
        <div className = "photo-card">
            <h1>{title}</h1>
            <img src={imgUrl} style = {{maxWidth: "1000px"}} alt="planets" />
        </div>
    );

}

export default PhotoCard
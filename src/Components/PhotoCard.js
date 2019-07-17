import React from "react";

function PhotoCard({imgUrl}){
    return (
        <div className = "photo-card">
            <img src={imgUrl} style = {{maxWidth: "200px"}} />

        </div>
    );

}

export default PhotoCard
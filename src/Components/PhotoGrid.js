import React, { useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoGrid(){
    const [photos, setPhotos] = useState([]);
    
    useEffect(()=>{
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2012-02-14`)
            .then(response => {
                console.log('response', response)
                const planet = response.data.url;
                setPhotos(planet)
            })
    },[]);


    return (
        <div className = "photo-grid">
        <PhotoCard key = {setPhotos} imgUrl = {photos}/>
        </div>
    )
}

export default PhotoGrid


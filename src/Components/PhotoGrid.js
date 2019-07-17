import React, { useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";

function PhotoGrid(){
    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState("2012-02-14")
    
    useEffect(()=>{
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(response => {
                console.log('response', response)
                const planet = response.data.url;
                setPhotos(planet)
            })
    },[date]);


    return (
        <div className = "photo-grid">
        <button onClick={()=>setDate('2012-02-14')}>2012-02-14</button>
        <button onClick={()=>setDate('2012-02-15')}>2012-02-15</button>
            <form>
                <input placeholder="Search for date..." ref={input =>setDate(input)}/>
            </form>
        <PhotoCard key = {setPhotos} imgUrl = {photos}/>
        </div>
    )
}

export default PhotoGrid


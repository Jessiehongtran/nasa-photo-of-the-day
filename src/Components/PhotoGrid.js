import React, { useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import { Button, Icon, Label } from 'semantic-ui-react'
import {LikeButton} from "./Style"

function PhotoGrid(){
    const [title, setTitle]  = useState([]);
    const [photos, setPhotos] = useState([]);
    const [date, setDate] = useState("2012-02-14")
    
    useEffect(()=>{
        axios 
            .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${date}`)
            .then(response => {
                console.log('response', response)
                const planetName = response.data.title;
                setTitle(planetName)
                const planet = response.data.url;
                setPhotos(planet)
            })
    },[date]);



    return (
        <div className = "photo-grid">
            {/* <button onClick={(date)=>setDate(date -1)}>back</button> */}
            <button onClick={()=>setDate('2012-02-14')}>2012-02-14</button>
            <button onClick={()=>setDate('2012-02-15')}>2012-02-15</button>
            {/* <button onClick={(date)=>setDate(date +1)}>next</button> */}
                <form>
                    <input placeholder="Search for date..." ref={input =>setDate(input)}/>
                </form>
            <LikeButton>
                <Button as='div' labelPosition='right'>
                    <Button icon>
                        <Icon name='heart' />
                        Like
                    </Button>
                    <Label as='a' basic pointing='left'>
                        2,048
                    </Label>
                </Button>
            </LikeButton>

            <PhotoCard title = {title} imgUrl = {photos} />
            </div>
    )
}

export default PhotoGrid


import React, { useEffect, useState} from "react";
import axios from "axios";
import PhotoCard from "./PhotoCard";
import { Button, Icon, Label } from 'semantic-ui-react'
import {DateButtons, BackDateButton, FirstDateButton, SecondDateButton, NextDateButton, LikeButton} from "./Style"

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

    var today = new Date('2012-02-14')
    var yesterday = new Date(today.getTime() - 24 * 60 * 60 * 1000)
    var theFollowingday = new Date(today.getTime() + 2 * 24 * 60 * 60 * 1000)


    return (
        <div className = "photo-grid">
            <DateButtons>
                <BackDateButton>
                    <Button animated='fade'>
                        <Button.Content visible onClick={()=>setDate(yesterday)}>Back</Button.Content>
                        <Button.Content hidden>Ready?</Button.Content>
                    </Button>
                </BackDateButton>
                {/* <button onClick={()=>setDate(yesterday)}>back</button> */}

                <FirstDateButton>
                    <Button animated='fade'>
                        <Button.Content visible onClick={()=>setDate('2012-02-14')}>2012-02-14</Button.Content>
                        <Button.Content hidden>Ready?</Button.Content>
                    </Button>
                </FirstDateButton>

                <SecondDateButton>
                    <Button animated='fade'>
                        <Button.Content visible onClick={()=>setDate('2012-02-15')}>2012-02-15</Button.Content>
                        <Button.Content hidden>Ready?</Button.Content>
                    </Button>
                </SecondDateButton>

                <NextDateButton>
                    <Button animated='fade'>
                        <Button.Content visible onClick={()=>setDate(theFollowingday)}>Next</Button.Content>
                        <Button.Content hidden>Ready?</Button.Content>
                    </Button>
                </NextDateButton>

                {/* <button onClick={()=>setDate('2012-02-14')}>2012-02-14</button> */}
                {/* <button onClick={()=>setDate('2012-02-15')}>2012-02-15</button> */}
              
            </DateButtons>

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


import data from "./data.js"
import React from 'react'

export default function Meme (){
    const [img, setImg] = React.useState()
    function newMeme(){
        let memesArr= data.data.memes
        let randomIndex = Math.floor(Math.random()*memesArr.length)
        let randomImg= memesArr[randomIndex].url
        setImg(randomImg)
    }
    
    return (
        <main className="input-form">
            <div className="input-fields">
                <input  className="input1" value="Shut up" type="text"></input>
                <input  className="input2" value="and take my money" type="text"></input>
            </div>
            <button 
            
            onClick={newMeme}
            className="submit-btn" 
            type="submit"
            >Get a new meme image  🖼</button>

            <img class='meme-img' src={img}/>
    
        </main>

    )
}
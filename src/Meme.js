import data from "./data.js"
import React from 'react'

export default function Meme (){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: "http://i.imgflip.com/1bij.jpg"
    })

    const [allMemeImg, setAllMemeImg]= React.useState(data)

    function newMeme(){
        let memesArr= allMemeImg.data.memes
        let randomIndex = Math.floor(Math.random()*memesArr.length)
        let randomImg= memesArr[randomIndex].url
        setMeme(prevMeme=> {
            return {
                ...prevMeme,
                randomImg: randomImg
            }
        })
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

            <div className="meme">
                <img className='meme-img' src={meme.randomImg}/>
                <h2 className="meme-text top">One does not simply</h2>
                <h2 className="meme-text bottom">Walk into Morder</h2>
            </div>
        </main>

    )
}
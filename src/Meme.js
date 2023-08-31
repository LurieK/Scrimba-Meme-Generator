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

    function handleChange(event){
        const {name, value} = event.target
        setMeme(prevMeme=>{
            return{ 
                ...prevMeme,
                [name]: value
            }
        })
        console.log(meme)
    }

    
    return (
        <main className="input-form">
            <div className="input-fields">
                
                <input  
                className="input1" 
                placeholder="Enter top text"
                value={meme.topText} 
                type="text"
                name="topText"
                onChange={handleChange}
                
                />
                
                <input  
                className="input2" 
                placeholder="Enter bottom text"
                value={meme.bottomText} 
                type="text"
                name= "bottomText"
                onChange={handleChange}
                
                />
            </div>
            <button 
            
            onClick={newMeme}
            className="submit-btn" 
            type="submit"
            >Get a new meme image  🖼</button>

            <div className="meme">
                <img className='meme-img' src={meme.randomImg}/>
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>

    )
}
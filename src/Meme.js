// import data from "./data.js"
import React from 'react'

export default function Meme (){

    const [meme, setMeme] = React.useState({
        topText: '',
        bottomText: '',
        randomImg: ""
    })

    const [allMemeImg, setAllMemeImg]= React.useState({})
    
    React.useEffect(()=>{
        console.log("effect ran")
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(meme => setAllMemeImg(meme.data.memes))
    }, [])

    function newMeme(){
        let randomIndex = Math.floor(Math.random()*allMemeImg.length)
        let randomImg= allMemeImg[randomIndex].url

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
import data from "./data.js"

export default function Meme (){
    
    function newMeme(){
        let memesArr= data.data.memes
        let randomIndex = Math.floor(Math.random()*memesArr.length)
        let randomImg= memesArr[randomIndex].url
        console.log(randomImg)
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
    
        </main>

    )
}
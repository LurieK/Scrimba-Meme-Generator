import data from "./data.js"

export default function Meme (){
    let memesArr= data.data.memes
    function newMeme(){
        console.log(memesArr)
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
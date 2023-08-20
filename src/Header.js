import Troll from "./imgs/Troll_Face.png"

export default function Header (){
   
   return ( 
   <section className="header">
        <div className="title">
            <img src={Troll}/>
            <h2>Meme Generator</h2>
        </div>
        <h4 className="subtitle">React Course - Project 3</h4>
    </section>
)
}